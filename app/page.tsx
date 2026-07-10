'use client'
import Link from 'next/link'
import { FileText, TrendingUp, Globe, Target, Plus, Clock } from 'lucide-react'

const CONTRACT_TYPES = [
  {
    id: 'smm',
    title: 'SMM-продвижение',
    description: 'Управление социальными сетями, контент-планы, публикации',
    icon: FileText,
    color: 'bg-purple-100 text-purple-700',
    docs: ['Договор', 'Приложение 1', 'Акт', 'Счет', 'Доп. соглашение']
  },
  {
    id: 'seo',
    title: 'SEO-продвижение',
    description: 'Комплексная оптимизация сайта, позиции, наращивание ссылок',
    icon: TrendingUp,
    color: 'bg-green-100 text-green-700',
    docs: ['Договор', 'Приложение 1', 'Чек-лист', 'Акт', 'Счет', 'Доп. соглашение']
  },
  {
    id: 'website',
    title: 'Разработка сайта',
    description: 'Дизайн, верстка, программирование, запуск проекта',
    icon: Globe,
    color: 'bg-blue-100 text-blue-700',
    docs: ['Договор', 'Календарный план', 'ТЗ', 'Акт', 'Счет', 'Доп. соглашение']
  },
  {
    id: 'ads',
    title: 'Таргетированная реклама',
    description: 'Meta Ads, Google Ads, TikTok, Яндекс Директ',
    icon: Target,
    color: 'bg-orange-100 text-orange-700',
    docs: ['Договор', 'Приложение 1', 'Чек-лист', 'Акт', 'Счет', 'Доп. соглашение']
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-900">Аппекс Медиа — Конструктор договоров</h1>
            <p className="text-sm text-slate-500">Быстрая подготовка документов для менеджера по продажам</p>
          </div>
          <Link href="/history" className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 bg-slate-100 px-3 py-2 rounded-lg">
            <Clock size={16} />
            История договоров
          </Link>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-slate-800 mb-2">Выберите тип договора</h2>
        <p className="text-slate-500 mb-8">После выбора вы заполните данные клиента и скачаете готовые DOCX-файлы</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CONTRACT_TYPES.map((type) => {
            const Icon = type.icon
            return (
              <Link key={type.id} href={`/contracts/${type.id}`} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-blue-300 transition-all group">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${type.color}`}>
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600">{type.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{type.description}</p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {type.docs.map(doc => (
                        <span key={doc} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{doc}</span>
                      ))}
                    </div>
                  </div>
                  <Plus size={20} className="text-slate-300 group-hover:text-blue-500 mt-1" />
                </div>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  )
}
