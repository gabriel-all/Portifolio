"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Layout, Server, Database, Wrench, Binary } from "lucide-react"

export default function Tecnologias() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const technologies = {
    languages: {
      icon: <Code2 className="h-6 w-6" />,
      title: "Limguagens de programação",
      description: "Linguagens essenciais para desenvolvimento de sistemas e aplicações",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "C++", level: 70 },
        { name: "C", level: 60 },
        { name: "Java", level: 80 },
        { name: "Ruby", level: 40 },
        { name: "Python", level: 60 },
        { name: "TypeScript", level: 30 },
      ],
    },
    concepts: {
      icon: <Binary className="h-6 w-6" />,
      title: "Conceitos de Engenharia",
      description: "Princípios fundamentais de engenharia de software",
      skills: [
        { name: "Data Structures", level: 95 },
        { name: "Algorithms", level: 90 },
        { name: "OOP", level: 90 },
        { name: "Design Patterns", level: 65 },
        { name: "System Design", level: 80 },
        { name: "Multithreading", level: 75 },
      ],
    },
    frontend: {
      icon: <Layout className="h-6 w-6" />,
      title: "Desenvolvimento Frontend",
      description: "Tecnologias modernas e atuais",
      skills: [
        { name: "React", level: 80 },
        { name: "Next.js", level: 60 },
        { name: "HTML/CSS", level: 80 },
        { name: "Redux", level: 50 },
        { name: "WebGL", level: 30 },
      ],
    },
    backend: {
      icon: <Server className="h-6 w-6" />,
      title: "Desenvolvimento Backend",
      description: "Estruturas e tecnologias do lado do servidor",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 60 },
        { name: "Spring Boot", level: 70 },
        { name: "Ruby on Rails", level: 60 },
      ],
    },
    database: {
      icon: <Database className="h-6 w-6" />,
      title: "Sistemas de Banco de Dados",
      description: "Gerenciamento e otimização de banco de dados",
      skills: [
        { name: "MongoDB", level: 60 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 80 },
        { name: "Redis", level: 70 },
      ],
    },
    tools: {
      icon: <Wrench className="h-6 w-6" />,
      title: "Ferramentas de Desenvolvimento",
      description: "Ferramentas e ambientes para desenvolvimento",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 70 },
        { name: "Linux/Unix", level: 80 },
        { name: "Visual Studio", level: 85 },
      ],
    },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="tech-stack" className="py-20">
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
            Habilidades
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiencia tecnica</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technologies).map(([key, category]) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={scaleUp}
            >
              <Card
                className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedCategory === key ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">{category.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedCategory === key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-2"
                          >
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-1.5">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-primary h-1.5 rounded-full"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {selectedCategory !== key && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill.name}
                        </Badge>
                      ))}
                      {category.skills.length > 3 && (
                        <Badge variant="secondary">+{category.skills.length - 3} more</Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="mt-12 text-center text-muted-foreground"
        >
          <p className="max-w-2xl mx-auto">
            Com algumas experiências tanto em programação de sistemas de baixo nível quanto em desenvolvimento web moderno, trago uma
            compreensão abrangente dos princípios de software para cada projeto.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
