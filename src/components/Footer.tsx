import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/5fa56618-ebd9-400a-8461-04487e1464e4.png" 
                alt="Victor Nogueira Logo" 
                className="h-16 w-auto object-contain filter brightness-0 invert"
              />
            </div>
            <p className="text-brand-gray mb-8 leading-relaxed text-lg">
              Especialista em automação e inteligência artificial, 
              transformando negócios através da tecnologia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/victornogueira._/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-gray/20 rounded-full hover:bg-neon-blue/20 hover:text-neon-blue transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/victornogueirasantos"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-gray/20 rounded-full hover:bg-neon-purple/20 hover:text-neon-purple transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Serviços</h3>
            <ul className="space-y-3 text-brand-gray">
              <li><a  className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Automação WhatsApp</a></li>
              <li><a  className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Assistentes de IA</a></li>
              <li><a  className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Chatbots</a></li>
              <li><a  className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Links de BIO</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Links</h3>
            <ul className="space-y-3 text-brand-gray">
              <li><a href="#inicio" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Início</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Portfólio</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-gray/30 pt-8">
          <div className="text-center">
            <p className="text-brand-gray text-lg">
              VN | © {currentYear} Victor Nogueira. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
