import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import CtaForm from '../../components/cta-form/CtaForm'


export default function Home() {
  return (
    <section className='home'>
      <Header>
        <Hero>
          <CtaForm />
        </Hero>
      </Header>

      {/* <Jumbotron />
      <Accordion />
      <Footer /> */}
    </section>
  )
}
