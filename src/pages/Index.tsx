import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/20">
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
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Play" className="mr-2" size={20} />
                Посмотреть демо
              </Button>
            </div>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
            <Card className="relative overflow-hidden border-2 shadow-2xl">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Bus" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg">Автобус №3</h3>
                        <p className="text-sm text-muted-foreground">Корпус → Общежитие</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500/10 text-green-700 border-green-500/20">В пути</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-sm">До остановки <span className="font-semibold">5 минут</span></span>
                    </div>
                    <div className="bg-accent/50 rounded-lg p-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Следующий автобус через</span>
                        <span className="font-bold text-primary">22 минуты</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Что это за проблема?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Стоишь на остановке, не зная, ждать тебе 2 минуты или 40. Никакие Яндекс.Карты не помогают — твой автобус для них не существует.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Clock', title: 'Теряешь время', desc: 'До 40 минут ожидания без информации о прибытии' },
              { icon: 'Snowflake', title: 'Мерзнешь зимой', desc: 'Стоишь на холоде, потому что не знаешь когда приедет' },
              { icon: 'AlertCircle', title: 'Опаздываешь', desc: 'Пропускаешь пары из-за непредсказуемого транспорта' }
            ].map((item, idx) => (
              <Card key={idx} className="border-2 hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="font-heading">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Просто и понятно</Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Как это работает?</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '1', icon: 'Download', title: 'Скачай приложение', desc: 'Бесплатно в App Store и Google Play' },
              { num: '2', icon: 'MapPin', title: 'Выбери маршрут', desc: 'Укажи свою остановку и направление' },
              { num: '3', icon: 'Bell', title: 'Получай уведомления', desc: 'Push когда автобус подъезжает' },
              { num: '4', icon: 'ThumbsUp', title: 'Планируй время', desc: 'Выходи точно к автобусу' }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Icon name={step.icon as any} className="text-white" size={28} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold font-heading shadow-lg">
                    {step.num}
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Как мы решаем проблему?</h2>
            <p className="text-xl text-muted-foreground">Превращаем ожидание из лотереи в планирование</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: 'MapPinned',
                title: 'Отслеживание в реальном времени',
                desc: 'Видишь где автобус прямо сейчас на карте. Знаешь точное время прибытия до минуты.',
                features: ['GPS-трекинг автобусов', 'Обновление каждые 10 секунд', 'История движения']
              },
              {
                icon: 'BellRing',
                title: 'Умные уведомления',
                desc: 'Приложение разбудит тебя push-уведомлением когда нужно выходить из дома.',
                features: ['Push за 15 минут до прибытия', 'Настройка времени уведомлений', 'Не пропустишь автобус']
              },
              {
                icon: 'CalendarClock',
                title: 'Актуальное расписание',
                desc: 'Всегда знаешь расписание всех маршрутов. Планируешь день заранее.',
                features: ['Расписание на неделю', 'Изменения в реальном времени', 'Сохранение любимых маршрутов']
              },
              {
                icon: 'Users',
                title: 'Статистика и отзывы',
                desc: 'Сообщество студентов делится информацией о задержках и изменениях.',
                features: ['Репорты от пассажиров', 'Рейтинг водителей', 'Чат пользователей']
              }
            ].map((feature, idx) => (
              <Card key={idx} className="border-2 hover:shadow-xl transition-all hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="font-heading text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-green-600" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Кому подходит?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-green-500/20 bg-green-50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Check" className="text-green-600" size={28} />
                  <CardTitle className="font-heading text-green-900">Идеально для тебя</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Студент живущий в общежитии',
                    'Сотрудник университета',
                    'Преподаватель ездящий на корпоративном транспорте',
                    'Тот кто ценит свое время'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="CircleCheck" className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-green-900">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500/20 bg-red-50">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="X" className="text-red-600" size={28} />
                  <CardTitle className="font-heading text-red-900">Не подойдет если</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    'Не пользуешься университетским транспортом',
                    'Живешь в пешей доступности от корпуса',
                    'Всегда ездишь на своей машине',
                    'Предпочитаешь такси или каршеринг'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="CircleX" className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-red-900">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Прозрачные условия</Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Тарифы</h2>
            <p className="text-xl text-muted-foreground">Выбери подходящий план</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Бесплатный',
                price: '0 ₽',
                period: 'навсегда',
                features: ['Базовое отслеживание автобусов', 'Расписание маршрутов', 'До 3 уведомлений в день', 'Реклама в приложении'],
                popular: false
              },
              {
                name: 'Студент',
                price: '99 ₽',
                period: 'в месяц',
                features: ['Отслеживание в реальном времени', 'Неограниченные push-уведомления', 'Без рекламы', 'История поездок', 'Приоритетная поддержка'],
                popular: true
              },
              {
                name: 'Семестр',
                price: '399 ₽',
                period: '6 месяцев',
                features: ['Все возможности тарифа Студент', 'Экономия 33%', 'Статистика за семестр', 'Раннее получение новых функций', 'Значок активного пользователя'],
                popular: false
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`relative border-2 ${plan.popular ? 'border-primary shadow-2xl scale-105' : 'border-border'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-secondary text-white">Популярный</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold font-heading">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                    {plan.price === '0 ₽' ? 'Начать бесплатно' : 'Выбрать тариф'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Отзывы студентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят наши пользователи</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Анна Петрова',
                role: 'Студентка 3 курса',
                text: 'Раньше опаздывала на первую пару каждую неделю. Теперь знаю когда выходить и всегда прихожу вовремя!',
                rating: 5
              },
              {
                name: 'Дмитрий Иванов',
                role: 'Магистрант',
                text: 'Зимой это спасение! Больше не стою на морозе по 30 минут. Выхожу когда приложение показывает что автобус близко.',
                rating: 5
              },
              {
                name: 'Мария Сидорова',
                role: 'Сотрудник университета',
                text: 'Удобное приложение с понятным интерфейсом. Теперь могу планировать свой день более эффективно.',
                rating: 5
              }
            ].map((review, idx) => (
              <Card key={idx} className="border-2 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <CardTitle className="font-heading text-base">{review.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Результаты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Цифры и факты</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: 'Users', number: '3,247', label: 'Активных пользователей' },
              { icon: 'Clock', number: '35 мин', label: 'Экономия времени в неделю' },
              { icon: 'TrendingUp', number: '94%', label: 'Удовлетворенность сервисом' },
              { icon: 'Bus', number: '12', label: 'Отслеживаемых маршрутов' }
            ].map((stat, idx) => (
              <Card key={idx} className="border-2 text-center p-8 hover:shadow-lg transition-all">
                <Icon name={stat.icon as any} className="text-primary mx-auto mb-4" size={48} />
                <div className="text-5xl font-bold font-heading text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-center">Кейс: Корпус 3 → Общежитие №5</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="AlertCircle" className="text-red-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Было:</h4>
                    <p className="text-muted-foreground">Студенты ждали автобус в среднем 28 минут, опаздывали на пары в 40% случаев</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Стало:</h4>
                    <p className="text-muted-foreground">Среднее время ожидания снизилось до 7 минут, опоздания сократились на 85%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Вопросы и ответы</h2>
            <p className="text-xl text-muted-foreground">Ответы на частые вопросы</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Как приложение узнает где автобус?',
                a: 'Мы устанавливаем GPS-трекеры в автобусы с разрешения университета. Данные передаются в реальном времени и отображаются на карте в приложении.'
              },
              {
                q: 'Работает ли приложение офлайн?',
                a: 'Для отслеживания в реальном времени нужен интернет, но расписание маршрутов доступно офлайн. Также кэшируются данные последней сессии.'
              },
              {
                q: 'Можно ли добавить свой маршрут?',
                a: 'Да! Используй функцию "Предложить маршрут" в приложении. Если наберется достаточно заинтересованных пользователей, мы добавим его.'
              },
              {
                q: 'Что если автобус сломался?',
                a: 'Пользователи могут отправлять репорты о проблемах. Информация сразу появляется у всех, кто отслеживает этот маршрут.'
              },
              {
                q: 'Безопасны ли мои данные?',
                a: 'Мы не собираем персональные данные. Только анонимная статистика использования для улучшения сервиса. Все данные хранятся в зашифрованном виде.'
              }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border-2 rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжись с нами любым удобным способом</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: 'Mail', title: 'Email', value: 'support@bustrack.ru', link: 'mailto:support@bustrack.ru' },
              { icon: 'MessageCircle', title: 'Telegram', value: '@UniBusTrackerbot', link: 'https://t.me/UniBusTrackerbot' },
              { icon: 'Phone', title: 'Телефон', value: '+7 (999) 123-45-67', link: 'tel:+79991234567' }
            ].map((contact, idx) => (
              <Card key={idx} className="border-2 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <Icon name={contact.icon as any} className="text-primary mx-auto mb-2" size={32} />
                  <CardTitle className="font-heading text-lg">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={contact.link} className="text-primary hover:underline font-medium">
                    {contact.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader className="text-center">
              <CardTitle className="font-heading text-2xl">О нас пишут</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
                {['TechCrunch', 'VC.ru', 'Хабр', 'РБК', 'Медуза'].map((media, idx) => (
                  <div key={idx} className="text-xl font-bold font-heading text-muted-foreground">
                    {media}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Bus" className="text-primary" size={28} />
                <span className="text-xl font-bold font-heading">БусТрек</span>
              </div>
              <p className="text-sm opacity-80">Университетский транспорт под контролем</p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-3">Продукт</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Приложение</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-60">
            <p>© 2024 БусТрек. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;