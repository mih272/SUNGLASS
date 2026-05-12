import { motion } from 'motion/react';
import { Building, GraduationCap, Home, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Shop() {
  const segments = [
    {
      title: "B2B - Dezvoltatori Imobiliari",
      target: "Clădiri de birouri/rezidențiale Clasa A",
      benefits: [
        "Certificări LEED & BREEAM",
        "Creșterea valorii per mp",
        "Design futurist și sustenabil",
        "Reducere masivă amprentă CO2"
      ],
      icon: <Building className="text-blue-500" size={40} />,
      color: "bg-blue-50"
    },
    {
      title: "Sector Public & Instituțional",
      target: "Școli, Spitale, Primării",
      benefits: [
        "Conformitate Standarde nZEB",
        "Eficientizarea bugetelor publice",
        "Independență energetică locală",
        "Exemplu de bune practici în comunitate"
      ],
      icon: <GraduationCap className="text-emerald-500" size={40} />,
      color: "bg-emerald-50"
    },
    {
      title: "B2C - Smart Homes",
      target: "Rezidențial Premium",
      benefits: [
        "Confort termic sporit",
        "Facturi la energie aproape de zero",
        "Integrare Dashboard IoT mobil",
        "Estetică minimalistă"
      ],
      icon: <Home className="text-orange-500" size={40} />,
      color: "bg-orange-50"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Soluții Adaptate Nevoilor Tale</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Descoperă cum Solar Glass poate transforma proiectul tău, indiferent de scară sau destinație.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((segment, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`${segment.color} p-10 flex justify-center items-center`}>
                {segment.icon}
              </div>
              <div className="p-8 flex flex-grow flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{segment.title}</h3>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">
                  {segment.target}
                </p>
                <ul className="space-y-4 mb-10 flex-grow text-slate-600">
                  {segment.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start">
                      <CheckCircle2 size={18} className="text-emerald-500 mr-3 shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/pret"
                  className="w-full py-4 px-6 bg-slate-900 text-white rounded-xl font-bold text-center hover:bg-emerald-600 transition-colors flex items-center justify-center group"
                >
                  Solicită Preț Personalizat
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 bg-white border border-slate-200 rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-2xl shadow-emerald-50">
           <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
           <div className="relative z-10 lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Ești Arhitect sau Proiectant?</h2>
              <p className="text-slate-600 text-lg mb-8">
                Oferim servicii de co-proiectare și consultanță nZEB gratuită pentru proiectele care integrează tehnologia Solar Glass.
              </p>
              <button className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold shadow-lg hover:bg-emerald-700 transition-colors">
                Hai să Colaborăm
              </button>
           </div>
           <div className="relative z-10 lg:w-1/3 grid grid-cols-2 gap-4">
               <div className="h-40 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center p-6 text-center font-bold text-slate-400">Suport Tehnic Non-Stop</div>
               <div className="h-40 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-center p-6 text-center font-bold text-emerald-700">Livrări Naționale Iași</div>
           </div>
        </div>
      </div>
    </div>
  );
}
