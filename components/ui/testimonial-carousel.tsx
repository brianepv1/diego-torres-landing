"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  image: string
  service: string
}

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "María González",
      role: "Cliente Frecuente",
      content:
        "Diego ha transformado mi vida completamente. Sus lecturas de tarot son increíblemente precisas y sus consejos espirituales me han ayudado a superar momentos muy difíciles. Recomiendo totalmente sus servicios a cualquiera que busque orientación espiritual.",
      rating: 5,
      image: "/faivcon.png",
      service: "Lectura de Tarot",
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "Empresario",
      content:
        "Después de la limpia energética que Diego realizó en mi negocio, las ventas aumentaron significativamente. Su conexión con el mundo espiritual es extraordinaria y su profesionalismo es impecable. Estoy eternamente agradecido por su ayuda.",
      rating: 5,
      image: "/faivcon.png",
      service: "Limpias y Abrecaminos",
    },
    {
      id: 3,
      name: "Ana Martínez",
      role: "Profesora",
      content:
        "Las veladoras consagradas que adquirí con Diego han traído paz y armonía a mi hogar. Su conocimiento sobre rituales espirituales es profundo y siempre está dispuesto a explicar detalladamente cada procedimiento. Un verdadero maestro espiritual.",
      rating: 4,
      image: "/faivcon.png",
      service: "Venta de Veladoras",
    },
    {
      id: 4,
      name: "Roberto Sánchez",
      role: "Médico",
      content:
        "El tarot de los 7 arcángeles fue una experiencia reveladora. Diego tiene un don especial para conectar con las energías celestiales y transmitir mensajes con claridad y compasión. Su guía ha sido fundamental para tomar decisiones importantes en mi vida.",
      rating: 5,
      image: "/faivcon.png",
      service: "Tarot de los 7 Arcángeles",
    },
    {
      id: 5,
      name: "Laura Díaz",
      role: "Artista",
      content:
        "Los trabajos espirituales de Diego son poderosos y efectivos. Gracias a su intervención, pude superar bloqueos creativos que me impedían avanzar en mi carrera. Su ética profesional y su dedicación son admirables.",
      rating: 5,
      image: "/faivcon.png",
      service: "Trabajos Blancos y Negros",
    },
  ]

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToTestimonial = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextTestimonial()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevTestimonial()
    }
  }

  useEffect(() => {
    // Auto-play functionality
    autoPlayRef.current = setInterval(() => {
      nextTestimonial()
    }, 6000)

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [currentIndex])

  return (
    <div className="relative w-full overflow-hidden py-12">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-vibrant-red/5 rounded-full blur-3xl -z-10" />

      {/* Section header */}
      <div className="text-center mb-16">
        <Badge className="mb-6 bg-luxury-gold/10 text-luxury-gold border-luxury-gold/20 px-4 py-2 backdrop-blur-sm">
          Testimonios
        </Badge>
        <h2 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">
          <span className="text-luxury-gold">Clientes Satisfechos</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Descubre lo que nuestros clientes dicen sobre sus experiencias con nuestros servicios espirituales
        </p>
      </div>

      {/* Testimonial carousel */}
      <div
        className="relative max-w-6xl mx-auto px-6 lg:px-8"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <Card className="bg-gradient-to-br from-gray-900/40 to-black/40 border-luxury-gold/20 backdrop-blur-sm shadow-xl">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex flex-col items-center">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-luxury-gold mb-4">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < testimonial.rating ? "text-luxury-gold" : "text-gray-600"}`}
                              fill={i < testimonial.rating ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                        <Badge className="bg-vibrant-red/10 text-vibrant-red border-vibrant-red/20">
                          {testimonial.service}
                        </Badge>
                      </div>

                      <div className="flex-1">
                        <div className="mb-6">
                          <Quote className="w-10 h-10 text-luxury-gold/20" />
                        </div>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed italic">
                          "{testimonial.content}"
                        </p>
                        <div>
                          <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                          <p className="text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-8">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-luxury-gold w-8" : "bg-gray-600 hover:bg-luxury-gold/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold/10 hover:border-luxury-gold"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold/10 hover:border-luxury-gold"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
