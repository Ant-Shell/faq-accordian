import { useState } from "react"
import '../styles/mixins/worksans-font.scss'


const Accordion = ({ question, answer }) => {

  const [isClicked, setIsClicked] = useState(false)

  const toggleAnswer = (e) => {
    e.preventDefault()
    setIsClicked(!isClicked)
  }

  return (
    <section>
      <div>
        <h2 className="question-text">{ question }</h2>
        <button onClick={(e)=> toggleAnswer(e)}>X</button>
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