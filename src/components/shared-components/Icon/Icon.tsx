import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconDefinition;
  size?: SizeProp;
}

export const Icon: React.FC<Props> = ({ icon, size = "2x" }) => {
  const iconColor = getComputedStyle(document.documentElement).getPropertyValue("--icon-color").trim();
  return <FontAwesomeIcon icon={icon as IconProp} size={size} style={{ color: iconColor }} />;
};
