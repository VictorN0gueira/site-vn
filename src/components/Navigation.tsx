
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-black/95 backdrop-blur-sm border-b border-brand-gray/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/5fa56618-ebd9-400a-8461-04487e1464e4.png" 
              alt="Victor Nogueira Logo" 
              className="h-12 w-auto object-contain hover:brightness-110 transition-all duration-300"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollTo("inicio")}
                className="text-white hover:text-brand-gray transition-colors duration-200 font-medium relative group"
              >
                Início
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gray transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollTo("servicos")}
                className="text-white hover:text-brand-gray transition-colors duration-200 font-medium relative group"
              >
                Serviços
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gray transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollTo("portfolio")}
                className="text-white hover:text-brand-gray transition-colors duration-200 font-medium relative group"
              >
                Portfólio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gray transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollTo("contato")}
                className="bg-brand-gray text-brand-black px-8 py-3 rounded-full hover:bg-brand-ice transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
              >
                Contato
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-brand-gray transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-brand-black/95 backdrop-blur-sm border-t border-brand-gray/20 rounded-b-lg">
              <button
                onClick={() => scrollTo("inicio")}
                className="block w-full text-left px-3 py-3 text-white hover:text-brand-gray transition-colors duration-200 font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollTo("servicos")}
                className="block w-full text-left px-3 py-3 text-white hover:text-brand-gray transition-colors duration-200 font-medium"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollTo("portfolio")}
                className="block w-full text-left px-3 py-3 text-white hover:text-brand-gray transition-colors duration-200 font-medium"
              >
                Portfólio
              </button>
              <button
                onClick={() => scrollTo("contato")}
                className="block w-full text-left px-3 py-3 text-white hover:text-brand-gray transition-colors duration-200 font-medium"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
