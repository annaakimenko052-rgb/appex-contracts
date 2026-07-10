// Реквизиты исполнителя (фиксированные)
export const EXECUTOR = {
  name: 'ООО «Аппекс Медиа»',
  short_name: 'ООО «АППЕКС МЕДИА»',
  unp: '193978372',
  director_name: 'Христианов Д.А.',
  director_full_name: 'Христианов Дмитрий Александрович',
  director_position: 'директор',
  basis: 'на основании Устава',
  legal_address: '220030, г. Минск, ул. Ленина, 1а, офис 301',
  bank_account: 'BY00PJCB00000000000000000000',
  bank_name: 'ОАО «Паритетбанк»',
  bank_bic: 'PJCBBY2X',
  bank_address: '220029, г. Минск, ул. Мясникова, 32',
  phone: '+375 (29) 000-00-00',
  email: 'info@appex.media',
  website: 'appex.media',
  city: 'г. Минск',
} as const

export type Executor = typeof EXECUTOR
