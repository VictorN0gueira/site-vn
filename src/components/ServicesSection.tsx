
import { Bot, MessageCircle, Zap, Users, Mail, Settings, Send, Package } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "Assistentes de IA Personalizados",
      description: "Desenvolvimento de assistentes inteligentes adaptados às necessidades específicas do seu negócio."
    },
    {
      icon: MessageCircle,
      title: "Automação de WhatsApp",
      description: "Chatbots avançados para atendimento, vendas e suporte automatizado no WhatsApp."
    },
    {
      icon: Users,
      title: "Captura e Gestão de Leads",
      description: "Sistemas inteligentes para capturar, qualificar e nutrir leads automaticamente."
    },
    {
      icon: Mail,
      title: "E-mail Marketing e Notificações",
      description: "Automação completa de campanhas de e-mail e notificações personalizadas."
    },
    {
      icon: Zap,
      title: "Chatbots e Atendimento Automático",
      description: "Bots inteligentes que oferecem atendimento 24/7 com precisão e eficiência."
    },
    {
      icon: Settings,
      title: "Integrações e Soluções Personalizadas",
      description: "Analisamos a viabilidade de soluções personalizadas conforme sua necessidade."
    },
    {
      icon: Send,
      title: "Automação com Telegram",
      description: "Bots personalizados para Telegram com funcionalidades avançadas de interação."
    },
    {
      icon: Package,
      title: "Pacotes Especiais (Combos)",
      description: "Soluções completas combinando múltiplos serviços para resultados otimizados."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-brand-ice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
            Nossos <span className="text-brand-gray">Serviços</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Soluções completas de automação e inteligência artificial para transformar 
            a forma como você se relaciona com seus clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl hover:bg-brand-black hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-brand-gray/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <service.icon 
                  size={40} 
                  className="text-brand-black group-hover:text-brand-gray transition-colors duration-300" 
                />
              </div>
              <h3 className="text-xl font-semibold text-brand-black mb-4 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-brand-gray group-hover:text-brand-ice leading-relaxed transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => {
              const element = document.getElementById("contato");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-brand-black text-white px-8 py-4 rounded-full hover:bg-brand-gray hover:text-brand-black transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
