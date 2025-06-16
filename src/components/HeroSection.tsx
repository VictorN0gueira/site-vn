
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-brand-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-gray/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-ice/10 rounded-full blur-3xl animate-float" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-brand-gray/10 rounded-full blur-3xl animate-float" style={{animationDelay: "2s"}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-brand-gray mr-2" size={32} />
            <span className="text-brand-gray font-medium text-lg">Tecnologia & Inovação</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Automação &{" "}
            <span className="text-brand-gray">
              Inteligência
            </span>{" "}
            Artificial
          </h1>
          
          <p className="text-xl text-brand-ice mb-12 max-w-3xl mx-auto leading-relaxed">
            Automação e IA para seu negócio crescer sem complicação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollTo("contato")}
              className="group bg-brand-gray text-brand-black px-8 py-4 rounded-full hover:bg-brand-ice transition-all duration-300 transform hover:scale-105 flex items-center font-semibold text-lg"
            >
              Fale Conosco
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </button>
            
            <button
              onClick={() => scrollTo("servicos")}
              className="group border-2 border-brand-gray text-brand-gray px-8 py-4 rounded-full hover:bg-brand-gray hover:text-brand-black transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              Ver Serviços
            </button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-slide-in-left">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-brand-gray">Automações Criadas</div>
            </div>
            <div className="text-center animate-scale-in" style={{animationDelay: "0.2s"}}>
              <div className="text-3xl font-bold text-white mb-2">99%</div>
              <div className="text-brand-gray">Satisfação dos Clientes</div>
            </div>
            <div className="text-center animate-slide-in-right" style={{animationDelay: "0.4s"}}>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-brand-gray">Suporte Ativo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
