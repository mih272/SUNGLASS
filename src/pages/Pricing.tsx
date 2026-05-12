import { motion } from 'motion/react';
import { Calculator, Check, Info } from 'lucide-react';

export default function Pricing() {
  const priceData = [
    { label: "Cost Direct Producție", value: "2.114 RON" },
    { label: "Cheltuieli Fixe Fabricație (+30%)", value: "634.2 RON" },
    { label: "Logistică și Transport (+5%)", value: "105.7 RON" },
    { label: "Adaos Dezvoltare & Inovare (+15.13%)", value: "601.1 RON" },
    { label: "TVA (19%)", value: "521 RON" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Investiția Solar Glass</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Transparență totală în costuri. Tehnologia BIPV este o investiție amortizabilă, nu doar un cost de achiziție.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Price Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-2xl shadow-emerald-100 border border-emerald-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-bl-[4rem]" />
            
            <div className="relative z-10">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-4 block">Preț Unitar Standard</span>
              <div className="flex items-end mb-8">
                <span className="text-6xl font-black text-slate-900 tracking-tighter">3.976</span>
                <span className="text-2xl font-bold text-slate-400 mb-2 ml-2">RON / MP</span>
              </div>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center text-slate-600">
                  <Check className="text-emerald-500 mr-3" size={20} />
                  <span>Sticlă Laminată PV integrată</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Check className="text-emerald-500 mr-3" size={20} />
                  <span>Configurare Transparență 40-70%</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Check className="text-emerald-500 mr-3" size={20} />
                  <span>Certificat Eficiență AAA</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Check className="text-emerald-500 mr-3" size={20} />
                  <span>Consultanță nZEB Inclusă</span>
                </div>
              </div>

              <button className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100 hover:-translate-y-1">
                Solicită Devis Proiect
              </button>
            </div>
          </motion.div>

          {/* Breakdown Table */}
          <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm">
             <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center">
                    <Calculator className="text-slate-400 mr-3" size={24} />
                    <h3 className="font-bold text-slate-900">Structură Calcul Preț</h3>
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest bg-white px-3 py-1 rounded-full border border-slate-200">Defalcat</div>
             </div>
             
             <div className="divide-y divide-slate-100">
                {priceData.map((item, i) => (
                  <div key={i} className="p-6 flex justify-between items-center group hover:bg-slate-50 transition-colors">
                    <span className="text-slate-600 group-hover:text-slate-900 transition-colors">{item.label}</span>
                    <span className="font-bold text-slate-900 font-mono">{item.value}</span>
                  </div>
                ))}
                <div className="p-8 bg-slate-900 text-white flex justify-between items-center">
                   <div className="flex flex-col">
                      <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Total Final (Cu TVA)</span>
                      <span className="text-2xl font-black text-emerald-400">3.976,00 RON</span>
                   </div>
                   <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Info size={20} className="text-emerald-400" />
                   </div>
                </div>
             </div>
             
             <div className="p-8 bg-blue-50/30">
               <p className="text-xs text-slate-500 leading-relaxed italic">
                 * Prețul este calculat pentru o comandă minimă de 50 mp. Pentru suprafețe mari sub formă de fațadă cortină, se pot aplica discount-uri de volum de până la 15%. Prețul nu include profilele de aluminiu pentru montaj.
               </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
