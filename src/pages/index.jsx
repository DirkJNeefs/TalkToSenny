import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>Senny - Your pocket-sized Spanish language expert.</title>
        <meta
          name="description"
                  content="Meet Senny, the chatbot that helps you learn Spanish on WhatsApp! Practice your skills, learn interesting facts about Spain, and improve your listening with audio messages. Plus, Senny can translate text from pictures to help you learn new vocabulary. ¡Vamos a aprender juntos con Senny!"
        />
      </Head>
      <Header />
      <main>
        <Hero />
       
        <SecondaryFeatures />
              
      
        
        <Faqs />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
<PrimaryFeatures />,
<Reviews />,
<CallToAction />,

<Pricing />