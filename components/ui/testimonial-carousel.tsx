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
      name: "L. M.",
      role: "Cliente de Lectura",
      content:
        "Me sentí muy bien durante la lectura, la verdad. Todo lo que me decías era cierto y sentí una conexión muy especial al momento de hablar. Agradezco mucho tu ayuda y por estar ahí para escucharme.",
      rating: 5,
      image: "/faivcon.png", // <- Reemplazar con la ruta de tu imagen
      service: "Lectura y Guía Espiritual",
    },
    {
      id: 2,
      name: "Cliente Satisfecha",
      role: "Testimonio de Rapidez",
      content:
        "¡No lo puedo creer! Tal como me lo dijiste, esa persona me contactó en menos de 24 horas. Muchísimas gracias, siempre entregas los mejores resultados.",
      rating: 5,
      image: "/faivcon.png",
      service: "Trabajo de Influencia Rápida",
    },
    {
      id: 3,
      name: "S. R.",
      role: "Cliente Agradecida",
      content:
        "Qué bueno que me animé. Empecé a hacer lo que me indicaste y casi de inmediato comencé a sentirme mucho más tranquila. Me da mucho gusto ver que esto funciona para mejorar todo. Eres el mejor.",
      rating: 5,
      image: "/faivcon.png",
      service: "Armonización y Bienestar",
    },
    {
      id: 4,
      name: "Testimonio de un Estado",
      role: "Cliente de Prosperidad",
      content:
        "Quiero dar mi testimonio. Gracias a ti, Diego, mi dinero me rinde mucho más. Recomiendo tus trabajos de abre caminos al cien por ciento. ¡Muchas gracias!",
      rating: 5,
      image: "/faivcon.png",
      service: "Abre Caminos Financiero",
    },
    {
      id: 5,
      name: "Cliente de California, EE. UU.",
      role: "Caso de Alta Complejidad",
      content:
        "Primero que nada, gracias por todo. Te doy mi testimonio con mil gracias por haber sacado a mi marido de la cárcel, algo que yo jamás creí que fuera posible. Al principio dudé, pero me comprobaste que podía confiar en ti. Lo seguiré haciendo.",
      rating: 5,
      image: "/faivcon.png",
      service: "Trabajo de Justicia y Liberación",
    },
    {
      id: 6,
      name: "Una Madre Agradecida",
      role: "Reconciliación Familiar",
      content:
        "Mi hijo se comunicó conmigo para pedirme perdón y reconciliarnos. Me dijo que quería verme y hablar. Estoy muy agradecida, de verdad esto me sirvió muchísimo.",
      rating: 5,
      image: "/faivcon.png",
      service: "Armonización Familiar",
    },
    {
      id: 7,
      name: "C. G. (USA)",
      role: "Cliente Paciente",
      content:
        "Tengo tanto que agradecerte. Tal como decías, todo se dio a su debido tiempo y por fin se logró el resultado que esperaba. Gracias a ti y a mi santita, estoy muy feliz.",
      rating: 5,
      image: "/faivcon.png",
      service: "Trabajo a Largo Plazo",
    },
    {
      id: 8,
      name: "Cliente Anónima",
      role: "Testimonio de Retorno",
      content:
        "Te escribo para decirte que llegó. ¡Me lo encontré en la mañana acostado en el suelo! No puedo creer la efectividad, los resultados se vieron en menos de 24 horas. Gracias.",
      rating: 5,
      image: "/faivcon.png",
      service: "Retorno de Pareja",
    },
    {
      id: 9,
      name: "Testimonio sobre Predicción",
      role: "Confirmación de Videncia",
      content:
        "Me habías comentado sobre tres eventos, y uno de ellos, relacionado con un camión de pasajeros y un accidente grave, lamentablemente se cumplió. Es una confirmación de la veracidad de tus visiones.",
      rating: 5,
      image: "/faivcon.png",
      service: "Videncia y Predicciones",
    },
    {
      id: 10,
      name: "Cliente Convencido",
      role: "Cliente Fiel",
      content:
        "Después de ver tus videos, noté que eres una persona muy sincera y eso fue lo que me transmitió la confianza y la fe que necesitaba para animarme a contactarte. Gracias por el aprecio y la ayuda.",
      rating: 5,
      image: "/faivcon.png",
      service: "Consulta Inicial",
    },
    {
      id: 11,
      name: "J. P.",
      role: "Cliente Transformado",
      content:
        "De verdad, muchas gracias por no haberme dejado solo en los momentos más malos de mi vida. Desde el primer día me dijiste que tuviera fe y confiara en ti. Lo hice, y ahora me está yendo súper bien. Tarde o temprano, todo se da.",
      rating: 5,
      image: "/faivcon.png",
      service: "Acompañamiento Espiritual",
    },
  ];

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
