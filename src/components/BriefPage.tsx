import { useState } from "react";
import { RedButton } from "./common/RedButton";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { toast } from "sonner@2.0.3";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import ogImage from "figma:asset/a517b9ade2ca696c966796682c963a0d724ddaf3.png";

export function BriefPage() {
  // SEO meta tags for brief page
  usePageMeta({
    title: "Заполнить бриф — Алтана | Заявка на подбор персонала",
    description: "Заполните бриф для подбора персонала в горнодобывающей отрасли. Подробная анкета поможет нам точнее понять ваши требования и найти идеального кандидата",
    keywords: "бриф подбор персонала, заявка на рекрутинг, форма подбора специалистов",
    ogImage: ogImage,
    type: "website",
    noindex: true, // Служебная страница, не нужно индексировать
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const totalSteps = 13;
  const progress = (currentStep / totalSteps) * 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In production: send data to backend
    console.log("Brief submitted:", formData);
    
    toast.success("Бриф отправлен!", {
      description: "Мы свяжемся с вами в ближайшее время."
    });
  };

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleSubmit(new Event('submit') as any);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white relative" style={{ zIndex: 2 }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 pt-24">
        {/* Gradient background */}
        <div className="absolute inset-0 hero-gradient" style={{ zIndex: 0 }} />
        
        <div className="container mx-auto relative" style={{ zIndex: 2 }}>
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#/" className="text-white/80 hover:text-white">
                  Главная
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/60" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">Бриф на подбор</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div>
            <h1 className="text-white mb-4 text-[32px] font-bold">
              Бриф на подбор сотрудников в горнодобывающую отрасль
            </h1>
            <p className="text-white/90 max-w-3xl">
              Заполните детальную информацию о вакансии, чтобы мы могли быстро и точно подобрать подходящих кандидатов
            </p>
          </div>
        </div>
      </section>

      {/* Brief Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-600">
                Шаг {currentStep} из {totalSteps}
              </p>
              <p className="text-gray-600">{Math.round(progress)}%</p>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card>
            <CardContent className="pt-6">
              {/* Step 1: Контакты и оргчасть */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-gray-900 text-[24px] font-semibold">1. Контакты и оргчасть</h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Компания, ИНН/ОГРН</Label>
                      <Input 
                        id="company" 
                        placeholder="ООО «Рудник», ИНН..." 
                        value={formData.company || ''} 
                        onChange={(e) => handleChange('company', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact">Контактное лицо (ФИО, должность)</Label>
                      <Input 
                        id="contact" 
                        placeholder="Иванов Иван Иванович, HR-менеджер" 
                        value={formData.contact || ''} 
                        onChange={(e) => handleChange('contact', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон/мессенджер</Label>
                      <Input 
                        id="phone" 
                        placeholder="+7 (999) 123-45-67" 
                        value={formData.phone || ''} 
                        onChange={(e) => handleChange('phone', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="email@company.ru" 
                        value={formData.email || ''} 
                        onChange={(e) => handleChange('email', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="urgency">Срочность</Label>
                      <Input 
                        id="urgency" 
                        placeholder="Требуется выход к 15.12.2025 / ASAP / в течение 2 недель" 
                        value={formData.urgency || ''} 
                        onChange={(e) => handleChange('urgency', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>Тип запроса</Label>
                      <RadioGroup value={formData.requestType} onValueChange={(value) => handleChange('requestType', value)}>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="single" id="single" />
                          <Label htmlFor="single" className="flex-1 cursor-pointer">Разовая вакансия</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="2-5" id="2-5" />
                          <Label htmlFor="2-5" className="flex-1 cursor-pointer">Пакет 2–5</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="6-10" id="6-10" />
                          <Label htmlFor="6-10" className="flex-1 cursor-pointer">Пакет 6–10</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="10+" id="10+" />
                          <Label htmlFor="10+" className="flex-1 cursor-pointer">10+</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <Checkbox id="nda" checked={!!formData.nda} onCheckedChange={(checked) => handleChange('nda', checked)} />
                      <Label htmlFor="nda" className="flex-1 cursor-pointer">NDA требуется</Label>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="approver">Ответственный за финальное согласование оффера</Label>
                      <Input 
                        id="approver" 
                        placeholder="ФИО, должность" 
                        value={formData.approver || ''} 
                        onChange={(e) => handleChange('approver', e.target.value)} 
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Локация и формат работы */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-gray-900 text-[24px] font-semibold">2. Локация и формат работы</h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Регион/участок (населенный пункт, месторождение)</Label>
                      <Input 
                        id="location" 
                        placeholder="г. Мирный, месторождение..." 
                        value={formData.location || ''} 
                        onChange={(e) => handleChange('location', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>Тип работ</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <Checkbox id="openPit" checked={!!formData.workTypeOpenPit} onCheckedChange={(checked) => handleChange('workTypeOpenPit', checked)} />
                          <Label htmlFor="openPit" className="flex-1 cursor-pointer">Карьер/разрез (открытая)</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <Checkbox id="underground" checked={!!formData.workTypeUnderground} onCheckedChange={(checked) => handleChange('workTypeUnderground', checked)} />
                          <Label htmlFor="underground" className="flex-1 cursor-pointer">Подземная</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <Checkbox id="placer" checked={!!formData.workTypePlacer} onCheckedChange={(checked) => handleChange('workTypePlacer', checked)} />
                          <Label htmlFor="placer" className="flex-1 cursor-pointer">Россыпная</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <Checkbox id="plant" checked={!!formData.workTypePlant} onCheckedChange={(checked) => handleChange('workTypePlant', checked)} />
                          <Label htmlFor="plant" className="flex-1 cursor-pointer">Обогатительная фабрика</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <Checkbox id="contractor" checked={!!formData.workTypeContractor} onCheckedChange={(checked) => handleChange('workTypeContractor', checked)} />
                          <Label htmlFor="contractor" className="flex-1 cursor-pointer">Подрядчик на площадке</Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label>Формат</Label>
                      <RadioGroup value={formData.workFormat} onValueChange={(value) => handleChange('workFormat', value)}>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="shift" id="shift" />
                          <Label htmlFor="shift" className="flex-1 cursor-pointer">Вахта</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="permanent" id="permanent" />
                          <Label htmlFor="permanent" className="flex-1 cursor-pointer">Постоянная занятость</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="seasonal" id="seasonal" />
                          <Label htmlFor="seasonal" className="flex-1 cursor-pointer">Сезонный контракт</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="schedule">График</Label>
                      <Input 
                        id="schedule" 
                        placeholder="15/15, 30/30, 45/45 или иной" 
                        value={formData.schedule || ''} 
                        onChange={(e) => handleChange('schedule', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="housing">Проживание</Label>
                      <Textarea 
                        id="housing" 
                        placeholder="Вахтовый поселок / общежитие / съемное; удобства: отдельная комната / блок / общая" 
                        value={formData.housing || ''} 
                        onChange={(e) => handleChange('housing', e.target.value)} 
                        rows={2} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="meals">Питание</Label>
                      <Input 
                        id="meals" 
                        placeholder="3-разовое / столовая / суточные / нет" 
                        value={formData.meals || ''} 
                        onChange={(e) => handleChange('meals', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="amenities">Связь/условия</Label>
                      <Input 
                        id="amenities" 
                        placeholder="Мобильная связь / Wi‑Fi / душ/баня / прачечная" 
                        value={formData.amenities || ''} 
                        onChange={(e) => handleChange('amenities', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="transport">Транспорт</Label>
                      <Textarea 
                        id="transport" 
                        placeholder="Перелет/проезд за счет работодателя; город сбора; багаж/форма" 
                        value={formData.transport || ''} 
                        onChange={(e) => handleChange('transport', e.target.value)} 
                        rows={2} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialConditions">Особые условия</Label>
                      <Textarea 
                        id="specialConditions" 
                        placeholder="Крайний Север / низкие температуры / отсутствие связи / вахтовый проезд по зимнику и т.п." 
                        value={formData.specialConditions || ''} 
                        onChange={(e) => handleChange('specialConditions', e.target.value)} 
                        rows={2} 
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Позиция и подчинение */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-gray-900 text-[24px] font-semibold">3. Позиция и подчинение</h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="position">Название должности</Label>
                      <Input 
                        id="position" 
                        placeholder="Машинист экскаватора / Горный мастер / Маркшейдер" 
                        value={formData.position || ''} 
                        onChange={(e) => handleChange('position', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>Кол-во ставок</Label>
                      <RadioGroup value={formData.positions} onValueChange={(value) => handleChange('positions', value)}>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="1" id="pos1" />
                          <Label htmlFor="pos1" className="flex-1 cursor-pointer">1</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="2-5" id="pos2-5" />
                          <Label htmlFor="pos2-5" className="flex-1 cursor-pointer">2–5</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="6+" id="pos6+" />
                          <Label htmlFor="pos6+" className="flex-1 cursor-pointer">6+</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <Label>Причина подбора</Label>
                      <RadioGroup value={formData.reason} onValueChange={(value) => handleChange('reason', value)}>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="new" id="new" />
                          <Label htmlFor="new" className="flex-1 cursor-pointer">Новая ставка</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="replacement" id="replacement" />
                          <Label htmlFor="replacement" className="flex-1 cursor-pointer">Замена</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="expansion" id="expansion" />
                          <Label htmlFor="expansion" className="flex-1 cursor-pointer">Расширение</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="season" id="season" />
                          <Label htmlFor="season" className="flex-1 cursor-pointer">Сезон</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reportsTo">Кому подчиняется</Label>
                      <Input 
                        id="reportsTo" 
                        placeholder="Мастер/начальник участка / главный инженер / директор по производству" 
                        value={formData.reportsTo || ''} 
                        onChange={(e) => handleChange('reportsTo', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>В подчинении (если есть)</Label>
                      <RadioGroup value={formData.subordinates} onValueChange={(value) => handleChange('subordinates', value)}>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="none" id="subNone" />
                          <Label htmlFor="subNone" className="flex-1 cursor-pointer">Нет</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="up5" id="sub5" />
                          <Label htmlFor="sub5" className="flex-1 cursor-pointer">До 5</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="5-15" id="sub5-15" />
                          <Label htmlFor="sub5-15" className="flex-1 cursor-pointer">5–15</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="15+" id="sub15+" />
                          <Label htmlFor="sub15+" className="flex-1 cursor-pointer">15+</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Обязанности */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-gray-900 text-[24px] font-semibold">4. Обязанности</h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="responsibilities">Основные задачи (3–7 пунктов)</Label>
                      <Textarea 
                        id="responsibilities" 
                        placeholder="1. Бурение скважин на горизонтах&#10;2. Контроль качества бурения&#10;3. ..." 
                        value={formData.responsibilities || ''} 
                        onChange={(e) => handleChange('responsibilities', e.target.value)} 
                        rows={5} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="responsibility">Зона ответственности по технике/участку/смене</Label>
                      <Textarea 
                        id="responsibility" 
                        placeholder="Участок №3, смена А, техника CAT 345, БелАЗ 75131..." 
                        value={formData.responsibility || ''} 
                        onChange={(e) => handleChange('responsibility', e.target.value)} 
                        rows={3} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="software">Отчетность/ПО (если применяется)</Label>
                      <Input 
                        id="software" 
                        placeholder="Micromine / Surpac / 1С / Excel / иное" 
                        value={formData.software || ''} 
                        onChange={(e) => handleChange('software', e.target.value)} 
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Оборудование и технологии */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <h2 className="text-gray-900 text-[24px] font-semibold">5. Оборудование и технологии</h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="equipment">Оборудование/марки</Label>
                      <Input 
                        id="equipment" 
                        placeholder="CAT / Komatsu / Hitachi / БелАЗ / Sandvik / Epiroc / иное" 
                        value={formData.equipment || ''} 
                        onChange={(e) => handleChange('equipment', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="machines">Типы машин/станков</Label>
                      <Input 
                        id="machines" 
                        placeholder="Экскаватор / буровые станки / самосвалы / дробильно-сортировочное / насосы / КИПиА" 
                        value={formData.machines || ''} 
                        onChange={(e) => handleChange('machines', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="skills">Навыки/допуски по технике</Label>
                      <Textarea 
                        id="skills" 
                        placeholder="Смена РК / ремонт/ТО / диагностика / ППР / сварка / иное" 
                        value={formData.skills || ''} 
                        onChange={(e) => handleChange('skills', e.target.value)} 
                        rows={3} 
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6: Требования к кандидату */}
              {currentStep === 6 && (
                <div className="space-y-6">
                  <h2 className="text-gray-900 text-[24px] font-semibold">6. Требования к кандидату</h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="education">Образование</Label>
                      <Input 
                        id="education" 
                        placeholder="Профильное среднее / среднее проф. / высшее (специальность)" 
                        value={formData.education || ''} 
                        onChange={(e) => handleChange('education', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Стаж по должности (от ___ лет минимум)</Label>
                      <Input 
                        id="experience" 
                        type="number" 
                        placeholder="3" 
                        value={formData.experience || ''} 
                        onChange={(e) => handleChange('experience', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="certificates">Обязательные удостоверения/свидетельства</Label>
                      <Textarea 
                        id="certificates" 
                        placeholder="По профессии / охрана труда / электробезопасность (группа) / работы на высоте / взрывные работы / стропальщик / допуск к горным работам / иное" 
                        value={formData.certificates || ''} 
                        onChange={(e) => handleChange('certificates', e.target.value)} 
                        rows={3} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="license">Водительское удостоверение</Label>
                      <Select value={formData.license} onValueChange={(value) => handleChange('license', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите категорию" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">Не требуется</SelectItem>
                          <SelectItem value="B">B</SelectItem>
                          <SelectItem value="C">C</SelectItem>
                          <SelectItem value="CE">CE</SelectItem>
                          <SelectItem value="other">Иное</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="medical">Мед. требования/противопоказания</Label>
                      <Textarea 
                        id="medical" 
                        placeholder="Медосмотр / психиатрическое освидетельствование / северные ограничения / нет" 
                        value={formData.medical || ''} 
                        onChange={(e) => handleChange('medical', e.target.value)} 
                        rows={2} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="citizenship">Гражданство</Label>
                      <Input 
                        id="citizenship" 
                        placeholder="РФ / ЕАЭС (Казахстан, Киргизия, Армения, Беларусь) / иные страны" 
                        value={formData.citizenship || ''} 
                        onChange={(e) => handleChange('citizenship', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="language">Язык/коммуникации</Label>
                      <Input 
                        id="language" 
                        placeholder="Русский обязателен / базовый русский OK / иное" 
                        value={formData.language || ''} 
                        onChange={(e) => handleChange('language', e.target.value)} 
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 7: Портрет и приоритеты */}
              {currentStep === 7 && (
                <div className="space-y-6">
                  <h2 className="text-gray-900 text-[24px] font-semibold">7. Портрет и приоритеты</h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="mustHave">Must‑have (3–5 пунктов)</Label>
                      <Textarea 
                        id="mustHave" 
                        placeholder="1. Опыт работы на оборудовании CAT&#10;2. Допуск к горным работам&#10;3. ..." 
                        value={formData.mustHave || ''} 
                        onChange={(e) => handleChange('mustHave', e.target.value)} 
                        rows={4} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="niceToHave">Nice‑to‑have (2–3 пункта)</Label>
                      <Textarea 
                        id="niceToHave" 
                        placeholder="1. Опыт работы в Якутии&#10;2. Знание Micromine&#10;3. ..." 
                        value={formData.niceToHave || ''} 
                        onChange={(e) => handleChange('niceToHave', e.target.value)} 
                        rows={3} 
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>Компромиссы допустимы</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <Checkbox id="compExp" checked={!!formData.compExp} onCheckedChange={(checked) => handleChange('compExp', checked)} />
                          <Label htmlFor="compExp" className="flex-1 cursor-pointer">Стаж −1–2 года</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <Checkbox id="compRegion" checked={!!formData.compRegion} onCheckedChange={(checked) => handleChange('compRegion', checked)} />
                          <Label htmlFor="compRegion" className="flex-1 cursor-pointer">Другой регион</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <Checkbox id="compCert" checked={!!formData.compCert} onCheckedChange={(checked) => handleChange('compCert', checked)} />
                          <Label htmlFor="compCert" className="flex-1 cursor-pointer">Без части удостоверений с дообучением</Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="redFlags">Красные флаги</Label>
                      <Textarea 
                        id="redFlags" 
                        placeholder="Частые увольнения / алкоголь / нарушения ТБ / судимости / иное" 
                        value={formData.redFlags || ''} 
                        onChange={(e) => handleChange('redFlags', e.target.value)} 
                        rows={2} 
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 8: Условия и компенсация */}
              {currentStep === 8 && (
                <div className="space-y-6">
                  <h2 className="text-gray-900 text-[24px] font-semibold">8. Условия и компенсация</h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="paymentModel">Модель оплаты</Label>
                      <Input 
                        id="paymentModel" 
                        placeholder="Ставка за смену ₽ / оклад ₽ + премии / сдельная" 
                        value={formData.paymentModel || ''} 
                        onChange={(e) => handleChange('paymentModel', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>Северные/районные коэффициенты</Label>
                      <RadioGroup value={formData.coefficients} onValueChange={(value) => handleChange('coefficients', value)}>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="included" id="coefIncluded" />
                          <Label htmlFor="coefIncluded" className="flex-1 cursor-pointer">Включены</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="onTop" id="coefOnTop" />
                          <Label htmlFor="coefOnTop" className="flex-1 cursor-pointer">Сверху</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="na" id="coefNa" />
                          <Label htmlFor="coefNa" className="flex-1 cursor-pointer">Не применяются</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bonuses">Премии/надбавки</Label>
                      <Input 
                        id="bonuses" 
                        placeholder="За выработку / КТУ / разъездной / вредность / иное" 
                        value={formData.bonuses || ''} 
                        onChange={(e) => handleChange('bonuses', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>Межвахтовые выплаты</Label>
                      <RadioGroup value={formData.interShiftPayments} onValueChange={(value) => handleChange('interShiftPayments', value)}>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="yes" id="ispYes" />
                          <Label htmlFor="ispYes" className="flex-1 cursor-pointer">Да</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="no" id="ispNo" />
                          <Label htmlFor="ispNo" className="flex-1 cursor-pointer">Нет</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="results" id="ispResults" />
                          <Label htmlFor="ispResults" className="flex-1 cursor-pointer">По результатам</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="compensations">Компенсации</Label>
                      <Textarea 
                        id="compensations" 
                        placeholder="Перелет/билеты / багаж / спецодежда / ДМС / связь / суточные" 
                        value={formData.compensations || ''} 
                        onChange={(e) => handleChange('compensations', e.target.value)} 
                        rows={2} 
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>Испытательный срок</Label>
                      <RadioGroup value={formData.probation} onValueChange={(value) => handleChange('probation', value)}>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="none" id="probNone" />
                          <Label htmlFor="probNone" className="flex-1 cursor-pointer">Нет</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="1" id="prob1" />
                          <Label htmlFor="prob1" className="flex-1 cursor-pointer">1 мес</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="2" id="prob2" />
                          <Label htmlFor="prob2" className="flex-1 cursor-pointer">2 мес</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="3" id="prob3" />
                          <Label htmlFor="prob3" className="flex-1 cursor-pointer">3 мес</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="startDate">Дата готовности оффера/выхода</Label>
                      <Input 
                        id="startDate" 
                        placeholder="Оффер до 01.01.2026, выход 15.01.2026" 
                        value={formData.startDate || ''} 
                        onChange={(e) => handleChange('startDate', e.target.value)} 
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 9: Процесс подбора и согласовани�� */}
              {currentStep === 9 && (
                <div className="space-y-6">
                  <h2 className="text-gray-900 text-[24px] font-semibold">9. Процесс подбора и согласования (SLA)</h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="stages">Этапы подбора</Label>
                      <Textarea 
                        id="stages" 
                        placeholder="Резюме → техинтервью → интервью с руководителем → оффер → медосмотр → выезд" 
                        value={formData.stages || ''} 
                        onChange={(e) => handleChange('stages', e.target.value)} 
                        rows={2} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="techInterview">Техинтервью</Label>
                      <Textarea 
                        id="techInterview" 
                        placeholder="Кто проводит (ФИО, должность), доступные окна (дни/часы)" 
                        value={formData.techInterview || ''} 
                        onChange={(e) => handleChange('techInterview', e.target.value)} 
                        rows={2} 
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>Формат интервью</Label>
                      <RadioGroup value={formData.interviewFormat} onValueChange={(value) => handleChange('interviewFormat', value)}>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="phone" id="intPhone" />
                          <Label htmlFor="intPhone" className="flex-1 cursor-pointer">Телефон</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="video" id="intVideo" />
                          <Label htmlFor="intVideo" className="flex-1 cursor-pointer">Видео</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="inPerson" id="intInPerson" />
                          <Label htmlFor="intInPerson" className="flex-1 cursor-pointer">Очно в городе сбора</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="onSite" id="intOnSite" />
                          <Label htmlFor="intOnSite" className="flex-1 cursor-pointer">На площадке</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <Checkbox id="refCheck" checked={!!formData.refCheck} onCheckedChange={(checked) => handleChange('refCheck', checked)} />
                      <Label htmlFor="refCheck" className="flex-1 cursor-pointer">Проверка рекомендаций требуется</Label>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="test">Тест/кейс/практика (если есть)</Label>
                      <Textarea 
                        id="test" 
                        placeholder="Описание теста, длительность" 
                        value={formData.test || ''} 
                        onChange={(e) => handleChange('test', e.target.value)} 
                        rows={2} 
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>Сроки обратной связи по шорт‑листу</Label>
                      <RadioGroup value={formData.feedbackTime} onValueChange={(value) => handleChange('feedbackTime', value)}>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="24h" id="fb24" />
                          <Label htmlFor="fb24" className="flex-1 cursor-pointer">24 ч</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="48h" id="fb48" />
                          <Label htmlFor="fb48" className="flex-1 cursor-pointer">48 ч</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="72h" id="fb72" />
                          <Label htmlFor="fb72" className="flex-1 cursor-pointer">72 ч</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="offerApprover">Кто утверждает ЗП и условия</Label>
                      <Input 
                        id="offerApprover" 
                        placeholder="ФИО, должность" 
                        value={formData.offerApprover || ''} 
                        onChange={(e) => handleChange('offerApprover', e.target.value)} 
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 10: Риски и конкурентность */}
              {currentStep === 10 && (
                <div className="space-y-6">
                  <h2 className="text-gray-900 text-[24px] font-semibold">10. Риски и конкурентность</h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="previousAttempts">Ранее пробовали закрывать?</Label>
                      <Textarea 
                        id="previousAttempts" 
                        placeholder="Где искали: hh / соцсети / рекомендации / агентства. Почему не закрыли: вилка ЗП / график / быт / удаленность / требования" 
                        value={formData.previousAttempts || ''} 
                        onChange={(e) => handleChange('previousAttempts', e.target.value)} 
                        rows={3} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="competitors">Конкуренты за тех же кандидатов (компании/регионы)</Label>
                      <Textarea 
                        id="competitors" 
                        placeholder="ООО «Полюс», Республика Саха, ГОК «Восток»..." 
                        value={formData.competitors || ''} 
                        onChange={(e) => handleChange('competitors', e.target.value)} 
                        rows={2} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="selling">Чем "продаем" вакансию</Label>
                      <Textarea 
                        id="selling" 
                        placeholder="Новое оборудование / стабильный сезон / премии / короткая ротация / карьерный рост / обучен��е" 
                        value={formData.selling || ''} 
                        onChange={(e) => handleChange('selling', e.target.value)} 
                        rows={3} 
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 11: Юридические и миграционные моменты */}
              {currentStep === 11 && (
                <div className="space-y-6">
                  <h2 className="text-gray-900 text-[24px] font-semibold">11. Юридические и миграционные моменты</h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="contractType">Тип договора</Label>
                      <Input 
                        id="contractType" 
                        placeholder="Бессрочный / срочный / сезонный / ГПХ (обоснование)" 
                        value={formData.contractType || ''} 
                        onChange={(e) => handleChange('contractType', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-3">
                      <Label>Миграционный учет и жилье для иногородних/��ностранцев</Label>
                      <RadioGroup value={formData.migration} onValueChange={(value) => handleChange('migration', value)}>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="full" id="migFull" />
                          <Label htmlFor="migFull" className="flex-1 cursor-pointer">Обеспечиваем</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="partial" id="migPartial" />
                          <Label htmlFor="migPartial" className="flex-1 cursor-pointer">Частично</Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <RadioGroupItem value="no" id="migNo" />
                          <Label htmlFor="migNo" className="flex-1 cursor-pointer">Нет</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalChecks">Необходимы доп. согласия/проверки</Label>
                      <Textarea 
                        id="additionalChecks" 
                        placeholder="Служба безопасности / режимный объект / медосмотр до оффера" 
                        value={formData.additionalChecks || ''} 
                        onChange={(e) => handleChange('additionalChecks', e.target.value)} 
                        rows={2} 
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 12: KPI подбора и условия сотрудничества */}
              {currentStep === 12 && (
                <div className="space-y-6">
                  <h2 className="text-gray-900 text-[24px] font-semibold">12. KPI подбора и условия сотрудничества</h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="targetTime">Целевой срок закрытия</Label>
                      <Input 
                        id="targetTime" 
                        placeholder="___ дней/недель" 
                        value={formData.targetTime || ''} 
                        onChange={(e) => handleChange('targetTime', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="shortlist">Шорт‑лист (кол-во релевантных кандидатов в первой волне)</Label>
                      <Input 
                        id="shortlist" 
                        type="number" 
                        placeholder="5" 
                        value={formData.shortlist || ''} 
                        onChange={(e) => handleChange('shortlist', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="warranty">Гарантийный период замены (дней)</Label>
                      <Input 
                        id="warranty" 
                        type="number" 
                        placeholder="90" 
                        value={formData.warranty || ''} 
                        onChange={(e) => handleChange('warranty', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Бюджет/комиссия агентства</Label>
                      <Input 
                        id="budget" 
                        placeholder="% от месячного дохода / фикс ₽; предоплата ___%; оплата: по выходу / по этапам" 
                        value={formData.budget || ''} 
                        onChange={(e) => handleChange('budget', e.target.value)} 
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 13: Материалы для запуска */}
              {currentStep === 13 && (
                <div className="space-y-6">
                  <h2 className="text-gray-900 text-[24px] font-semibold">13. Материалы для запуска</h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="jd">JD/описание должности (если есть)</Label>
                      <Textarea 
                        id="jd" 
                        placeholder="Вставьте текст описания должности или укажите, что приложите отдельно" 
                        value={formData.jd || ''} 
                        onChange={(e) => handleChange('jd', e.target.value)} 
                        rows={4} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="media">Фото/видео быта и техники</Label>
                      <Input 
                        id="media" 
                        placeholder="Ссылка на файлы (Яндекс.Диск, Google Drive и т.п.)" 
                        value={formData.media || ''} 
                        onChange={(e) => handleChange('media', e.target.value)} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="vacancyText">Текст вакансии/брендовые тезисы</Label>
                      <Textarea 
                        id="vacancyText" 
                        placeholder="Можно упоминать бренд? Особые требования к формулировкам?" 
                        value={formData.vacancyText || ''} 
                        onChange={(e) => handleChange('vacancyText', e.target.value)} 
                        rows={3} 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="templates">Док‑шаблоны</Label>
                      <Input 
                        id="templates" 
                        placeholder="Оффер, согласие на ПДн, пропускной режим (если релевантно)" 
                        value={formData.templates || ''} 
                        onChange={(e) => handleChange('templates', e.target.value)} 
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Назад
                </Button>

                {currentStep < totalSteps ? (
                  <RedButton
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-2"
                  >
                    Далее
                    <ChevronRight className="h-4 w-4" />
                  </RedButton>
                ) : (
                  <RedButton
                    type="button"
                    onClick={handleNext}
                  >
                    Отправить бриф
                  </RedButton>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
