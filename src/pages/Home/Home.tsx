import Hero from './components/Hero/Hero'
import './Home.css'
import About from './components/About/About'
import ServicesPreview from './components/ServicesPreview/ServicesPreview'
import Modalities from './components/Modalities/Modalities'

function Home() {
  return (
    <main className="home">
      <Hero />
      <About />
      <ServicesPreview />
      <Modalities />
    </main>
  )
}

export default Home