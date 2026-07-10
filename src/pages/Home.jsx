
import Hero from '../components/Hero'
import Service from  '../components/Services'
import Gallery from '../components/Gallery'
import ContactSection from '../components/ContactSection'
import About from '../components/About'
import Menu from '../pages/Menu'

import SignatureDishes from '../components/SignatureDishes'
import MenuPreview from '../components/MenuPreview'
import ChefSection from '../components/ChefSection'
import Testimonials from '../components/Textimonials'
import Footer from '../components/Footer'




function Home() {
  return (
    <section  className='min-h-screen'>
     
    <Hero />

<About />

<Service />

<SignatureDishes />

<MenuPreview />

<ChefSection />

<Gallery />

<Testimonials />

<ContactSection />

<Footer />
  
    </section>
  )
}

export default Home
