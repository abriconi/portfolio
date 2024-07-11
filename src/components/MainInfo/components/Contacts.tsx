import { CV_DATA } from "../../../helpers/cv-data";
import styles from "../MainInfo.module.scss";

import { InfoCard } from "../../shared-components/InfoCard";
import { faEnvelope, faLocationDot, faMobileScreen } from "@fortawesome/free-solid-svg-icons";

export const Contacts = () => (
    <div className={styles.wrapperDetails}>
        <InfoCard 
            icon={faEnvelope}
            label="Email" 
            text={CV_DATA.email}>
        </InfoCard>
        <InfoCard 
            icon={faMobileScreen}
            label="Phone" 
            text={CV_DATA.phone}>
        </InfoCard>
        <InfoCard 
            icon={faLocationDot}
            label="Location" 
            text={CV_DATA.location}>
        </InfoCard>
    </div>
)