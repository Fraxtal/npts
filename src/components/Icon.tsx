import type { IconBaseProps, IconType } from "react-icons";
import { FaGlobe, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const iconMap = {
  globe: FaGlobe,
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaEnvelope,
} as const satisfies Record<string, IconType>;

export type IconName = keyof typeof iconMap;

interface IconProps extends IconBaseProps {
  name: IconName;
}

export default function Icon({ name, ...props }: IconProps) {
  const IconComponent = iconMap[name];
  return <IconComponent {...props} />;
}
