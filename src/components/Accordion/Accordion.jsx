import { useState } from "react"
import './accordion.scss'
import '../../styles/_worksans-font.scss'
import plus from '../../assets/images/icon-plus.svg'
import minus from '../../assets/images/icon-minus.svg'
import bar from '../../assets/images/Rectangle1.svg'
import PropTypes from 'prop-types';

const Accordion = ({ question, answer, id }) => {

  const [isClicked, setIsClicked] = useState(false)

  const toggleAnswer = (e) => {
    e.preventDefault()
    setIsClicked(!isClicked)
  }

  return (
    <section className="accordion-section" onClick={(e)=> toggleAnswer(e)}>
      <img className={`bar-${id}`} src={bar} alt="Separator bar"/>
      <div className="button-container">
        <h2 className="question-text">{ question }</h2>
        <button type="button" className="dropdown-button">
          {isClicked ? <img src={minus} alt="Minus sign"/> : <img src={plus} alt="Plus sign"/>}
        </button>
        {console.log(id)}
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

Accordion.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  id: PropTypes.number
};