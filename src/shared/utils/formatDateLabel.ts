export function formatDateLabel(dateStr: string): string {
  const monthOnly = /^\d{4}-\d{2}$/
  if (monthOnly.test(dateStr)) {
    return `${String(Number(dateStr.split('-')[1]))}월 `
  }

  return '오늘'
}