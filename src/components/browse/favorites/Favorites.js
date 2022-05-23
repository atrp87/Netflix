import { db } from '../../../firebase/firebase'
import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import Card from '../card/Card'
import { useTitle } from '../../../hooks/useTitle'

export default function Favorites({ tabTitle }) {
  const [favorites, setFavorites] = useState([])

  useTitle(tabTitle)

  useEffect(() => {
    onSnapshot(collection(db, 'favorites'),
      (snapshot) => {
        setFavorites(
          snapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
          })
        )
      }
    )
  }, [])

  return (
    <div className="favorites_wrapper">
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
