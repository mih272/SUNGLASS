import { motion } from 'motion/react';
import { Layers, Shield, Droplets, Zap, Eye, ThermometerSun } from 'lucide-react';

export default function Product() {
  const specs = [
    { label: "Material Activ", value: "Peliculă OPV (Organic Photovoltaics)" },
    { label: "Transparență Vizuală", value: "40% - 70% (Configurabil)" },
    { label: "Protecție UV", value: "99.9% Radiație Blocată" },
    { label: "Reducere G-Value", value: "35% - 45% (Efect Scut Termic)" },
    { label: "Producători Sticlă", value: "Guardian / Saint-Gobain" },
    { label: "Invertoare Compatibile", value: "SolarEdge / Enphase" }
  ];

  const features = [
    {
      title: "Transparență Adaptivă",
      desc: "Putem configura gradul de transparență în funcție de orientarea cardinală a clădirii.",
      icon: <Eye className="text-emerald-500" />
    },
    {
      title: "Izolare Termică",
      desc: "Funcționează ca un scut termic, reducând necesarul de răcire vara și menținând căldura iarna.",
      icon: <ThermometerSun className="text-orange-500" />
    },
    {
      title: "Rezistență Extremă",
      desc: "Laminare cu vid Peterlis pentru rezistență la impact și condiții meteo severe.",
      icon: <Shield className="text-blue-500" />
    },
    {
      title: "Ușurință în Întreținere",
      desc: "Tratament auto-curățare (optional) pentru eficiență constantă fără mentenanță ridicată.",
      icon: <Droplets className="text-cyan-500" />
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Visual Presentation */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square bg-slate-50 border border-slate-200 rounded-[3rem] overflow-hidden flex items-center justify-center relative group"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent)] group-hover:scale-110 transition-transform duration-1000" />
              <Layers size={140} className="text-slate-200 absolute -bottom-10 -right-10 rotate-12" />
              <div className="relative z-10 p-12 text-center">
                 <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-200">
                    <Zap className="text-white" size={40} />
                 </div>
                 <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">BIPV OPV Gen-3</h2>
                 <p className="text-slate-500 font-medium">Următoarea generație de sticlă activă fotovoltaică</p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="h-40 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center justify-center p-6 text-center">
                 <span className="text-xs font-bold text-slate-400 uppercase mb-2">Garanție Eficiență</span>
                 <span className="text-2xl font-bold text-slate-900 whitespace-nowrap">25 Ani</span>
              </div>
              <div className="h-40 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center justify-center p-6 text-center">
                 <span className="text-xs font-bold text-slate-400 uppercase mb-2">Timp Recuperare</span>
                 <span className="text-2xl font-bold text-slate-900 whitespace-nowrap">4-6 Ani</span>
              </div>
            </div>
          </div>

          {/* Technical List */}
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Specificații Tehnice</h1>
            <p className="text-slate-500 mb-12 text-lg">
              Integram pelicula fotovoltaică organică între două straturi de sticlă securizată prin procesul de laminare în vid.
            </p>

            <div className="space-y-4">
              {specs.map((spec, i) => (
                <div key={i} className="flex justify-between items-center p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <span className="font-bold text-slate-600">{spec.label}</span>
                  <span className="font-extrabold text-slate-900 text-right">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
               <h4 className="font-bold text-emerald-900 mb-2">Componente de Brand</h4>
               <p className="text-sm text-emerald-700 leading-relaxed">
                 Parteneriatele noastre cu lideri precum Guardian Glass și Enphase Energy asigură o fiabilitate superioară și monitorizare individuală la nivel de micro-invertor.
               </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="p-8 rounded-3xl border border-slate-200 hover:border-emerald-500 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-black text-xl text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
