import { BsPlayFill, BsFillXCircleFill } from 'react-icons/bs'
import {
  AiOutlinePlusCircle,
} from 'react-icons/ai' //AiOutlineCheckCircle
import { collection, doc, getDoc, addDoc, onSnapshot } from 'firebase/firestore' //addDoc,  deleteDoc,
import { db } from '../../../firebase/firebase'
import { AuthContext } from '../../../context/AuthContext'
import { useContext, useState, useEffect } from 'react'

export default function Modal({ poster, title, date, overview, setIsModalOpen }) {
  const [favorites, setFavorites] = useState([])
  const { currentUser } = useContext(AuthContext)



  // console.log(favorite);
  // const deleteDocHandler = async (id) => {
  //   const docRef = (db, 'favorites', id);
  //   // await deleteDoc(docRef)
  //   console.log(docRef, id);
  // }
  // if (ing && !ingredients.includes(ing)) {
  //   setIngredients([...ingredients, newIngredient])
  // }

  // useEffect(() => {
  //   const snapRef = collection(db, `users/${currentUser.uid}/favorite`)

  //   onSnapshot(snapRef, (snapshot) => {
  //     snapshot.docs.map((doc) =>
  //       setFavorites({ ...doc.data() })

  //     )
  //   })
  // }, [currentUser.uid, setFavorites])

  // const docSnap = getDoc(collection(db, `users/${currentUser.uid}/favorite`));

  // console.log(docSnap);

  // docSnap.forEach((doc) => {
  //   console.log(doc.data()); // "doc1", "doc2" and "doc3"
  // });
  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }


  const addDocHandler = async () => {


    try {

      console.log(favorites);

      // const snapRef = collection(db, `users/${currentUser.uid}/favorite`)

      // addDoc(snapRef, {
      //   poster,
      //   title,
      //   date,
      //   overview
      // })

      // console.log(doc.title, title);

      // if (doc.title === title) {
      //   console.log('exists');
      // } else {
      //   console.log('new');
      // }




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

            <span onClick={() => addDocHandler(favorites.title)}>
              <AiOutlinePlusCircle className='like' />
            </span>
            {/* {isFavorite ? (
             ) : (
               <span onClick={() => deleteDocHandler()}>
                 <AiOutlineCheckCircle className='like' />
               </span>
             )} */}

          </div>
        </div>
      </div>
    </div>
  )
}
