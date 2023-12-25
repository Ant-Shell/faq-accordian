import Accordian from './Accordion'
import data from './../data/data'
import star from '../assets/images/icon-star.svg'
import '../styles/card.scss'
import '../styles/mixins/worksans-font.scss'

const Card = () => {

  const accordians = data.map(item => {
    const {id, question, answer} = item
    return (
      <Accordian
        key={id}
        question={question}
        answer={answer}
      />
    )
  })

  return (
    <>
    <section className='card-section'>
      <div className='faqs-banner'>
        <img src={star}/>
        <h1 className='faqs-text'>FAQs</h1>
      </div>
      { accordians }
    </section>
  </>
  )
}

export default Card