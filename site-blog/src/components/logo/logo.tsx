import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" title="Página Inicial">
      <Image
        src={"/logo.svg"}
        alt="Logo site"
        width={287}
        height={81}
        priority
        style={{ width: 116, height: 32 }}
      />
    </Link>
  );
}
