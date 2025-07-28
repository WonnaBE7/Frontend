export function formatDateLabel(dateStr: string): string {
  const monthOnly = /^\d{4}-\d{2}$/
  if (monthOnly.test(dateStr)) {
    return `${String(Number(dateStr.split('-')[1]))}월 `
  }

  return '오늘'
}

export function formatDateToKoreanMonth(dateStr: string): string {
  const [year, month] = dateStr.split('-')
  return `${year}년 ${parseInt(month)}월`
}