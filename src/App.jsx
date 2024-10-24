import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Player from './components/Player/Player'
import Players from './components/Players/Players'

function App() {

  return (
    <div className='w-11/12 mx-auto pt-4 space-y-10'>
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Player */}
      <Player></Player>
      {/* Player card section */}
      <section>
        {/* Card Section */}
        <Players></Players>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default App
