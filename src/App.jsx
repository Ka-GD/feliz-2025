import './globalStyle/globalStyle.scss'
import Header from "./components/header/Header";
import Main from './components/main/Main'
import Footer from './components/footer/Footer';
import fundo from './assets/fundo.png'
export default function App(){
  return(
    <>
    
    <section style={{ 
            backgroundImage: `url(${fundo})`,
        }}>
            <Header />
            <Main />
            <Footer />
        </section>
   
    </>
  )
}