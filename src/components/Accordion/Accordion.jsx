import { useState } from "react"
import './accordion.scss'
import '../../styles/_worksans-font.scss'
import plus from '../../assets/images/icon-plus.svg'
import minus from '../../assets/images/icon-minus.svg'

const Accordion = ({ question, answer }) => {

  const [isClicked, setIsClicked] = useState(false)

  const toggleAnswer = (e) => {
    e.preventDefault()
    setIsClicked(!isClicked)
  }

  return (
    <section className="accordion-section">
      <div className="button-container">
        <h2 className="question-text">{ question }</h2>
        <button className="dropdown-button" onClick={(e)=> toggleAnswer(e)}>
          {isClicked ? <img src={minus}/> : <img src={plus}/>}
        </button>
      </div>
      { 
        isClicked && 
        <div>
          <p className="answer-text">
            { answer }
          </p>
        </div>
      }
    </section>
  )
}


export default Accordion