import { CV_DATA } from "../../../helpers/cv-data";
import styles from "../styles.module.scss";
import { faEnvelope, faLocationDot, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { ContactItem } from "./ContactItem";

export const Contacts = () => (
  <div className={styles.containerContacts}>
    <ContactItem icon={faEnvelope} label="Email" contact={CV_DATA.email} />
    <ContactItem icon={faLocationDot} label="Location" contact={CV_DATA.location} />
    <ContactItem icon={faMobileScreen} label="Phone" contact={CV_DATA.phone} />
  </div>
);
