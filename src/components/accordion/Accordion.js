import { AiOutlinePlus } from 'react-icons/ai'


export default function Accordion() {
  return (
    <div className='home_page_card'>
      <div className="faq_card_text">
        <h1 className="home_card_title">
          Frequently Asked Questions
        </h1>


        <ul className="faq_list">
          {
            <li className="faq_list_item">
              <button className="faq_question">{<AiOutlinePlus />}</button>
              <div className="faq_answer">
                <span></span>
              </div>
            </li>
          }
        </ul>
      </div>

    </div>
  )
}
