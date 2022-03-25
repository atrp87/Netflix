import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import Accordion from '../../components/accordion/Accordion'
import Footer from '../../components/footer/Footer'
import CtaForm from '../../components/cta-form/CtaForm'


export default function Home() {
  return (
    <div className='home_page_container'>
      <div className="home_page_cards">
        <Header />
        <Hero>
          <CtaForm />
        </Hero>

        <Jumbotron />
        {/* <Accordion /> */}

        {/* <Footer /> */}
      </div>
    </div>
  )
}
