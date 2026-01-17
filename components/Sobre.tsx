"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Lightbulb, Rocket } from "lucide-react"

export default function Sobre() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="Sobre" className="py-20 bg-muted/30">
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
            Sobre mim
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quem eu Sou</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4">Um desenvolvedor em progresso</h3>
            <p className="text-muted-foreground mb-6">
            
            </p>
            <p className="text-muted-foreground mb-6 text-justify">
              Sou um desenvolvedor de software em início de carreira, apaixonado por criar aplicações limpas, eficientes e centradas no usuário.
              Recém-formado, estou ansioso para aplicar osconhecimentos adquiridos durante a graduação em projetos reais, desde sites responsivos
              até sistemas web mais robustos.
            </p>
            <p className="text-muted-foreground mb-6 text-justify">
              Minha jornada na programação começou durante a faculdade, onde descobri minha verdadeira vocação ao resolver problemas complexos através do código. 
              Essa descoberta transformou minha perspectiva e me motivou a mergulhar profundamente no mundo do desenvolvimento de software.
            </p>

            <p className="text-muted-foreground mb-6 text-justify">
              Embora esteja no início da minha carreira profissional, já desenvolvi diversos projetos acadêmicos e pessoais que me permitiram 
              explorar diferentes tecnologias e metodologias. Cada linha de código escrita representa uma oportunidade de aprendizado e crescimento.
            </p>

            <p className="text-muted-foreground mb-6 text-justify">
              Tenho sede de conhecimento e estou sempre em busca de novos desafios. Quando não estou programando, você me encontrará estudando novas tecnologias, 
              participando de comunidades de desenvolvedores, contribuindo para projetos open source ou compartilhando minha jornada de aprendizado através de posts e discussões técnicas.
              Estou pronto para contribuir com equipes dinâmicas e crescer junto com projetos inovadores, trazendo energia, curiosidade e uma
              perspectiva fresca para cada desafio que encontrar pelo caminho.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Código limpo</h4>
                      <p className="text-muted-foreground">
                        Eu escrevo código sustentável, escalável e eficiente, seguindo as melhores práticas e padrões do setor.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Solucionador de problemas</h4>
                      <p className="text-muted-foreground">
                        Gosto de enfrentar desafios complexos e encontrar soluções elegantes por meio do pensamento criativo.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Aprendizado rápido</h4>
                      <p className="text-muted-foreground">
                        Eu me adapto rapidamente a novas tecnologias e ambientes, expandindo constantemente meu conjunto de habilidades.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
