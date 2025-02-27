import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="about-container bg-gradient-to-r from-[#1a1a1a] via-[#2e2e2e] to-[#1a1a1a] text-white py-16 px-8 min-h-screen flex flex-col items-center"
    >
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-[#E39B62] mb-6">Մեր Մասին</h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Մեր ընկերությունը մասնագիտացած է շինարարական նախագծերի իրականացման մեջ՝
          առաջարկելով բարձրորակ, նորարարական և հուսալի լուծումներ:
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Տարիների փորձառությամբ մենք կառուցում ենք անվտանգ, ամուր և ժամանակակից
          շինություններ, որոնք համապատասխանում են մեր հաճախորդների ակնկալիքներին:
        </p>
      </div>
      <div className="mt-10 flex gap-6 flex-wrap justify-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-[#E39B62] p-6 rounded-lg shadow-lg w-64 text-center text-black font-semibold text-xl"
        >
          10+ Տարի Փորձ
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-[#C07B50] p-6 rounded-lg shadow-lg w-64 text-center text-black font-semibold text-xl"
        >
          100+ Կատարած Նախագիծ
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-[#E39B62] p-6 rounded-lg shadow-lg w-64 text-center text-black font-semibold text-xl"
        >
          500+ Գոհ Հաճախորդ
        </motion.div>
      </div>
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-10 bg-[#E39B62] text-black px-6 py-3 rounded-lg shadow-lg font-semibold text-lg transition-all hover:bg-[#C07B50]"
      >
        Իմանալ Ավելին
      </motion.button>
    </motion.div>
  );
};

export default About;