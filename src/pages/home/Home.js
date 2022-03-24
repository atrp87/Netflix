import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import CtaForm from '../../components/cta-form/CtaForm'
import Jumbotron from '../../components/jumbotron/Jumbotron'


export default function Home() {
  return (
    <div className='home'>
      <Header>
        <Hero>
          <CtaForm />
        </Hero>
      </Header>

      <Jumbotron />




      {/* <Accordion />
      <Footer /> */}
    </div>
  )
}
