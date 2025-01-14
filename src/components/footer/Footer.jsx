import Facebook from '../../assets/Facebook.png'
import Instagram from '../../assets/Instagram.png'
import Linkedin from '../../assets/Linkedin.png'
import s from '../footer/footer.module.scss'

export default function Footer(){
    return(
      <footer>
        <section>
        <img src={Facebook} alt="imagem do facebook" />
        <img src={Instagram} alt="imagem do instagram" />
        <img src={Linkedin} alt="imagem do linkedin" />
        </section>
     
      </footer>
      
    )
}