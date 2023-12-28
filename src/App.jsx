import Card from './components/Card/Card'
import './styles/_global.scss'
import mobileHeaderImage from './assets/images/background-pattern-mobile.svg'

const App = () => {
  return (
    <>
      <section className='card-and-header-section'>
        <header>
          <img src={mobileHeaderImage} alt="Mobile Header Image" />
        </header>
        <Card />
      </section>
    </>
  )
}

export default App
