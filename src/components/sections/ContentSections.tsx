import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const ContentSections = () => {
  return (
    <>
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-accent/10">
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
              <Card key={idx} className="border-2 hover:shadow-xl transition-all hover:-translate-y-2 hover:border-primary/30">
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
              { num: '1', icon: 'Send', title: 'Открой бота', desc: 'Найди @UniBusTrackerbot в Telegram' },
              { num: '2', icon: 'MessageSquare', title: 'Напиши команду', desc: 'Введи /start или номер маршрута' },
              { num: '3', icon: 'MapPin', title: 'Узнай расписание', desc: 'Бот покажет время прибытия автобуса' },
              { num: '4', icon: 'Clock', title: 'Планируй выход', desc: 'Знаешь точно когда выходить из дома' }
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

      <section id="features" className="py-20 px-4 bg-gradient-to-b from-accent/10 to-white">
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
                icon: 'Bell',
                title: 'Умные уведомления',
                desc: 'Получай push когда автобус подъезжает. Настраивай время заранее под свои нужды.',
                features: ['Персональные напоминания', 'Уведомления о задержках', 'Настройка времени прибытия']
              },
              {
                icon: 'BarChart',
                title: 'Аналитика и прогнозы',
                desc: 'Система изучает маршруты и предсказывает задержки на основе данных.',
                features: ['Прогноз времени прибытия', 'Загруженность автобусов', 'Статистика пунктуальности']
              },
              {
                icon: 'Users',
                title: 'Статистика и отзывы',
                desc: 'Сообщество студентов делится информацией о задержках и изменениях.',
                features: ['Репорты от пассажиров', 'Рейтинг водителей', 'Чат пользователей']
              }
            ].map((feature, idx) => (
              <Card key={idx} className="border-2 hover:shadow-xl transition-all hover:scale-105 hover:border-secondary/50 duration-300">
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

      <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 via-primary/5 to-accent/10">
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
                  <CardTitle className="font-heading text-red-900">Не подходит</CardTitle>
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

      <section className="py-20 px-4 bg-gradient-to-b from-white to-accent/5">
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
                price: '199 ₽',
                period: 'в месяц',
                features: ['Отслеживание всех маршрутов', 'Уведомления о прибытии', 'История поездок за месяц', 'Карта в реальном времени', 'Техподдержка в рабочие дни'],
                popular: true
              },
              {
                name: 'Семестр',
                price: '899 ₽',
                period: '6 месяцев',
                features: ['Все возможности тарифа Студент', 'Экономия 25% (150₽/мес)', 'Статистика за весь семестр', 'Приоритетная техподдержка 24/7', 'Ранний доступ к новым функциям'],
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

      <section id="faq" className="py-20 px-4 bg-gradient-to-b from-accent/5 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на самые популярные вопросы</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: 'Как начать пользоваться сервисом?',
                answer: 'Найди бота @UniBusTrackerbot в Telegram, нажми "Старт" и выбери свой маршрут. Бот сразу покажет, где сейчас автобусы.'
              },
              {
                question: 'Насколько точны данные о местоположении?',
                answer: 'Данные обновляются каждые 10 секунд через GPS-трекеры в автобусах. Точность до 50 метров в городских условиях.'
              },
              {
                question: 'Работает ли приложение без интернета?',
                answer: 'Нет, для отслеживания автобусов нужно подключение к интернету. Но расписание можно сохранить заранее.'
              },
              {
                question: 'Можно ли отменить подписку?',
                answer: 'Да, в любой момент. Подписка действует до конца оплаченного периода, автопродление можно отключить.'
              },
              {
                question: 'Какие автобусы отслеживаются?',
                answer: 'Все университетские маршруты, которые курсируют между корпусами и общежитиями. Список постоянно расширяется.'
              }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-2 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-lg font-heading hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Остались вопросы?</h2>
            <p className="text-xl text-muted-foreground">Мы всегда на связи</p>
          </div>

          <Card className="border-2 shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" className="text-primary" size={28} />
                  </div>
                  <h3 className="font-heading font-bold mb-2">Email</h3>
                  <a href="mailto:support@bustrack.ru" className="text-primary hover:underline">
                    support@bustrack.ru
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Send" className="text-primary" size={28} />
                  </div>
                  <h3 className="font-heading font-bold mb-2">Telegram</h3>
                  <a href="https://t.me/bustracksupport" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    @bustracksupport
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" className="text-primary" size={28} />
                  </div>
                  <h3 className="font-heading font-bold mb-2">Телефон</h3>
                  <a href="tel:+78001234567" className="text-primary hover:underline">
                    8 (800) 123-45-67
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Bus" size={28} />
                <span className="text-xl font-bold font-heading">БусТрек</span>
              </div>
              <p className="text-white/80 text-sm">
                Умное отслеживание университетского транспорта в реальном времени
              </p>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#features" className="hover:text-white transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Тарифы</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2024 БусТрек. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContentSections;
