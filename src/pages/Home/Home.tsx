import Hero from './components/Hero/Hero'
import './Home.css'
import About from './components/About/About'
import ServicesPreview from './components/ServicesPreview/ServicesPreview'

function Home() {
  return (
    <main className="home">
      <Hero />
      <About />
      <ServicesPreview />
    </main>
  )
}

export default Home