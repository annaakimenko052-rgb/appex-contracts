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
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12">
                <svg viewBox="0 0 1200 1200" className="w-full h-full" width="48" height="48">
                  <path d="M400 300 Q600 250 800 300 L800 600 Q600 650 400 600 Z" fill="none" stroke="#06B6D4" strokeWidth="40" className="animate-pulse"/>
                  <path d="M450 350 Q550 320 650 350 L650 550 Q550 580 450 550 Z" fill="none" stroke="#EC4899" strokeWidth="30"/>
                  <circle cx="550" cy="370" r="10" fill="white"/>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">APPEX.MEDIA</h1>
                <p className="text-xs text-gray-300">Конструктор договоров</p>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Быстро</h3>
            <p className="text-gray-300">Генерация договора за пару минут</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <CheckCircle className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Удобно</h3>
            <p className="text-gray-300">Простой интерфейс без лишних действий</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <CheckCircle className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Надежно</h3>
            <p className="text-gray-300">Все данные защищены и сохраняются</p>
          </div>
        </div>

        {/* Contract Types */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Выберите тип договора</h3>
          <p className="text-gray-300 text-lg">
            После выбора вы заполните данные клиента и скачаете готовые DOCX-файлы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {CONTRACT_TYPES.map((contract) => {
            const Icon = contract.icon
            return (
              <Link
                key={contract.id}
                href={`/contracts/${contract.id}`}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${contract.color} p-4 rounded-xl`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {contract.title}
                    </h4>
                    <p className="text-gray-300 mb-4">{contract.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {contract.docs.map((doc, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-200"
                        >
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2026 Appex Media. Все права защищены.</p>
          <p className="mt-2">Email: <a href="mailto:support@appex.media" className="text-blue-400 hover:text-blue-300">support@appex.media</a></p>
        </div>
      </footer>
    </div>
  )
}
