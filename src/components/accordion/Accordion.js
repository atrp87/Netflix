import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import faqsJson from '../../fixtures/faqs.json'

export default function Accordion({ children }) {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='home_page_card'>
      <div className="faq_wrapper">
        <div className="faq_card_text">
          <h1 className="home_card_title">
            Frequently Asked Questions
          </h1>


          <ul className="faq_list">
            {
              faqsJson.map(faq => (
                <li
                  key={faq.id}
                  className="faq_list_item">
                  <button
                    onClick={() => setToggle(true)}
                    className="faq_question">
                    {faq.header}
                    {<AiOutlinePlus className='plus_icon' />}
                  </button>
                  <div className="faq_answer">
                    <span>{faq.body}</span>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
        {children}
      </div>
    </div>
  )
}
