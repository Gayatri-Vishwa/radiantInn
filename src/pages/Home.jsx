
import Hero from '../components/Hero'
import Offerings from  '../components/Offerings'
import Gallery from '../components/Gallery'
import ContactSection from '../components/ContactSection'
import About from '../components/About'
import Menu from '../pages/Menu'

import Rooms from '../components/Rooms'
import MenuPreview from '../components/MenuPreview'
import Amenities from '../components/Amenities'
import Testimonials from '../components/Textimonials'
import Footer from '../components/Footer'




function Home() {
  return (
    <section  className='min-h-screen'>
     
    <Hero />

<About />

<Offerings />

<Rooms />

<MenuPreview />

<Amenities />

<Gallery />

<Testimonials />

<ContactSection />

<Footer />
  
    </section>
  )
}

export default Home
