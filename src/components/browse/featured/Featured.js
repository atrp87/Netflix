import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsPlayFill } from 'react-icons/bs'



export default function Featured({ title, overview }) {

  return (
    <div className="featured_bg">
      <div className="featured_content">
        <div className="featured_img_container">
          <img src={title} alt="" />
        </div>
        <div className="featured_overview">
          <p>
            {overview}
          </p>
        </div>
        <div className="featured_btns">
          <button>
            <span>
              <BsPlayFill />
            </span>
            Play
          </button>
          <button>
            <span>
              <AiOutlineInfoCircle />
            </span>
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}
