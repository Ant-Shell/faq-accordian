import Accordian from './Accordian'
import data from './../data/data'

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
    <section>
      { accordians }
    </section>
  </>
  )
}

export default Card