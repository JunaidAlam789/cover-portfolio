import Image from 'next/image'

import styles from './page.module.css'
import HeaderArea from './headerarea'
import FooterArea from './footerarea'
import portfolio_text from './portfolio_text'
import Portfolio_Text from './portfolio_text'
import Projects from './projects'

export default function Home() {
  return (
  <main className={styles.main}>
      <div className="">
        
        <HeaderArea/>
        <Portfolio_Text/>
        <Projects/>
        <FooterArea/>
          </div>
          </main>
  )
}
