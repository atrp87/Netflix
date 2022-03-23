import Header from '../../components/header/Header'
import Feature from '../../components/feature/Feature'
import OptForm from '../../components/opt_form/OptForm'


export default function Home() {
  return (
    <section className='home'>
      <Header>
        <Feature>
          <OptForm />
        </Feature>
      </Header>

      {/* <Jumbotron />
      <Accordion />
      <Footer /> */}
    </section>
  )
}
