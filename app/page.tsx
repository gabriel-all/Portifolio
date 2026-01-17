import type { Metadata } from "next"
import Hero from "@/components/hero"
import Sobre from "@/components/Sobre"
import Tecnologias from "@/components/Tecnologias"
import Projetos from "@/components/projects"
import Contato from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Gabriel de Andrade | Portfolio",
  description: "Professional portfolio of Gabriel de Andrade - Software Developer",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Tecnologias />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}
