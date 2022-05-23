import { BsPlayFill, BsFillXCircleFill } from 'react-icons/bs'
import { AiOutlinePlusCircle, AiOutlineCheckCircle } from 'react-icons/ai'
import { collection, addDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../../firebase/firebase'
import { AuthContext } from '../../../context/AuthContext'
import { useContext } from 'react'

export default function Modal({ poster, title, date, overview, setIsModalOpen }) {

  const { currentUser } = useContext(AuthContext)

  console.log(currentUser);

  const deleteDocHandler = async (id) => {
    const docRef = (db, 'favorites', id);
    // await deleteDoc(docRef)
    console.log(docRef, id);
  }

  const handleFavorite = async () => {

    try {
      const docRef = doc(db, 'users', currentUser.uid)
      const colRef = collection(docRef, 'favorite')
      addDoc(colRef, {
        poster,
        title,
        date,
        overview
      })
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="modal">
      <div className="modal_content">
        <div
          onClick={() => setIsModalOpen(false)}
          className="modal_close">
          <BsFillXCircleFill />
        </div>
        <div className="modal_img">
          <div className="modal_img_overlay"></div>
          <img className='img' src={poster} alt={title} />
        </div>
        <div className="modal_info">
          <div className="modal_title">
            <h3>{title}</h3>
            <span>{date}</span>
          </div>
          <div className="modal_overview">
            {overview}
          </div>
          <div className="modal_btns">
            <button className='play'>
              <BsPlayFill />
              <span>Play</span>
            </button>
            <span onClick={() => handleFavorite()}>
              <AiOutlinePlusCircle className='like' />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
