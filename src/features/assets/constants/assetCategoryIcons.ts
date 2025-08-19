import { Wallet, PiggyBank, TrendingUp, Shield, MoreHorizontal, Coins  } from 'lucide-vue-next'

export const assetCategoryIconMap: Record<string, any> = {
  checking: Wallet,
  savings: PiggyBank,
  investment: TrendingUp,
  insurance: Shield,
  pension: Coins,
  other: MoreHorizontal
}
