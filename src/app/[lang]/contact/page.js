import { getDictionary } from '../../../../get-dictionary'
import { FormContact } from '../components/contact/FormContact/FormContact'
import DetailsContact from '../components/contact/detailsContact/DetailsContact'
import styles from './contact.module.css'

export default async function page({ params: { lang } }) {
  const dictionary = await getDictionary(lang)

  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>{dictionary['contact'].title}</h1>

      <div className={styles.container}>
        <DetailsContact dictionary={dictionary} />
        <FormContact dictionary={dictionary} />
      </div>
    </div>
  )
}
