"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  Moon,
  Star,
  Flame,
  Eye,
  Heart,
  Shield,
  MessageCircle,
  Phone,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Clock,
  MonitorPlay
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel"

// --- 1. Centralized Contact Information ---
// Edit your phone number and other contact details only once in this object.
const contactInfo = {
  phone: "5213222292874",
  tiktok: "https://www.tiktok.com/@botanicatorres45",
}

// --- 2. Helper Function for WhatsApp Links ---
// This function creates a WhatsApp link, optionally with a pre-filled message.
const createWhatsAppLink = (text?: string) => {
  const baseUrl = `https://wa.me/${contactInfo.phone}`
  if (text) {
    return `${baseUrl}?text=${encodeURIComponent(text)}`
  }
  return baseUrl
}

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      title: "Venta de Veladoras",
      description: "Veladoras consagradas y bendecidas para diferentes propósitos espirituales y rituales sagrados",
      icon: <Flame className="w-6 h-6" />,
      price: "Desde $250 a $590 MXN",
      image: "/veladoras2.jpeg?height=400&width=600&text=Candles+Spiritual",
      // We now only define the unique part of the message.
      whatsappText: "Hola, me interesa información sobre las veladoras",
    },
    {
      title: "Lectura de Tarot - Cartas Españolas",
      description: "Consulta espiritual con cartas españolas tradicionales para revelar tu destino y guiar tu camino",
      icon: <Star className="w-6 h-6" />,
      price: "$450 MXN",
      image: "/cartas.jpeg?height=400&width=600&text=Tarot+Cards",
      whatsappText: "Hola, me interesa una lectura con cartas españolas",
    },
    {
      title: "Carta Astral",
      description: "Análisis profundo de tu mapa astral para comprender tu personalidad, talentos y desafíos.",
      icon: <Moon className="w-6 h-6" />,
      price: "$2900 MXN",
      image: "/image1.jpeg?height=400&width=600&text=Carta+Astral",
      whatsappText: "Hola, me interesa una carta astral",
    },
    {
      title: "Tarot de los 7 Arcángeles",
      description: "Conexión divina a través del poderoso tarot de los 7 arcángeles para obtener sabiduría celestial",
      icon: <Eye className="w-6 h-6" />,
      price: "$850 MXN",
      image: "/arcangel.jpeg?height=400&width=600&text=7+Angels+Tarot",
      whatsappText: "Hola, me interesa una lectura con el tarot de los 7 arcángeles",
    },
    {
      title: "Trabajos Blancos y Negros",
      description:
        "Rituales especializados y trabajos espirituales para diferentes necesidades y propósitos específicos",
      icon: <Moon className="w-6 h-6" />,
      price: "Desde $2,900 - $5,900 MXN",
      image: "/buenoymalo.jpeg?height=400&width=600&text=Spiritual+Rituals",
      whatsappText: "Hola, necesito información sobre trabajos espirituales",
    },
    {
      title: "Limpias y Abrecaminos",
      description: "Limpieza energética profunda y apertura de caminos para el éxito, prosperidad y bienestar",
      icon: <Shield className="w-6 h-6" />,
      price: "Desde $1,200 - $5,900 MXN",
      image: "/eterial.jpeg?height=400&width=600&text=Energy+Cleansing",
      whatsappText: "Hola, me interesa una limpia espiritual",
    },
    {
      title: "Amarres, Endulzamientos, Retornos y Mas trabajos",
      description: "Trabajos espirituales personalizados para fortalecer lazos amorosos, endulzar relaciones o propiciar retornos, cualquier otro trabajo espiritual se revisa en consulta.",
      icon: <Heart className="w-6 h-6" />,
      price: "Precio dependiendo del caso o consulta",
      image: "/image4.jpeg?height=400&width=600&text=Amarres",
      whatsappText: "Hola, me interesa información sobre amarres, endulzamientos o retornos",
    },
  ]

  const stats = [
    { number: "1,500+", label: "Consultas Realizadas", icon: <Users className="w-5 h-5" /> },
    { number: "7+", label: "Años de Experiencia", icon: <Award className="w-5 h-5" /> },
    { number: "24/7", label: "Disponibilidad", icon: <Clock className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Sophisticated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(220,20,60,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(139,0,0,0.1),transparent_50%)]" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-luxury-gold rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Premium Header */}
      <header className="relative z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-luxury-gold rounded-2xl flex items-center justify-center shadow-2xl">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-luxury-gold">Diego Torres</h1>
                <p className="text-sm text-gray-400 font-medium">Maestro Espiritual</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="#servicios"
                className="text-gray-300 hover:text-luxury-gold transition-all duration-300 font-medium"
              >
                Servicios
              </Link>
              <Link
                href="#sobre-mi"
                className="text-gray-300 hover:text-luxury-gold transition-all duration-300 font-medium"
              >
                Sobre Mí
              </Link>
              <Link
                href="#contacto"
                className="text-gray-300 hover:text-luxury-gold transition-all duration-300 font-medium"
              >
                Contacto
              </Link>
              <Button
                className="bg-luxury-gold hover:bg-luxury-gold-dark text-black px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open(createWhatsAppLink("Hola, me interesa una consulta"), "_blank")}
              >
                Consulta Ahora
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - Apple/DeepMind Style */}
      <section className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Badge className="mb-8 bg-luxury-gold/10 text-luxury-gold border-luxury-gold/20 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                ✨ Guía Espiritual Certificada
              </Badge>

              <h1 className="text-5xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
                <span className="text-luxury-gold">Conecta con tu</span>
                <br />
                <span className="text-white">Destino</span>
                <br />
                <span className="text-vibrant-red">Espiritual</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
                Descubre los misterios del universo a través de la sabiduría ancestral de{" "}
                <span className="text-luxury-gold font-semibold">La Santa Muerte</span> y la conexión divina con los{" "}
                <span className="text-vibrant-red font-semibold">7 Arcángeles</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-luxury-gold hover:bg-luxury-gold-dark text-black px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-luxury-gold/25 transform hover:scale-[1.02] transition-all duration-300"
                  onClick={() =>
                    window.open(createWhatsAppLink("Hola, me interesa una consulta espiritual"), "_blank")
                  }
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consulta Personalizada
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold/10 hover:border-luxury-gold px-8 py-4 text-lg rounded-2xl backdrop-blur-sm transition-all duration-300"
                  onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explorar Servicios
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2 text-luxury-gold">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/image5.jpeg?height=600&width=500&text=Mystical+Stars+Landscape"
                  alt="Spiritual mystical background with stars"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-luxury-gold/10" />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-luxury-gold/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-vibrant-red/20 rounded-full blur-xl animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Premium Design */}
      <section id="servicios" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-vibrant-red/10 text-vibrant-red border-vibrant-red/20 px-4 py-2 backdrop-blur-sm">
              Servicios Espirituales
            </Badge>
            <h2 className="text-6xl lg:text-8xl font-bold mb-8 tracking-tight">
              <span className="text-luxury-gold">Mis Servicios</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cada servicio requiere una consulta previa para determinar el trabajo específico y el precio exacto
            </p>
          </div>

          {/* Important Notice */}
          <div className="max-w-4xl mx-auto mb-20">
            <Card className="bg-black/40 border-vibrant-red/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-vibrant-red/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-vibrant-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-vibrant-red mb-3">Consulta Personalizada Requerida</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Todos los precios mostrados son aproximados. Es necesaria una consulta personalizada para
                      determinar el trabajo específico, los materiales requeridos y el costo final de cada servicio
                      espiritual.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* New Note: Proceso y Efectividad */}
          <div className="max-w-4xl mx-auto mb-20">
            <Card className="bg-black/40 border-luxury-gold/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-luxury-gold mb-3">Consideraciones Importantes</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Es fundamental comprender que todo proceso espiritual requiere su tiempo y dedicación para manifestar resultados óptimos. Nuestros trabajos son 100% efectivos, diseñados para ofrecer soluciones genuinas y duraderas. La paciencia y la fe son componentes clave para el éxito.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group bg-gradient-to-br from-gray-900/40 to-black/40 border-gray-800/50 hover:border-luxury-gold/30 backdrop-blur-sm transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-luxury-gold/10 ${
                  activeService === index ? "border-luxury-gold/30 shadow-xl shadow-luxury-gold/10" : ""
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <CardContent className="p-0">
                  {/* Service Image */}
                  <div className="relative h-64 overflow-hidden rounded-t-xl">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-luxury-gold rounded-2xl flex items-center justify-center text-black shadow-lg">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-luxury-gold transition-colors">
                        {service.title}
                      </h3>
                      <Badge variant="luxuryGold" className="text-sm">
                        {service.price}
                      </Badge>
                    </div>

                    <p className="text-gray-300 mb-8 leading-relaxed">{service.description}</p>

                    <Button
                      className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => window.open(createWhatsAppLink(service.whatsappText), "_blank")}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Consultar por WhatsApp
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Premium Layout */}
      <section id="sobre-mi" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/image3.jpeg?height=600&width=500&text=Diego+Torres+Portrait"
                  alt="Diego Torres - Maestro Espiritual"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-luxury-gold/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-vibrant-red/20 rounded-full blur-2xl" />
            </div>

            <div className="order-1 lg:order-2">
              <Badge className="mb-6 bg-luxury-gold/10 text-luxury-gold border-luxury-gold/20 px-4 py-2 backdrop-blur-sm">
                Sobre Mí
              </Badge>

              <h2 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">
                <span className="text-luxury-gold">Diego Torres</span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Con más de 7 años de experiencia en las artes esotéricas, me he dedicado al estudio profundo de la
                sabiduría ancestral de La Santa Muerte y la conexión divina con los 7 Arcángeles.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  { icon: <CheckCircle className="w-5 h-5" />, text: "Más de 1,500 consultas realizadas con éxito" },
                  { icon: <Shield className="w-5 h-5" />, text: "Especialista certificado en trabajos de protección" },
                  {
                    icon: <Star className="w-5 h-5" />,
                    text: "Maestro en lectura de cartas españolas y tarot angelical",
                  },
                  { icon: <Heart className="w-5 h-5" />, text: "Guía espiritual con formación tradicional" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-luxury-gold/10 rounded-xl flex items-center justify-center text-luxury-gold">
                      {item.icon}
                    </div>
                    <span className="text-gray-300 text-lg">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-luxury-gold hover:bg-luxury-gold-dark text-black px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-luxury-gold/25 transition-all duration-300"
                onClick={() =>
                  window.open(
                    createWhatsAppLink("Hola, me gustaría conocer más sobre tu experiencia"),
                    "_blank",
                  )
                }
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Conoce Mi Historia
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="relative z-10 py-24">
        <TestimonialCarousel />
      </section>

      {/* Contact Section - Modern Design */}
      <section id="contacto" className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-vibrant-red/10 text-vibrant-red border-vibrant-red/20 px-4 py-2 backdrop-blur-sm">
              Contacto
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">
              <span className="text-luxury-gold">Inicia tu Consulta</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estoy aquí para guiarte en tu camino espiritual. Contáctame para una consulta personalizada y descubre lo
              que el universo tiene preparado para ti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "WhatsApp",
                description: "Respuesta inmediata",
                action: "Enviar Mensaje",
                bgColor: "bg-green-600",
                hoverColor: "hover:bg-green-700",
                // Uses helper without text for a generic message
                onClick: () => window.open(createWhatsAppLink(), "_blank"),
              },
              {
                icon: <MonitorPlay className="w-8 h-8" />,
                title: "Tiktok",
                description: "Pregunta en tiktok",
                action: "Seguir Ahora",
                bgColor: "bg-blue-600",
                hoverColor: "hover:bg-blue-700",
                // Uses the phone number from the contactInfo object
                onClick: () => window.open("https://www.tiktok.com/@botanicatorres45", "_blank"),
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900/40 to-black/40 border-gray-800/50 hover:border-luxury-gold/30 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-luxury-gold/20 rounded-2xl flex items-center justify-center text-luxury-gold mx-auto mb-6">
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
                  <p className="text-gray-400 mb-6">{contact.description}</p>
                  <Button
                    className={`w-full ${contact.bgColor} ${contact.hoverColor} hover:shadow-lg text-white font-semibold py-3 rounded-xl transition-all duration-300`}
                    onClick={contact.onClick}
                  >
                    {contact.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="bg-luxury-gold/10 border-luxury-gold/20 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">¿Listo para tu Consulta Espiritual?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Agenda tu consulta personalizada y descubre los misterios que el universo tiene preparados para ti. Tu
                destino espiritual te espera.
              </p>
              <Button
                size="lg"
                className="bg-luxury-gold hover:bg-luxury-gold-dark text-black px-8 py-4 text-base font-semibold rounded-2xl shadow-2xl hover:shadow-luxury-gold/25 transform hover:scale-[1.02] transition-all duration-300 max-w-[270px] md:max-w-none lg:px-12 lg:text-lg"
                onClick={() =>
                  window.open(
                    createWhatsAppLink("Hola Diego, me gustaría agendar una consulta espiritual"),
                    "_blank",
                  )
                }
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Agendar Consulta Ahora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="relative z-10 border-t border-white/10 backdrop-blur-xl bg-black/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-luxury-gold">Diego Torres</h3>
                  <p className="text-sm text-gray-400">Maestro Espiritual</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Guiando almas hacia su destino espiritual a través de la sabiduría ancestral y la conexión divina.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Servicios</h4>
              <ul className="space-y-3">
                {["Venta de Veladoras", "Lectura de Tarot", "Trabajos Espirituales", "Limpias Energéticas"].map(
                  (service) => (
                    <li key={service}>
                      <Link href="#servicios" className="text-gray-400 hover:text-luxury-gold transition-colors">
                        {service}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-luxury-gold" />
                  {/* Using the constant for display */}
                  <span className="text-gray-400">WhatsApp: +{contactInfo.phone}</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                {[
                  { icon: <MessageCircle className="w-5 h-5" />, url: createWhatsAppLink() },
                  { icon: <MonitorPlay className="w-5 h-5" />, url: contactInfo.tiktok },
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-luxury-gold hover:bg-luxury-gold/10 rounded-xl transition-all duration-300"
                    onClick={() => window.open(social.url, "_blank")}
                  >
                    {social.icon}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-400 mb-2">
              © 2024 Diego Torres - Maestro Espiritual. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              Servicios espirituales profesionales con más de 7 años de experiencia en México
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}