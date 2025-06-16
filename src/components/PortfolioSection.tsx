
import { ExternalLink, Play, BarChart3, MessageSquare, Instagram, Smartphone, Megaphone } from "lucide-react";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "Notificações Inteligentes",
      description: "Envio automático de alertas, lembretes e atualizações via WhatsApp, Telegram e E-mail, mantendo você e seus clientes sempre informados.",
      icon: Megaphone,
      image: "https://minio.victornogueira.tech/api/v1/buckets/automacoes/objects/download?preview=true&prefix=%F0%9F%8F%A6%20Empresas%2FVN%2FImagens%2FSite%20-%20VN%2Fnotificacoes.jpg&version_id=null",
      tags: ["Notificações", "Alertas", "Automação"]
    },
    {
      title: "Chatbot WhatsApp",
      description: "Bot inteligente para e-commerce com integração completa ao sistema de vendas.",
      icon: MessageSquare,
      image: "https://minio.victornogueira.tech/api/v1/buckets/automacoes/objects/download?preview=true&prefix=%F0%9F%8F%A6%20Empresas%2FVN%2FImagens%2FSite%20-%20VN%2Fchatbot.jpg&version_id=null",
      tags: ["WhatsApp", "E-commerce", "IA"]
    },
    {
      title: "Link Bio Interativo",
      description: "Links personalizados para Instagram com analytics avançados e conversões otimizadas.",
      icon: Instagram,
      image: "https://minio.victornogueira.tech/api/v1/buckets/automacoes/objects/download?preview=true&prefix=%F0%9F%8F%A6%20Empresas%2FVN%2FImagens%2FSite%20-%20VN%2Finstagram.jpg&version_id=null",
      tags: ["Instagram", "Bio Link", "Analytics"]
    },
    {
      title: "Assistente IA Personalizado",
      description: "Assistente virtual customizado para atendimento especializado em área médica.",
      icon: Smartphone,
      image: "https://minio.victornogueira.tech/api/v1/buckets/automacoes/objects/download?preview=true&prefix=%F0%9F%8F%A6%20Empresas%2FVN%2FImagens%2FSite%20-%20VN%2Fassistente%20ia.jpg&version_id=null",
      tags: ["IA", "Assistente", "Personalizado"]
    },
    {
      title: "Sistema de Leads",
      description: "Plataforma completa para captura, qualificação e nutrição de leads automatizada.",
      icon: BarChart3,
      image: "https://minio.victornogueira.tech/api/v1/buckets/automacoes/objects/download?preview=true&prefix=%F0%9F%8F%A6%20Empresas%2FVN%2FImagens%2FSite%20-%20VN%2Fleads.jpg&version_id=null",
      tags: ["Leads", "CRM", "Automação"]
    },
    {
      title: "Bot Telegram Avançado",
      description: "Bot multifuncional para Telegram com comandos personalizados e integrações.",
      icon: MessageSquare,
      image: "https://minio.victornogueira.tech/api/v1/buckets/automacoes/objects/download?preview=true&prefix=%F0%9F%8F%A6%20Empresas%2FVN%2FImagens%2FSite%20-%20VN%2Ftelegram.jpg&version_id=null",
      tags: ["Telegram", "Bot", "Integração"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nosso <span className="text-brand-gray">Portfólio</span>
          </h2>
          <p className="text-xl text-brand-ice max-w-3xl mx-auto">
            Conheça alguns projetos que desenvolvemos e os resultados impressionantes 
            que alcançamos para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group bg-brand-ice rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-brand-gray/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button className="p-3 bg-brand-gray/20 backdrop-blur-sm rounded-full hover:bg-brand-gray/30 transition-colors duration-200">
                      <Play size={20} className="text-white" />
                    </button>
                    <button className="p-3 bg-brand-gray/20 backdrop-blur-sm rounded-full hover:bg-brand-gray/30 transition-colors duration-200">
                      <ExternalLink size={20} className="text-white" />
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <item.icon size={24} className="text-white drop-shadow-lg" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-black mb-3 group-hover:text-brand-gray transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-brand-gray mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-brand-black text-brand-ice text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          {/* <button
            onClick={() => {
              const element = document.getElementById("contato");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-brand-gray text-brand-black px-8 py-4 rounded-full hover:bg-brand-ice transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
          >
            Ver Mais Projetos
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
