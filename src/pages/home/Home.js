import Header from '../../components/home_components/header/Header'
import Hero from '../../components/home_components/hero/Hero'
import CtaForm from '../../components/home_components/cta_form/CtaForm'
import Jumbotron from '../../components/home_components/jumbotron/Jumbotron'
import Accordion from '../../components/home_components/accordion/Accordion'
import Footer from '../../components/home_components/footer/Footer'


export default function Home() {
  return (
    <div className='home_page_container'>
      <div className="home_page_cards">
        <Header />
        <Hero>
          <CtaForm />
        </Hero>
        <Jumbotron />
        <Accordion>
          <CtaForm />
        </Accordion>
        <Footer />
      </div>
    </div>
  )
}
