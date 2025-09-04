'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown, User, Users, BookOpen, Calendar, FileText, Archive, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: 'ANPEPP',
      icon: <User className="w-4 h-4" />,
      submenu: [
        { title: 'Apresentação', href: '/apresentacao' },
        { title: 'Diretoria Atual', href: '/diretoria' },
        { title: 'Conselho Fiscal', href: '/conselho-fiscal' },
        { title: 'Diretorias Anteriores', href: '/diretorias-anteriores' },
        { title: 'Estatuto', href: '/estatuto' },
        { title: 'Secretaria Geral', href: '/secretaria' },
        { title: 'Tesouraria', href: '/tesouraria' },
        { title: 'Representações Institucionais', href: '/representacoes' },
        { title: 'Representação Discente', href: '/representacao-discente' },
        { title: 'Documentos', href: '/documentos' },
      ]
    },
    {
      title: 'Fóruns Permanentes',
      icon: <Users className="w-4 h-4" />,
      submenu: [
        { title: 'Fórum de Coordenadores', href: '/forum-coordenadores' },
        { title: 'Fórum de Representantes', href: '/forum-representantes' },
      ]
    },
    {
      title: 'Eventos',
      icon: <Calendar className="w-4 h-4" />,
      submenu: [
        { title: 'Simpósios ANPEPP', href: '/simposios' },
        { title: 'Seminários Novos Horizontes', href: '/seminarios' },
        { title: 'Agenda de Eventos', href: '/agenda' },
      ]
    },
    {
      title: 'GTs',
      icon: <BookOpen className="w-4 h-4" />,
      submenu: [
        { title: 'Grupos de Trabalho', href: '/grupos-trabalho' },
        { title: 'Cadastro de GT', href: '/cadastro-gt' },
        { title: 'Coordenadores de GT', href: '/coordenadores-gt' },
      ]
    },
    {
      title: 'Publicações',
      icon: <FileText className="w-4 h-4" />,
      submenu: [
        { title: 'Boletins', href: '/boletins' },
        { title: 'Relatórios', href: '/relatorios' },
        { title: 'Documentos Técnicos', href: '/documentos-tecnicos' },
      ]
    },
    {
      title: 'Acervo',
      icon: <Archive className="w-4 h-4" />,
      href: '/acervo'
    },
    {
      title: 'Contato',
      icon: <Mail className="w-4 h-4" />,
      href: '/contato'
    }
  ];

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-4">
              <Link href="/tutoriais" className="hover:text-blue-200 transition-colors">
                Tutoriais do Sistema
              </Link>
              <Link href="/ppgs-associados" className="hover:text-blue-200 transition-colors">
                Lista de PPG&apos;s Associados
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="/area-restrita" className="hover:text-blue-200 transition-colors">
                Área Restrita
              </Link>
              <Link href="/como-associar-se" className="hover:text-blue-200 transition-colors">
                Como Associar-se
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/anpepp_logo.png"
              alt="ANPEPP - Associação Nacional de Pesquisa e Pós-graduação em Psicologia"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
            >
              Home
            </Link>
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                      onMouseEnter={() => setActiveDropdown(item.title)}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-2">
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                {menuItems.map((item) => (
                  <div key={item.title}>
                    {item.submenu ? (
                      <>
                        <button
                          className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                          onClick={() => toggleDropdown(item.title)}
                        >
                          <div className="flex items-center space-x-2">
                            {item.icon}
                            <span>{item.title}</span>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              activeDropdown === item.title ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.title && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 mt-2 space-y-1"
                            >
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href!}
                        className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

