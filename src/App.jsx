import Card from './components/Card/Card'
import './styles/_global.scss'

const App = () => {
  return (
    <>
        <header>
          <div role="img" aria-label="Header banner image" className='header-background-image'></div>
        </header>
        <Card />
    </>
  )
}

export default App
