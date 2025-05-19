type AvatarDesciptionProps = {
  children: React.ReactNode;
};

export function AvatarDescription({ children }: AvatarDesciptionProps) {
  return <div className="text-gray-300 text-body-xs">{children}</div>;
}
