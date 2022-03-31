import { HiOutlineChevronRight } from 'react-icons/hi'

export default function CtaForm() {
  return (
    <form action="#" className="cta_form">
      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      <div className="cta_form_lockup">
        <label placeholder='email'>
          <input type="email" placeholder='Email address' />
        </label>
        <div className="cta_submit_btn_container">
          <button
            onClick={(e) => e.preventDefault()}>
            <span className='cta-btn-txt'>
              Get Started
            </span>
            <span className='chevron-right-arrow'>
              <HiOutlineChevronRight />
            </span>
          </button>
        </div>
      </div>
    </form>
  )
}
