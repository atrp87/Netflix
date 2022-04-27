export default function MediaList({ films }) {
  return (
    <>
      {
        films &&
        films.results.map((film) => (
          <div key={film.id} className='vid'>
            <div className="vid_content">
              <img src={`https://image.tmdb.org/t/p/original${film.poster_path}`} alt={film.title} />
            </div>

          </div>
        ))
      }
    </>
  )
}