import { HiOutlineChevronRight } from 'react-icons/hi'

export default function CtaForm() {
  return (
    <form action="#" className="cta_form">
      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      <div className="cta_form_content">
        <div className="cta_input_container">
          <label>
            <span>Email address</span>
            <input type="email" placeholder="Email address" />
          </label>
        </div>
        <div className="cta_submit_btn_container">
          <button
            onClick={(e) => e.preventDefault()}>
            Get Started
            <span>
              <HiOutlineChevronRight />
            </span>
          </button>
        </div>
      </div>
    </form>
  )
}
