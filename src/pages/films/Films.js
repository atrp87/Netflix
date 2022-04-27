import Navbar from '../../components/browse/navbar/Navbar'
import { useState } from 'react';
import MediaList from '../../components/browse/media_list/MediaList'
import { useFetch } from '../../hooks/useFetch'
import Featured from '../../components/browse/featured/Featured';
// import Pending from '../components/Pending';
import filmTitle from '../../assets/film_title.jpeg';
import Footer from '../../components/home/footer/Footer'


export default function Films() {
  const [url, setUrl] = useState('https://api.themoviedb.org/3/trending/all/day?api_key=5110a18bf289e8466990eeaaf03df978')

  const overview = "A woman who's been alone on a spaceship her whole life becomes enamored with an engineer who suddenly enters her world and upends her universe."

  const { data: films, isPending, error } = useFetch(url)

  return (
    <>
      {/* <div>
        {isPending && <Pending />}
        {error && <div>{error} </div>}
      </div> */}
      <Navbar />

      <Featured
        title={filmTitle}
        overview={overview}
      />


      {
        <MediaList films={films} />
      }
      <Footer />
    </>
  );
}
