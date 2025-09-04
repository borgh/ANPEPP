'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Calendar, Users, BookOpen, FileText, ArrowRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Banner slides
  const slides = [
    {
      id: 1,
      title: 'IX Seminário Novos Horizontes 2025',
      description: 'Diretrizes para o futuro da pós-graduação em Psicologia no Brasil',
      image: '/images/banner-seminario.jpg',
      link: '/seminarios/novos-horizontes-2025',
      cta: 'Saiba Mais'
    },
    {
      id: 2,
      title: 'Anuidade ANPEPP 2025',
      description: 'Mantenha sua associação em dia. Desconto de 10% até 31 de agosto.',
      image: '/images/banner-anuidade.jpg',
      link: '/anuidade',
      cta: 'Pagar Anuidade'
    },
    {
      id: 3,
      title: 'Nova Diretoria 2025-2026',
      description: 'Conheça a nova gestão da ANPEPP para o biênio 2025-2026',
      image: '/images/banner-diretoria.jpg',
      link: '/diretoria',
      cta: 'Conhecer Diretoria'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Recent news
  const news = [
    {
      id: 1,
      title: 'IX Seminário Novos Horizontes 2025',
      date: '15/05/2025',
      excerpt: 'Evento discutirá as diretrizes para o futuro da pós-graduação em Psicologia no Brasil.',
      image: '/images/news-1.jpg',
      link: '/noticias/ix-seminario-novos-horizontes'
    },
    {
      id: 2,
      title: 'Nova Diretoria Anpepp Gestão 2025-2026',
      date: '21/01/2025',
      excerpt: 'Conheça os novos membros da diretoria eleitos para o biênio 2025-2026.',
      image: '/images/news-2.jpg',
      link: '/noticias/nova-diretoria-2025-2026'
    },
    {
      id: 3,
      title: 'FCHSSALLA e FAPERJ discutem lei nº 14.874',
      date: '10/01/2025',
      excerpt: 'Reunião para discussão dos impactos da nova legislação na pesquisa em Psicologia.',
      image: '/images/news-3.jpg',
      link: '/noticias/fchssalla-faperj-lei-14874'
    }
  ];

  // Quick access items
  const quickAccess = [
    {
      title: 'Cadastro de Pesquisadores',
      description: 'Registre-se como pesquisador na ANPEPP',
      icon: <Users className="w-8 h-8" />,
      link: '/cadastro-pesquisador',
      color: 'bg-blue-500'
    },
    {
      title: 'Coordenadores de GTs',
      description: 'Acesso para coordenadores de grupos de trabalho',
      icon: <BookOpen className="w-8 h-8" />,
      link: '/coordenadores-gt',
      color: 'bg-green-500'
    },
    {
      title: 'Membros de GTs',
      description: 'Área restrita para membros de grupos de trabalho',
      icon: <Users className="w-8 h-8" />,
      link: '/membros-gt',
      color: 'bg-purple-500'
    },
    {
      title: 'Área Restrita PPGs',
      description: 'Acesso exclusivo para programas de pós-graduação',
      icon: <FileText className="w-8 h-8" />,
      link: '/area-restrita-ppg',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60 z-10" />
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${slides[currentSlide].image})`,
                backgroundColor: '#1e40af' // Fallback color
              }}
            />
            <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-5xl font-bold mb-4"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl mb-6 text-gray-100"
                >
                  {slides[currentSlide].description}
                </motion.p>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    href={slides[currentSlide].link}
                    className="inline-flex items-center space-x-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <span>{slides[currentSlide].cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre a ANPEPP
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              A Associação Nacional de Pesquisa e Pós-graduação em Psicologia (ANPEPP) é uma organização 
              sem fins lucrativos e apartidária fundada em 1983, durante a XXXV Reunião Anual da Sociedade 
              Brasileira para o Progresso da Ciência, realizada em Belém do Pará.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Tem por objetivo congregar programas de pós-graduação vinculados a instituições de ensino 
              superior para fomentar e estimular a formação de profissionais para pesquisa e pós-graduação 
              em Psicologia.
            </p>
            <Link
              href="/apresentacao"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <span>Saiba Mais</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Acesso Rápido
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccess.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
              >
                <div className={`${item.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
                <Link
                  href={item.link}
                  className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <span>Acessar</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Notícias
            </h2>
            <Link
              href="/noticias"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
            >
              <span>Ver todas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link
                    href={article.link}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
                  >
                    <span>Ler mais</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Assine nossa Newsletter
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Fique por dentro das novidades da ANPEPP, eventos, editais e oportunidades na área da Psicologia.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg font-semibold transition-colors">
              Cadastrar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
