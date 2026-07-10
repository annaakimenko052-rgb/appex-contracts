'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FileText, TrendingUp, Globe, Target, Clock, CheckCircle } from 'lucide-react'

const CONTRACT_TYPES = [
  {
    id: 'smm',
    title: 'SMM-продвижение',
    description: 'Управление социальными сетями, контент-планы, публикации',
    icon: FileText,
    color: 'bg-gradient-to-br from-purple-500 to-pink-500',
    docs: ['Договор', 'Приложение 1', 'Акт', 'Счет', 'Доп. соглашение']
  },
  {
    id: 'seo',
    title: 'SEO-продвижение',
    description: 'Комплексная оптимизация сайта, позиции, наращивание ссылок',
    icon: TrendingUp,
    color: 'bg-gradient-to-br from-green-500 to-teal-500',
    docs: ['Договор', 'Приложение 1', 'Чек-лист', 'Акт', 'Счет', 'Доп. соглашение']
  },
  {
    id: 'website',
    title: 'Разработка сайта',
    description: 'Дизайн, верстка, программирование, запуск проекта',
    icon: Globe,
    color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    docs: ['Договор', 'Календарный план', 'ТЗ', 'Акт', 'Счет', 'Доп. соглашение']
  },
  {
    id: 'ads',
    title: 'Таргетированная реклама',
    description: 'Meta Ads, Google Ads, TikTok, Яндекс Директ',
    icon: Target,
    color: 'bg-gradient-to-br from-orange-500 to-red-500',
    docs: ['Договор', 'Приложение 1', 'Чек-лист', 'Акт', 'Счет', 'Доп. соглашение']
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16">
                <svg viewBox="0 0 1200 1200" className="w-full h-full">
                  <path d="M400 300 Q600 250 800 300 L800 600 Q600 650 400 600 Z" 
                    fill="none" stroke="#06B6D4" strokeWidth="40" className="animate-pulse"/>
                  <path d="M450 350 Q550 320 650 350 L650 550 Q550 580 450 550 Z" 
                    fill="none" stroke="#EC4899" strokeWidth="30"/>
                  <circle cx="550" cy="370" r="10" fill="white"/>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">APPEX.MEDIA</h1>
                <p className="text-sm text-gray-300">Конструктор договоров</p>
              </div>
            </div>
            <Link 
              href="/history" 
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-2"
            >
              <Clock className="w-5 h-5" />
              <span>История договоров</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Аппекс Медиа — Конструктор договоров
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Быстрая подготовка документов для менеджера по продажам
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <h3 className="text-lg font-semibold text-white">Быстро</h3>
            </div>
            <p className="text-gray-300">Генерация договора за пару минут</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-3">
              <CheckCircle className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Удобно</h3>
            </div>
            <p className="text-gray-300">Простой интерфейс без лишних действий</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-3">
              <CheckCircle className="w-6 h-6 text-purple-400" />
              <h3 className="text-lg font-semibold text-white">Надежно</h3>
            </div>
            <p className="text-gray-300">Все данные защищены и сохраняются</p>
          </div>
        </div>

        {/* Contract Types */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Выберите тип договора
          </h3>
          <p className="text-gray-300 text-center mb-12">
            После выбора вы заполните данные клиента и скачаете готовые DOCX-файлы
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTRACT_TYPES.map((type) => {
              const Icon = type.icon
              return (
                <Link
                  key={type.id}
                  href={`/contracts/${type.id}`}
                  className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className={`${type.color} p-8 h-full`}>
                    <div className="relative z-10">
                      <Icon className="w-12 h-12 text-white mb-4" />
                      <h4 className="text-xl font-bold text-white mb-2">{type.title}</h4>
                      <p className="text-white/90 text-sm mb-4">{type.description}</p>
                      
                      <div className="space-y-1">
                        {type.docs.map((doc, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-white/80 text-xs">
                            <CheckCircle className="w-3 h-3" />
                            <span>{doc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>© 2026 Appex Media. Все права защищены.</p>
            <p className="mt-2 text-sm">
              Email: <a href="mailto:support@appex.media" className="text-blue-400 hover:text-blue-300">support@appex.media</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
