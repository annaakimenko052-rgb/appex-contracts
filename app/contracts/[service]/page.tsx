'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'

const SERVICE_CONFIG = {
  smm: {
    title: 'SMM-продвижение',
    description: 'Управление социальными сетями, контент-планы, публикации'
  },
  seo: {
    title: 'SEO-продвижение',
    description: 'Комплексная оптимизация сайта, позиции, наращивание ссылок'
  },
  website: {
    title: 'Разработка сайта',
    description: 'Дизайн, верстка, программирование, запуск проекта'
  },
  ads: {
    title: 'Таргетированная реклама',
    description: 'Meta Ads, Google Ads, TikTok, Яндекс Директ'
  }
}

export default function ContractPage() {
  const params = useParams()
  const router = useRouter()
  const service = params.service as string
  const config = SERVICE_CONFIG[service as keyof typeof SERVICE_CONFIG]

  const [formData, setFormData] = useState({
    contractType: 'договор',
    clientName: '',
    clientCompany: '',
    clientAddress: '',
    clientUNP: '',
    executorName: 'Индивидуальный предприниматель Кименко Анна Михайловна',
    formData: ''
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  if (!config) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Тип договора не найден</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            Вернуться на главную
          </Link>
        </div>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const data = {
      ...formData,
      contractType: service,
      docType: formData.contractType
    }

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (result.success) {
        setMessage('Данные договора подготовлены! ' + result.message)
      } else {
        setMessage('Ошибка: ' + (result.error || 'Неизвестная ошибка'))
      }
    } catch (error) {
      setMessage('Ошибка при отправке данных')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-blue-400 hover:text-blue-300 mb-6 inline-block">
          ← Назад к выбору
        </Link>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-white mb-2">{config.title}</h1>
          <p className="text-gray-300 mb-8">{config.description}</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white mb-2">Тип документа</label>
              <select
                value={formData.contractType}
                onChange={(e) => setFormData({ ...formData, contractType: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="договор" className="text-black">Договор</option>
                <option value="приложение" className="text-black">Приложение</option>
                <option value="акт" className="text-black">Акт</option>
                <option value="счет" className="text-black">Счет</option>
                <option value="доп_соглашение" className="text-black">Доп. соглашение</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">Имя клиента *</label>
              <input
                type="text"
                required
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Иванов Иван Иванович"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Название компании</label>
              <input
                type="text"
                value={formData.clientCompany}
                onChange={(e) => setFormData({ ...formData, clientCompany: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="ООО 'Компания'"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Адрес</label>
              <input
                type="text"
                value={formData.clientAddress}
                onChange={(e) => setFormData({ ...formData, clientAddress: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="г. Минск, ул. Примерная, д. 1"
              />
            </div>

            <div>
              <label className="block text-white mb-2">УНП</label>
              <input
                type="text"
                value={formData.clientUNP}
                onChange={(e) => setFormData({ ...formData, clientUNP: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="123456789"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Дополнительная информация</label>
              <textarea
                value={formData.formData}
                onChange={(e) => setFormData({ ...formData, formData: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Укажите особые условия, сроки, стоимость и другие детали..."
              />
            </div>

            {message && (
              <div className={`p-4 rounded-lg ${
                message.includes('Ошибка') 
                  ? 'bg-red-500/20 text-red-200 border border-red-500/50' 
                  : 'bg-green-500/20 text-green-200 border border-green-500/50'
              }`}>
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? 'Подготовка...' : 'Подготовить договор'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
