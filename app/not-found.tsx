import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-surface-950">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4 pt-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">
            404
          </p>
          <h1 className="mt-4 text-5xl font-semibold text-ink-100">
            Page not found
          </h1>
          <p className="mt-4 text-ink-400">
            The page you&apos;re looking for wandered off.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Back home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
