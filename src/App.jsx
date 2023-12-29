import Card from './components/Card/Card'
import './styles/_global.scss'
import mobileHeaderImage from './assets/images/background-pattern-mobile.svg'

const App = () => {
  return (
    <>
        <header>
          <img className='header-background' src={mobileHeaderImage} alt="Mobile Header Image" />
        </header>
          <Card />
    </>
  )
}

export default App
