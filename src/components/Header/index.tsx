import sleep from 'assets/icons/sleep.svg'
import shower from 'assets/icons/shower.svg'
import meet from 'assets/icons/meet.svg'
import learn from 'assets/icons/learn.svg'
import football from 'assets/icons/football.svg'
import style from './Header.module.css'

export const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>todos app</h1>

      <div className={style.images}>
        <img src={sleep} alt='' />
        <img src={shower} alt='' />
        <img src={meet} alt='' />
        <img src={learn} alt='' />
        <img src={football} alt='' />
      </div>
    </header>
  )
}
