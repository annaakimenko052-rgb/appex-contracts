import { NextRequest, NextResponse } from 'next/server'
import PizZip from 'pizzip'
import Docxtemplater from 'docxtemplater'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { EXECUTOR } from '@/config/executor'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { contractType, docType, formData } = body

    const templatePath = join(process.cwd(), 'templates', contractType, `${docType}.docx`)
    
    if (!existsSync(templatePath)) {
      return NextResponse.json({ error: `Шаблон не найден: ${contractType}/${docType}.docx` }, { status: 404 })
    }

    const content = readFileSync(templatePath, 'binary')
    const zip = new PizZip(content)
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    })

    const contractDate = formData.contract_date
      ? format(new Date(formData.contract_date), 'd MMMM yyyy', { locale: ru })
      : ''

    const templateData = {
      ...formData,
      contract_date_formatted: contractDate,
      // Реквизиты исполнителя (автоподстановка)
      executor_name: EXECUTOR.name,
      executor_unp: EXECUTOR.unp,
      executor_director_name: EXECUTOR.director_name,
      executor_director_full_name: EXECUTOR.director_full_name,
      executor_director_position: EXECUTOR.director_position,
      executor_basis: EXECUTOR.basis,
      executor_legal_address: EXECUTOR.legal_address,
      executor_bank_account: EXECUTOR.bank_account,
      executor_bank_name: EXECUTOR.bank_name,
      executor_bank_bic: EXECUTOR.bank_bic,
      executor_bank_address: EXECUTOR.bank_address,
      executor_phone: EXECUTOR.phone,
      executor_email: EXECUTOR.email,
      executor_city: EXECUTOR.city,
    }

    doc.render(templateData)

    const buf = doc.getZip().generate({ type: 'nodebuffer', compression: 'DEFLATE' })

    return new NextResponse(buf, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': `attachment; filename="${contractType}_${docType}_${formData.contract_number || 'draft'}.docx"`,
      },
    })
  } catch (error) {
    console.error('Generate error:', error)
    return NextResponse.json({ error: 'Ошибка генерации документа' }, { status: 500 })
  }
}
