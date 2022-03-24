export default function CtaForm() {
  return (
    <form action="#" className="cta_form">
      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      <div className="cta_form_content">
        <div className="cta_input_container">
          <input type="email" />
        </div>
        <div className="cta_submit_btn_container">
          <button className='hi' onClick={(e) => e.preventDefault()}>Get Started</button>
        </div>
      </div>
    </form>
  )
}
