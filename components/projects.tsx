"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, Clock, ChevronLeft, ChevronRight } from "lucide-react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState({})

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      id: 1,
      title: "Hotel Booking App",
      shortDescription: "Um aplicativo mobile para reservas de hotéis com interface intuitiva.",
      description: "Aplicativo mobile para reservas de hotéis com sistema de status em tempo real e interface moderna.",
      images: [
        "/Fotoappreserva/inicio.jpg",
        "/Fotoappreserva/cadastro.jpg",
        "/Fotoappreserva/login.jpg",
        "/Fotoappreserva/recuperacao.jpg",
        "/Fotoappreserva/hoteis.jpg",
        "/Fotoappreserva/historico.jpg",
        "/Fotoappreserva/reservas.jpg",
        "/Fotoappreserva/perfil.jpg",
      ],
      tags: ["React Native", "TypeScript", "Firebase", "Node.js"],
      features: [
        "Sistema de reservas em tempo real",
        "Status de confirmação automático",
        "Interface mobile responsiva",
        "Histórico de reservas",
        "Perfil de usuário personalizado",
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "Este aplicativo mobile de reservas de hotéis oferece uma experiência completa para usuários que desejam reservar acomodações. Desenvolvido com React Native e TypeScript, o app possui uma interface moderna com fundo azul escuro e cards coloridos para diferentes status de reserva. Inclui funcionalidades como busca de hotéis disponíveis, sistema de reservas, confirmação automática, histórico completo e perfil personalizado do usuário.",
    },
  ]

  const nextImage = (projectId, totalImages, e) => {
    e?.stopPropagation()
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages,
    }))
  }

  const prevImage = (projectId, totalImages, e) => {
    e?.stopPropagation()
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages,
    }))
  }

  const getCurrentImage = (project) => {
    if (!project.images || project.images.length === 0) return "/placeholder.svg"
    const index = currentImageIndex[project.id] || 0
    return project.images[index]
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos desenvolvidos e futuros</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Projeto existente */}
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className="group h-full cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
                onClick={() => setSelectedProject(project)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={getCurrentImage(project) || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=400&width=600"
                      }}
                    />

                    {/* Indicadores de múltiplas imagens */}
                    {project.images && project.images.length > 1 && (
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.images.length} fotos
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">{project.shortDescription}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <Badge key={i} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && <Badge variant="secondary">+{project.tags.length - 3}</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground">Clique para ver detalhes →</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Cards "Em breve" */}
          {[2, 3, 4, 5].map((id) => (
            <motion.div
              key={id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              variants={fadeIn}
            >
              <Card className="h-full opacity-75 hover:opacity-90 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className="w-full aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                      <div className="text-center">
                        <Clock className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                        <h3 className="text-xl font-bold mb-2">Novo Projeto</h3>
                        <p className="text-muted-foreground text-sm">Em breve...</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="opacity-50">
                          Em desenvolvimento
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Novo projeto incrível chegando em breve. Fique ligado para mais atualizações!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal em sobreposição com desfoque */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {/* Galeria de imagens com navegação - REDUZIDA */}
              <div className="relative max-w-md mx-auto">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={getCurrentImage(selectedProject) || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full rounded-lg object-cover aspect-[9/16]"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=600&width=800"
                    }}
                  />

                  {/* Navegação de imagens */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => prevImage(selectedProject.id, selectedProject.images.length, e)}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-200 z-10"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={(e) => nextImage(selectedProject.id, selectedProject.images.length, e)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-200 z-10"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>

                      {/* Contador de imagens */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium">
                        {(currentImageIndex[selectedProject.id] || 0) + 1} / {selectedProject.images.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                {selectedProject.images && selectedProject.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2 mt-4 justify-center">
                    {selectedProject.images.map((image, index) => (
                      <img
                        key={index}
                        src={image || "/placeholder.svg"}
                        alt={`${selectedProject.title} - ${index + 1}`}
                        className={`w-16 h-16 object-cover rounded cursor-pointer transition-all duration-200 flex-shrink-0 ${
                          (currentImageIndex[selectedProject.id] || 0) === index
                            ? "ring-2 ring-primary scale-110"
                            : "opacity-60 hover:opacity-100"
                        }`}
                        onClick={() =>
                          setCurrentImageIndex((prev) => ({
                            ...prev,
                            [selectedProject.id]: index,
                          }))
                        }
                        onError={(e) => {
                          e.target.src = "/placeholder.svg?height=64&width=64"
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Descrição */}
              <div>
                <h4 className="font-semibold text-lg mb-2">Sobre o Projeto</h4>
                <p className="text-muted-foreground leading-relaxed">{selectedProject.fullDescription}</p>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-semibold text-lg mb-3">Principais Funcionalidades</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botões de ação */}
              <div className="flex flex-wrap gap-4 pt-4 border-t">
                <Button variant="outline" className="flex-1 bg-transparent" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Ver Código
                  </a>
                </Button>
                <Button className="flex-1" asChild>
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo ao Vivo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
