import { FormContact } from '../components/contact/FormContact/FormContact'
import DetailsContact from '../components/contact/detailsContact/DetailsContact'
import styles from './contact.module.css'

export default function page() {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Contact</h1>

      <div className={styles.container}>
        <DetailsContact />
        <FormContact />
      </div>
    </div>
  )
}
