import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'stellcoresoftware@gmail.com',
      description: 'Resposta em até 24 horas'
    },
    {
      icon: Phone,
      title: 'Telefone',
      info: '+55 (41) 99674-5201',
      description: 'Seg à Sex, 9h às 18h'
    },
    {
      icon: MapPin,
      title: 'Localização',
      info: 'Curitiba, PR - Brasil',
      description: 'Atendimento remoto e presencial'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: '9h às 18h',
      description: 'Segunda à Sexta-feira'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Entre em <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Dúvidas sobre os nossos apps ou quer conversar sobre um projeto? Fale com a gente.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((item) => (
            <Card key={item.title} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-gray-900 dark:text-white font-medium">{item.info}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}