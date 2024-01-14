import Hero from '@/components/main/Hero'
import StarsCanvas from '@/components/main/StarBackground'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className='flex flex-col h-[850px] gap-20'>
        <StarsCanvas />
        <Hero />
      </div>
    </main>
  )
}


