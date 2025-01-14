import AnoNovo from '../../assets/AnoNovo.png'

import s from '../main/main.module.scss'
export default function Main(){
    return(
       <main>
        <img src={AnoNovo} alt="imagem escrita feliz ano novo 2025" />
       <section className={s.texto}>
       <p className={s.textinho}>Boas Festas!!!</p>
       <h1>Felicidades!!!</h1>
       <p>Em 2025, vamos juntos programar, Com mais código limpo e muito para alcançar! Que o ano novo traga só funções de felicidade, E que a paz seja nossa variável de realidade! Sem bugs, sem falhas, com muito amor, Vamos debugar os problemas com ardor! Que a vida seja sempre o output de alegria, o Vai Na Web te deseja um Ano Novo, que seja pura harmonia!</p>
       </section>
       
       </main>
    )
}