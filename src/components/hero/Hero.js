export default function Feature({ children }) {
  return (
    <div className='hero_card'>
      <div className='hero_card_text'>
        <h1 className='story_card_title'>Unlimited films, TV programmes and more.</h1>
        <h2 className='story_card_subtitle'>Watch anywhere. Cancel at any time.</h2>
      </div>
      {children}
    </div>
  )
}
