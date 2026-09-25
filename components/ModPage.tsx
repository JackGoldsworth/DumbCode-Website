import Image from 'next/image'
import { ModInfoType } from '../data/modData'
import Footer from './Footer'
import ModInfoSidebar from './ModInfoSidebar'
import Navbar from './Navbar'
import { Container } from './Section'

const ModPage = ({
  modInfo,
  children,
}: {
  modInfo: ModInfoType
  children: React.ReactNode
}) => {
  return (
    <div className="flex min-h-screen flex-col bg-surface-950">
      <Navbar />
      <main className="flex-1 pt-16">
        <div className="relative isolate overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 -z-10">
            <Image
              src={modInfo.image}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface-950/60 to-surface-950" />
          </div>
          <Container className="py-16">
            <h1 className="text-balance text-5xl font-semibold text-ink-100 sm:text-6xl">
              {modInfo.name}
            </h1>
            <p className="mt-4 max-w-2xl text-ink-300">
              {modInfo.description}
            </p>
          </Container>
        </div>

        <Container className="flex flex-col gap-12 py-12 md:flex-row-reverse">
          <ModInfoSidebar modInfo={modInfo} />
          <article className="min-w-0 flex-1">{children}</article>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default ModPage
