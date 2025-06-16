
import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.whatsapp || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos do formulário.",
        variant: "destructive"
      });
      return;
    }

    // Simulação de envio
    console.log("Dados do formulário:", formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });

    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      message: ""
    });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de automação e IA.");
    window.open(`https://wa.me/5581996818208?text=${message}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-brand-ice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
            Vamos <span className="text-brand-gray">Conversar</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Pronto para transformar seu negócio? Entre em contato e descubra como 
            nossas soluções podem revolucionar seus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-brand-black mb-6">
                Entre em Contato
              </h3>
              <p className="text-brand-gray mb-8 leading-relaxed">
                Estamos aqui para ajudar você a automatizar processos, implementar 
                inteligência artificial e alcançar resultados extraordinários.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-brand-gray/10 rounded-full">
                  <Phone size={24} className="text-brand-gray" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-black">WhatsApp</h4>
                  <p className="text-brand-gray">(81) 99681-8208</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-brand-gray/10 rounded-full">
                  <Mail size={24} className="text-brand-gray" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-black">E-mail</h4>
                  <p className="text-brand-gray">contato@victornogueira.tech</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-brand-gray/10 rounded-full">
                  <MapPin size={24} className="text-brand-gray" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-black">Localização</h4>
                  <p className="text-brand-gray">Vitória de Santo Antão, PE - Brasil</p>
                </div>
              </div>
            </div>

            <button
              onClick={openWhatsApp}
              className="w-full bg-brand-black text-white px-8 py-4 rounded-full hover:bg-brand-gray hover:text-brand-black transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center justify-center"
            >
              <Phone className="mr-2" size={20} />
              Chamar no WhatsApp
            </button>
          </div>

          {/* Formulário */}
<div className="bg-white p-8 rounded-2xl border border-brand-gray/20">
  <form 
    action="https://formsubmit.co/santoosvictor447@gmail.com" 
    method="POST" 
    className="space-y-6"
  >
    {/* campos ocultos para FormSubmit */}
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_next" value="https://victornogueira.tech/obrigado" />

    <div>
      <label htmlFor="name" className="block text-sm font-medium text-brand-black mb-2">
        Nome Completo *
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full px-4 py-3 bg-brand-ice border border-brand-gray/30 rounded-lg focus:ring-2 focus:ring-brand-gray focus:border-transparent transition-all duration-200"
        placeholder="Digite seu nome completo"
        required
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-brand-black mb-2">
        Seu Melhor E-mail *
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full px-4 py-3 bg-brand-ice border border-brand-gray/30 rounded-lg focus:ring-2 focus:ring-brand-gray focus:border-transparent transition-all duration-200"
        placeholder="seuemail@exemplo.com"
        required
      />
    </div>

    <div>
      <label htmlFor="whatsapp" className="block text-sm font-medium text-brand-black mb-2">
        WhatsApp para Contato *
      </label>
      <input
        type="tel"
        id="whatsapp"
        name="whatsapp"
        className="w-full px-4 py-3 bg-brand-ice border border-brand-gray/30 rounded-lg focus:ring-2 focus:ring-brand-gray focus:border-transparent transition-all duration-200"
        placeholder="(81) 99681-8208"
        required
      />
    </div>

    <div>
      <label htmlFor="message" className="block text-sm font-medium text-brand-black mb-2">
        Conte-nos sobre... *
      </label>
      <textarea
        id="message"
        name="message"
        rows={5}
        className="w-full px-4 py-3 bg-brand-ice border border-brand-gray/30 rounded-lg focus:ring-2 focus:ring-brand-gray focus:border-transparent transition-all duration-200 resize-none"
        placeholder="Descreva seu projeto, necessidades ou dúvidas..."
        required
      />
    </div>

    <button
      type="submit"
      className="w-full bg-brand-black text-white px-8 py-4 rounded-full hover:bg-brand-gray hover:text-brand-black transition-all duration-300 transform hover:scale-105 font-semibold text-lg flex items-center justify-center"
    >
      <Send className="mr-2" size={20} />
      Enviar Mensagem
    </button>
  </form>
</div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
