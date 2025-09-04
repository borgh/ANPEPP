'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/anpepp_logo.png"
                alt="ANPEPP"
                width={150}
                height={45}
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Associação Nacional de Pesquisa e Pós-graduação em Psicologia. 
              Organização sem fins lucrativos fundada em 1983.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/apresentacao" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Apresentação
                </Link>
              </li>
              <li>
                <Link href="/diretoria" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Diretoria
                </Link>
              </li>
              <li>
                <Link href="/grupos-trabalho" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Grupos de Trabalho
                </Link>
              </li>
              <li>
                <Link href="/simposios" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Simpósios ANPEPP
                </Link>
              </li>
              <li>
                <Link href="/ppgs-associados" className="text-gray-300 hover:text-white transition-colors text-sm">
                  PPG&apos;s Associados
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/como-associar-se" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Como Associar-se
                </Link>
              </li>
              <li>
                <Link href="/area-restrita" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Área Restrita
                </Link>
              </li>
              <li>
                <Link href="/cadastro-pesquisador" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Cadastro de Pesquisador
                </Link>
              </li>
              <li>
                <Link href="/editais" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Editais de Apoio
                </Link>
              </li>
              <li>
                <Link href="/tutoriais" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Tutoriais do Sistema
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Secretaria Geral da ANPEPP</p>
                  <p>Universidade Federal do Rio Grande do Sul</p>
                  <p>Instituto de Psicologia</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a href="mailto:anpepp@anpepp.org.br" className="text-gray-300 hover:text-white transition-colors text-sm">
                  anpepp@anpepp.org.br
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  (51) 3308-5150
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Assine nossa Newsletter</h3>
              <p className="text-gray-300 text-sm">Fique por dentro das novidades da ANPEPP</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 md:w-64 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-md transition-colors">
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="mb-2 md:mb-0">
              <p>&copy; 2025 ANPEPP. Todos os direitos reservados.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/politica-privacidade" className="hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos-uso" className="hover:text-white transition-colors">
                Termos de Uso
              </Link>
              <Link href="/acessibilidade" className="hover:text-white transition-colors">
                Acessibilidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

