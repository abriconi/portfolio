import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
    icon: IconDefinition;
}

export const Icon: React.FC<Props> = ({ icon }) => {
    const iconColor = getComputedStyle(document.documentElement).getPropertyValue('--icon-color').trim();
    return (
        <FontAwesomeIcon icon={icon as IconProp} size="2x" style={{ color: iconColor }}/>
    )
}