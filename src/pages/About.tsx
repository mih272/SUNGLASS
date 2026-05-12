import { motion } from 'motion/react';
import { Target, Rocket, Factory, Users, Microscope, ShieldCheck } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "Viziune",
      desc: "Energia regenerabilă nu trebuie să compromită designul arhitectural. Credem într-un viitor unde clădirile nu doar consumă, ci și generează energie în mod armonios.",
      icon: <Target className="text-emerald-500" size={28} />
    },
    {
      title: "Misiune",
      desc: "Transformarea fiecărei fațade într-un generator eficient și atingerea standardului european în fațade inteligente prin inovație constantă și inginerie de precizie.",
      icon: <Rocket className="text-emerald-500" size={28} />
    }
  ];

  const infrastructure = [
    { name: "Cuptor de laminare Peterlis", detail: "Tehnologie de ultimă oră cu vid pentru integrarea perfectă a peliculei OPV." },
    { name: "Masă de tăiere Bovone", detail: "Precizie milimetrică cu perne de aer pentru manipularea sticlei de mari dimensiuni." },
    { name: "Simulator Solar Clasa AAA", detail: "Validare riguroasă a eficienței energetice sub spectru solar controlat." }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/10 skew-x-12 translate-x-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl font-bold mb-6">Inovație de la Iași <br />pentru Europa</h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Originară din mediul academic al Universității Tehnice „Gheorghe Asachi” din Iași (IEEIA), 
              Solar Glass îmbină cercetarea avansată cu nevoile pieței imobiliare moderne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {values.map((item, i) => (
            <div key={i} className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow">
              <div className="mb-6">{item.icon}</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/20 text-white text-sm font-bold uppercase mb-6 tracking-wide">
                Hala de Producție Iași
              </div>
              <h2 className="text-4xl font-bold mb-8">Infrastructură de Top</h2>
              <p className="text-emerald-100 text-lg leading-relaxed mb-10">
                Dotările noastre ne permit să producem sticlă fotovoltaică la cele mai înalte standarde industriale, 
                garantând durabilitate și performanță maximă.
              </p>
              <Factory size={120} className="text-white/10 absolute -bottom-10 -left-10" />
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {infrastructure.map((item, i) => (
                <div key={i} className="p-8 bg-black/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-black/20 transition-colors">
                  <Microscope className="text-emerald-300 mb-4" size={32} />
                  <h3 className="font-extrabold text-xl mb-3">{item.name}</h3>
                  <p className="text-emerald-50 text-sm">{item.detail}</p>
                </div>
              ))}
              <div className="p-8 bg-white text-emerald-900 rounded-2xl flex flex-col justify-center items-center text-center shadow-2xl">
                 <ShieldCheck className="mb-4" size={48} />
                 <span className="font-black text-3xl">Certificare AAA</span>
                 <p className="text-sm font-semibold opacity-70 mt-2 tracking-tighter uppercase">Standard Industrial European</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Echipa Noastră</h2>
        <p className="text-slate-500 mb-16 max-w-2xl mx-auto">
          Suntem un grup multidisciplinar de specialiști dedicați revoluției energetice.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { role: "Ingineri Electroniști", detail: "Dezvoltatorii circuitelor de captare și conversie." },
            { role: "Electricieni Autorizați ANRE", detail: "Garanția siguranței și conformității la rețea." },
            { role: "Specialiști Fotovoltaici", detail: "Experți în chimie organică și eficiență OPV." }
          ].map((member, i) => (
            <div key={i} className="group">
              <div className="w-24 h-24 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-500 transition-colors group-hover:text-white text-emerald-600">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{member.role}</h3>
              <p className="text-slate-500 text-sm">{member.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
