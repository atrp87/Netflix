import jumboJson from '../../fixtures/jumbo.json'

export default function Jumbotron() {
  return (
    <>
      {
        jumboJson.map(story => (
          <div
            key={story.id}
            className="story_card">
            <div
              style={{ flexDirection: story.direction }}
              className="card_container">
              <div className="story_card_text">
                <h1 className='story_card_title'>
                  {story.title}
                </h1>
                <h2 className='story_card_subtitle'>
                  {story.subTitle}
                </h2>
              </div>
              <div className="story_card_img_container">
                <img
                  src={story.image}
                  alt={story.alt}
                />
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}
