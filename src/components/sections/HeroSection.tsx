import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  isVisible: boolean;
}

const HeroSection = ({ isVisible }: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Для студентов и сотрудников</Badge>
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Забудь про ожидание на остановке
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Узнай, где твой университетский автобус прямо сейчас. Планируй время, а не мерзни на остановке 40 минут.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              <a href="https://t.me/UniBusTrackerbot" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" className="mr-2" size={20} />
                Открыть Telegram бота
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="overflow-hidden border-2 shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <img src="https://cdn.poehali.dev/files/ae4fe3d4-f9ce-4764-afcc-ca4e91bfad99.png" alt="Telegram бот - Старт" className="w-full h-full object-cover aspect-[9/16]" />
          </Card>
          <Card className="overflow-hidden border-2 shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <img src="https://cdn.poehali.dev/files/27a71992-a811-4687-be1a-fea669583dbb.png" alt="Telegram бот - Помощь" className="w-full h-full object-cover aspect-[9/16]" />
          </Card>
          <Card className="overflow-hidden border-2 shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <img src="https://cdn.poehali.dev/files/af060e54-d96c-48a7-aa53-05f05f009dcf.png" alt="Telegram бот - Маршруты" className="w-full h-full object-cover aspect-[9/16]" />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
