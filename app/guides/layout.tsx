import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-surface-950">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  )
}
