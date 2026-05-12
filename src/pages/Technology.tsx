import { motion } from 'motion/react';
import { LayoutDashboard, Smartphone, BarChart3, CloudRain, Hammer, Ruler, Component } from 'lucide-react';

export default function Technology() {
  return (
    <div className="bg-white py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Digital Component */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-emerald-400 mb-8">
                <LayoutDashboard size={32} />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Componenta Digitală: <br />Dashboard IoT</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Solar Glass nu este doar o fereastră, ci un nod inteligent în rețeaua clădirii tale. 
                Fiecare panou este monitorizat în timp real printr-un ecosistem IoT avansat.
              </p>
              
              <ul className="space-y-6">
                {[
                  { icon: <Smartphone />, title: "App Mobil", desc: "Verifică producția de energie de pe telefon, oriunde te-ai afla." },
                  { icon: <BarChart3 />, title: "Analiză Predictivă", desc: "Algoritmi care estimează producția în funcție de prognoza meteo." },
                  { icon: <CloudRain />, title: "Senzori Mediu", desc: "Monitorizare UV, IR și intensitate luminoasă exterioară." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="text-emerald-600 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-1/2 relative">
               <div className="aspect-video bg-slate-900 rounded-[2rem] shadow-2xl p-8 border border-slate-800 overflow-hidden relative group">
                  <div className="flex items-center space-x-2 mb-8 border-b border-slate-800 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-slate-500 text-xs ml-4 font-mono">dashboard.solarglass.io</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-emerald-500/10 rounded-xl border border-emerald-500/20 p-4 border-l-4 border-l-emerald-500">
                        <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-tighter">Live Output</span>
                        <div className="text-3xl font-black text-white mt-2">4.82 kW</div>
                    </div>
                    <div className="h-32 bg-slate-800/50 rounded-xl border border-slate-700 p-4">
                        <div className="w-full h-2 bg-slate-700 rounded-full mt-8 overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: '70%' }}
                              className="h-full bg-emerald-500" 
                            />
                        </div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter mt-4 block">Eficiență Sistem</span>
                    </div>
                  </div>
                  <div className="mt-4 h-24 bg-slate-800/30 rounded-xl border border-slate-800 flex items-end p-4 space-x-2">
                     {[40, 70, 45, 90, 65, 80, 55, 75].map((h, i) => (
                       <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        className="flex-grow bg-emerald-500/40 rounded-t-sm" 
                       />
                     ))}
                  </div>
                  {/* Glassmorphism Overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl" />
               </div>
               
               <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                     <Component size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase leading-none">Status Sistem</p>
                    <p className="text-lg font-black text-slate-900 leading-none mt-1">Optimizat</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Servicii Integrate nZEB</h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 mb-8 shadow-sm">
                <Ruler size={28} />
              </div>
              <h3 className="text-xl font-black mb-4">Co-proiectare Arhitecturală</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Colaborăm direct cu biroul tău de arhitectură pentru a integra Solar Glass în faza de concept, optimizând orientarea și detaliile de fixare.
              </p>
            </div>

            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 mb-8 shadow-sm">
                <Hammer size={28} />
              </div>
              <h3 className="text-xl font-black mb-4">Instalare Profesională</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Echipe specializate pentru montaj tip „fațadă structurală” cu cablaje mascate estetic în profile dedicate de aluminiu.
              </p>
            </div>

            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 mb-8 shadow-sm">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-xl font-black mb-4">Consultanță nZEB</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Te ajutăm să obții certificările necesare prin calcule precise de eficiență energetică și studii de însorire.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
