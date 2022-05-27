import { db } from '../../../firebase/firebase'
import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import Card from '../card/Card'
import { useTitle } from '../../../hooks/useTitle'
import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import Pending from '../pending/Pending'

export default function Favorites({ tabTitle }) {
  const [favorites, setFavorites] = useState([])
  const [isPending, setIsPending] = useState(false)
  const { currentUser } = useContext(AuthContext)

  useTitle(tabTitle)




  useEffect(() => {
    const getFavorites = async () => {
      setIsPending(true)

      try {
        const snapRef = collection(db, `users/${currentUser.uid}/favorite`)

        onSnapshot(snapRef, (snapshot) => {
          setFavorites(
            snapshot.docs.map(doc => {
              return { id: doc.id, ...doc.data() }
            })
          )
          setIsPending(false)
        })
      } catch (err) {
        console.log(err.message);
        setIsPending(false)
      }
    }

    getFavorites()
  }, [currentUser])

  return (
    <div className="favorites_wrapper">

      {isPending && <Pending />}
      <div className="favorites_title">
        <h2>My List</h2>
      </div>
      <div className="favorites_content">
        {
          favorites.map((fave) => (
            <div key={fave.id} className="img_container">
              <Card
                poster={fave.poster ? `https://image.tmdb.org/t/p/w500${fave.poster}` : ''}
                title={fave.title}
                date={fave.date}
                overview={fave.overview}>
              </Card>
            </div>
          ))
        }
      </div>
    </div>

  )
}
