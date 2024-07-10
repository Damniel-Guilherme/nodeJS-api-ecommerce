import './App.css'
import Header from './assets/components/Header'
import Carousel from './assets/components/Carousel'
import Lancamentos from './assets/components/Lancamentos'
import Lanc from './assets/components/Lanc'


function App() {



  return (
    <>
    <header>
      <Header></Header>
      <Carousel></Carousel>
    </header>
    <main>
      <Lancamentos></Lancamentos>
      <Lanc></Lanc>

    </main>
    <footer>
      

    </footer>
    </>
  )
}

export default App