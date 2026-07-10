import { NextRequest, NextResponse } from 'next/server'
import { EXECUTOR } from '@/config/executor'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { contractType, docType, formData } = body

    // Подготовка данных договора
    const contractData = {
      ...formData,
      // Данные исполнителя
      executor: EXECUTOR,
      // Метаданные
      generatedAt: new Date().toISOString(),
      contractType,
      docType,
    }

    // Пока возвращаем JSON вместо DOCX
    // TODO: Добавить генерацию DOCX через другую библиотеку
    return NextResponse.json({
      success: true,
      message: 'Данные договора подготовлены',
      data: contractData,
    })
  } catch (error) {
    console.error('Generate error:', error)
    return NextResponse.json(
      { success: false, error: 'Ошибка подготовки договора' },
      { status: 500 }
    )
  }
}
