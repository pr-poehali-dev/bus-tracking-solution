import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Bus" className="text-primary" size={32} />
            <span className="text-2xl font-bold font-heading text-primary">БусТрек</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('about')} className="text-foreground/80 hover:text-primary transition-colors">О нас</button>
            <button onClick={() => scrollToSection('features')} className="text-foreground/80 hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('faq')} className="text-foreground/80 hover:text-primary transition-colors">Вопросы</button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-primary transition-colors">Контакты</button>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="https://t.me/UniBusTrackerbot" target="_blank" rel="noopener noreferrer">
                Открыть бота
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
