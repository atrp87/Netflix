import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsPlayFill } from 'react-icons/bs'
import { useTitle } from '../../../hooks/useTitle'

export default function Featured({ title, overview, background, tabTitle }) {

  useTitle(tabTitle)

  return (


    <div className="featured_background">
      <img src={background} alt={overview} />
      <div className="info">
        <img
          src={title}
          alt={overview}
        />
        <span className="desc">
          {overview}
        </span>
        <div className="buttons">
          <button className="play">
            <BsPlayFill />
            <span>Play</span>
          </button>
          <button className="more">
            <AiOutlineInfoCircle />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}
