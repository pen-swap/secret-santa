import santa from './santa.svg'
import './Santa.css'

const Santa = ({ message }) => {

  return (
    <div className='Santa'>
      <img className='Santa-img' src={santa} alt='santa' />
      <div key={`{message} ${Math.random()}`} className='Santa-speechbubble new-message'>{message}</div>
    </div>
  )
}

export default Santa
