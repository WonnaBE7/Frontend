
export function formatKoreanMoney(amount: number): string {
    if (amount >= 100_000_000) {
      const 억 = Math.floor(amount / 100_000_000)
      const 만 = Math.floor((amount % 100_000_000) / 10_000)
      return `${억}억${만 > 0 ? ` ${만}만원` : ''}`
    } else if (amount >= 10_000) {
      return `${Math.floor(amount / 10_000)}만원`
    } else {
      return `${amount.toLocaleString()}원`
    }
  }