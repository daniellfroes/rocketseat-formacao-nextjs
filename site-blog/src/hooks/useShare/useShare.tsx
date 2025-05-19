import { useCallback, useMemo } from "react";
import { Link2 } from "lucide-react";

import {
  ShareConfig,
  SocialProvider,
  SOCIAL_PROVIDERS,
} from "./social-providers";
import { useClipboard } from "../useClipboard";

type useShareProps = ShareConfig & {
  clipboardTimeout?: number;
};

export function useShare({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: useShareProps) {
  const { isCopied, handleCopy } = useClipboard({ timeout: clipboardTimeout });

  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }),
      ...(text && { text }),
    }),
    [url, text, title]
  );

  const share = useCallback(
    async (provider: SocialProvider) => {
      try {
        if (provider === "clipboard") {
          return await handleCopy(url);
        }

        const providerConfig = SOCIAL_PROVIDERS[provider];
        if (!providerConfig) {
          throw new Error(`Provider not supported: ${provider}`);
        }

        const shareUrl = providerConfig.shareUrl(shareConfig);
        const shareWindow = window.open(
          shareUrl,
          "_blank",
          "width=600,height=600,location=yes,status=yes" // Omitir abre em nova aba ao invés de janela
        );

        return !!shareWindow;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    [shareConfig, handleCopy, url]
  );

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProvider),
      })),
      {
        provider: "clipboard",
        name: isCopied ? "Link copiado!" : "Copiar link",
        icon: <Link2 className="h-4 w-4" />,
        action: () => share("clipboard"),
      },
    ],
    [share, isCopied]
  );

  return { shareButtons };
}
