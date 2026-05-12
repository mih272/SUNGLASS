import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Menu, X, Info, ShoppingBag, Box, CreditCard, Cpu, LayoutDashboard } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Acasă', path: '/', icon: <Sun size={18} /> },
    { name: 'Despre Noi', path: '/despre-noi', icon: <Info size={18} /> },
    { name: 'Magazin', path: '/magazin', icon: <ShoppingBag size={18} /> },
    { name: 'Produs', path: '/produs', icon: <Box size={18} /> },
    { name: 'Tehnologie', path: '/tehnologie', icon: <Cpu size={18} /> },
    { name: 'Preț', path: '/pret', icon: <CreditCard size={18} /> },
  ];

  // Close menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 border-x border-slate-200 max-w-[1600px] mx-auto shadow-2xl">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative w-16 h-16 bg-[#0a1114] rounded-xl flex items-center justify-center p-2 border border-slate-800 shadow-2xl">
                {/* Refined SVG Logo based on the user provided image */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#75a8a9" />
                      <stop offset="50%" stopColor="#4f8a8b" />
                      <stop offset="100%" stopColor="#a3cccd" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* The 'L' frame element - square corner */}
                  <path 
                    d="M 25 20 L 25 75 L 75 75" 
                    fill="none" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="3" 
                    strokeLinecap="butt" 
                    strokeLinejoin="miter"
                  />
                  <path 
                    d="M 32 28 L 32 68 L 65 68" 
                    fill="none" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="1.5" 
                    strokeOpacity="0.5"
                  />
                  
                  {/* The 'S' and 'G' stylized integration */}
                  {/* S shape */}
                  <path 
                    d="M 55 30 C 40 30, 35 45, 50 50 C 65 55, 60 70, 45 70" 
                    fill="none" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="5" 
                    strokeLinecap="round"
                    filter="url(#glow)"
                  />
                  
                  {/* G shape - encircling the S */}
                  <path 
                    d="M 65 45 A 25 25 0 1 1 50 80 L 50 70" 
                    fill="none" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                  />

                  {/* Corner detail */}
                  <circle cx="25" cy="20" r="1.5" fill="url(#logoGradient)" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-light text-2xl tracking-[0.25em] text-slate-900 uppercase drop-shadow-sm">Solar Glass</span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#75a8a9] font-bold leading-none mt-1">
                  Fereastra care îți micșorează factura
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                    location.pathname === link.path ? 'text-emerald-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/magazin"
                className="bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                Cere Ofertă
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600 hover:text-emerald-600 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center space-x-3 px-3 py-4 text-base font-medium text-slate-600 border-b border-slate-50 last:border-0"
                  >
                    <span className="text-emerald-500">{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                ))}
                <div className="pt-4 px-3">
                  <Link
                    to="/magazin"
                    className="block w-full bg-emerald-600 text-white text-center px-5 py-4 rounded-xl font-semibold shadow-lg shadow-emerald-100"
                  >
                    Cere Ofertă nZEB
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 border border-emerald-500 rounded flex items-center justify-center bg-transparent">
                  <span className="text-emerald-500 font-bold text-lg">SGL</span>
                </div>
                <span className="font-bold text-xl text-white">Solar Glass</span>
              </Link>
              <p className="max-w-md text-slate-400 leading-relaxed mb-6">
                Proiect inovator dezvoltat în cadrul Universității Tehnice „Gheorghe Asachi” din Iași, Facultatea de Inginerie Electrică, Energetică și Informatică Aplicată (IEEIA). Pionieri în tehnologia BIPV transparentă.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer ring-1 ring-slate-700">
                   {/* Social Icon Placeholder */}
                   <span className="text-[10px font-bold]">FB</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer ring-1 ring-slate-700">
                   <span className="text-[10px font-bold]">LI</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Link-uri Rapide</h3>
              <ul className="space-y-4 text-sm">
                <li><Link to="/despre-noi" className="hover:text-emerald-400 transition-colors">Despre Noi</Link></li>
                <li><Link to="/magazin" className="hover:text-emerald-400 transition-colors">Magazin Online</Link></li>
                <li><Link to="/produs" className="hover:text-emerald-400 transition-colors">Specificații Produs</Link></li>
                <li><Link to="/tehnologie" className="hover:text-emerald-400 transition-colors">Tehnologie & IoT</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Contact</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3">
                  <span className="text-emerald-500 mt-1 shrink-0">📍</span>
                  <span>Bulevardul Profesor Dimitrie Mangeron 67, Iași 700050</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-emerald-500 shrink-0">📧</span>
                  <span>contact@solarglass.ro</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>© 2024 Solar Glass - Facultatea IEEIA, TUIASI. Toate drepturile rezervate.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
               <span className="hover:text-slate-400 cursor-pointer">Politica Cookie</span>
               <span className="hover:text-slate-400 cursor-pointer">GDPR</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
