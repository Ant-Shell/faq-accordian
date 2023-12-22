import { useState } from "react"


const Accordion = ({ question, answer }) => {

  const [isClicked, setIsClicked] = useState(false)

  const toggleAnswer = (e) => {
    e.preventDefault()
    setIsClicked(!isClicked)
  }

  return (
    <section>
      <div>
        <h2>{ question }</h2>
        <button onClick={(e)=> toggleAnswer(e)}>X</button>
      </div>
      { 
        isClicked && 
        <div>
          <p>
            { answer }
          </p>
        </div>
      }
    </section>
  )
}


export default Accordion