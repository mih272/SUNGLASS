import { motion } from 'motion/react';
import { ArrowRight, Lightbulb, Zap, Building2, Trees, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(16,185,129,0.08)_0%,rgba(255,255,255,0)_100%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-emerald-100 text-emerald-700 mb-6 border border-emerald-200">
                Lideri în BIPV (Building Integrated Photovoltaics)
              </span>
              <h1 className="text-5xl md:text-7xl font-light tracking-[0.1em] text-slate-900 mb-8 leading-[1.1] uppercase">
                Fațada ta, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600 font-bold">Energia Viitorului</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg text-slate-500 mb-12 leading-relaxed font-light tracking-wide">
                Solar Glass transformă arhitectura urbană pasivă în generatoare inteligente. 
                Tehnologia proprie BIPV captează spectrul invizibil, protejând clădirea și micșorând factura.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/magazin"
                  className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white rounded-none font-bold text-sm tracking-[0.2em] uppercase hover:bg-cyan-700 transition-all flex items-center justify-center group shadow-2xl shadow-cyan-900/20"
                >
                  Configurează Acum
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
                <Link
                  to="/produs"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-bold text-lg hover:border-emerald-500 hover:text-emerald-600 transition-all text-center"
                >
                  Detalii Tehnice
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Glass Building" 
                  className="object-cover w-full h-full grayscale-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                    <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-2">Tehnologie Invizibilă</p>
                    <h3 className="text-2xl font-bold">Sticlă care lucrează cu spectrul UV/IR</h3>
                </div>
              </motion.div>
              {/* Floating Stat */}
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <p className="text-4xl font-black text-emerald-600 mb-1">35-45%</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-tighter">Reducere costuri AC</p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Diferența Solar Glass</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Spre deosebire de panourile fotovoltaice clasice care sunt opace și necesită spațiu dedicat, 
                Solar Glass integrează celulele în structura ferestrei. Utilizăm pelicula OPV (Organic Photovoltaics) 
                pentru a capta energia din spectrul non-vizibil, permițând luminii naturale să pătrundă în interior.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <Building2 size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Fațade Active</h4>
                  <p className="text-sm text-slate-500">Transformăm suprafețele pasive în centre de producție energetică.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <Lightbulb size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Transparență 70%</h4>
                  <p className="text-sm text-slate-500">Vizibilitate clară fără compromisuri, protejând simultan interiorul de radiații.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Points */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">De Ce Să Alegi Solar Glass?</h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Scut Termic", 
                desc: "Reduce semnificativ transferul de căldură, scăzând costurile cu aerul condiționat cu până la 45%.",
                icon: <Zap size={32} />
              },
              { 
                title: "Certificare nZEB", 
                desc: "Soluția ideală pentru atingerea standardelor europene Nearly Zero Energy Building.",
                icon: <ShieldCheck size={32} />
              },
              { 
                title: "Sustenabilitate", 
                desc: "Amprentă minimă de carbon în producție prin tehnologia OPV și materiale reciclabile.",
                icon: <Trees size={32} />
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-slate-900 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3 hover:rotate-0 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
