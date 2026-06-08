import Hero from './components/Hero/Hero'
import './Home.css'
import About from './components/About/About'

function Home() {
  return (
    <main className="home">
      <Hero />
      <About />
    </main>
  )
}

export default Home