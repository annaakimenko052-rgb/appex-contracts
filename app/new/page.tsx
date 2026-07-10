'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Send, FileText, TrendingUp, Globe, Target } from 'lucide-react'

const CONTRACT_TYPES = [
  {
    id: 'smm',
    title: 'SMM-продвижение',
    description: 'Управление соцсетями, контент-планы, публикации',
    icon: Send,
    docs: ['Договор', 'Приложение 1', 'Акт', 'Счет', 'Доп. соглашение']
  },
  {
    id: 'seo',
    title: 'SEO-продвижение',
    description: 'Оптимизация сайта, позиции, наращивание ссылок',
    icon: TrendingUp,
    docs: ['Договор', 'Приложение 1', 'Чек-лист', 'Акт', 'Счет', 'Доп. соглашение']
  },
  {
    id: 'website',
    title: 'Разработка сайта',
    description: 'Дизайн, верстка, программирование, запуск проекта',
    icon: Globe,
    docs: ['Договор', 'Календарный план', 'ТЗ', 'Акт', 'Счет', 'Доп. соглашение']
  },
  {
    id: 'ads',
    title: 'Таргетированная реклама',
    description: 'Meta Ads, Google Ads, TikTok, Яндекс Директ',
    icon: Target,
    docs: ['Договор', 'Приложение 1', 'Чек-лист', 'Акт', 'Счет', 'Доп. соглашение']
  }
]

export default function NewContract() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [selectedType, setSelectedType] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* Header */}
      <header className="bg-white border-b border-[#E2E5EA]">
        <div className="max-w-[1200px] mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#0A0A0B] rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 6 Q12 5 16 6 L16 12 Q12 13 8 12 Z" fill="none" stroke="#F23B30" strokeWidth="2"/>
                <circle cx="12" cy="7" r="1" fill="white"/>
              </svg>
            </div>
            <div>
              <h1 className="text-[19px] font-bold text-[#0A0A0B] tracking-tight leading-tight">Contract Builder</h1>
              <p className="text-[13.5px] text-[#6B6E74]">by Appex.by</p>
            </div>
          </div>
          <Link
            href="/"
            className="text-[16px] text-[#6B6E74] hover:text-[#0A0A0B] transition-colors"
          >
            История договоров
          </Link>
        </div>
      </header>

      {/* Stepper */}
      <div className="bg-white border-b border-[#E2E5EA]">
        <div className="max-w-[1200px] mx-auto px-8 py-8">
          <div className="flex items-center justify-center space-x-12">
            <div className="flex items-center space-x-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[16px] font-bold ${
                step >= 1 ? 'bg-[#F23B30] text-white' : 'bg-[#EEF0F3] text-[#9A9DA3]'
              }`}>
                1
              </div>
              <span className={`text-[16px] font-bold ${
                step >= 1 ? 'text-[#0A0A0B]' : 'text-[#9A9DA3]'
              }`}>Тип</span>
            </div>
            <div className={`w-24 h-px ${
              step >= 2 ? 'bg-[#F23B30]' : 'bg-[#E2E5EA]'
            }`} />
            <div className="flex items-center space-x-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[16px] font-bold ${
                step >= 2 ? 'bg-[#F23B30] text-white' : 'bg-[#EEF0F3] text-[#9A9DA3]'
              }`}>
                2
              </div>
              <span className={`text-[16px] font-bold ${
                step >= 2 ? 'text-[#0A0A0B]' : 'text-[#9A9DA3]'
              }`}>Данные</span>
            </div>
            <div className={`w-24 h-px ${
              step >= 3 ? 'bg-[#F23B30]' : 'bg-[#E2E5EA]'
            }`} />
            <div className="flex items-center space-x-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[16px] font-bold ${
                step >= 3 ? 'bg-[#F23B30] text-white' : 'bg-[#EEF0F3] text-[#9A9DA3]'
              }`}>
                3
              </div>
              <span className={`text-[16px] font-bold ${
                step >= 3 ? 'text-[#0A0A0B]' : 'text-[#9A9DA3]'
              }`}>Готово</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-[38px] font-bold text-[#0A0A0B] mb-4 tracking-tight leading-tight">
            Создание нового договора
          </h2>
          <p className="text-[19px] text-[#6B6E74]">
            Шаг 1: выбор типа договора
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CONTRACT_TYPES.map((contract) => {
            const Icon = contract.icon
            return (
              <button
                key={contract.id}
                onClick={() => setSelectedType(contract.id)}
                className="bg-white border border-[#E2E5EA] rounded-[12px] p-8 text-left hover:shadow-[0_6px_20px_rgba(16,18,22,0.08)] transition-all"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[#EEF0F3] rounded-[6px] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#0A0A0B]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[19px] font-bold text-[#0A0A0B] mb-2">
                      {contract.title}
                    </h3>
                    <p className="text-[16px] text-[#6B6E74]">
                      {contract.description}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[12px] font-bold text-[#9A9DA3] uppercase tracking-[0.16em] mb-3">
                    ДОКУМЕНТЫ
                  </p>
                  <ul className="space-y-2">
                    {contract.docs.map((doc, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1 h-1 rounded-full bg-[#F23B30]" />
                        <span className="text-[16px] text-[#34363A]">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <div className="w-full py-3 px-6 bg-[#F23B30] hover:bg-[#D92C22] rounded-[999px] text-white text-[16px] font-bold text-center transition-colors">
                    Выбрать
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </main>
    </div>
  )
}
