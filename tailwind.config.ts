import type { Config } from 'tailwindcss'
import scrollbarHide from 'tailwind-scrollbar-hide'

export default {
  plugins: [scrollbarHide],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        h1: ['22px', '160%'],
        h2: ['22px', '160%'],
        h3: ['20px', '160%'],
        h4: ['20px', '120%'],
        subtitle: ['18px', '120%'],
        'body-lg-1': ['16px', '160%'],
        'body-lg-2': ['16px', '160%'],
        'body-lg-3': ['16px', '140%'],
        'body-lg-4': ['16px', '140%'],
        'body-lg-5': ['16px', '120%'],
        'body-lg-6': ['16px', '120%'],
        'body-1': ['14px', '140%'],
        'body-2': ['14px', '160%'],
        'body-3': ['14px', '140%'],
        'body-4': ['14px', '120%'],
        'body-5': ['14px', '120%'],
        'small-1': ['12px', '140%'],
        'small-2': ['12px', '140%'],
        'small-3': ['12px', '120%'],
        'small-4': ['12px', '120%'],
        'small-5': ['10px', '120%'],
        'small-6': ['10px', '120%']
      },
      fontWeight: {
        medium: '500',
        bold: '700'
      },
      fontFamily: {
        sans: ['Pretendard', 'ui-sans-serif', 'system-ui'],
        pretendard: ['Pretendard', 'sans-serif'],
      },
      colors: {
        gray:{
          50:'#F8F8F8',
          100:'#F2F2F2',
          150:'#E7E7E7',
          200:'#DADADA',
          300:'#CBCBCB',
          400:'#B3B3B3',
          500:'#868686',
          600:'#5A5A5A',
          800:'#343434',
          900:'#292929',
          BG : '#FDFDFD',
          BGDim:'#FAFAFA' 
        },
        kb:{
          yellow : '#FAB806',
          orange : '#F8A809',
          darkgray : '#4A483F',
          gray : '#6E6153',
          gold : '#816843',
          silver : '#848687',
        },
        sub:{
          yellow :{
            p :'#FFD400',
            s :'#FFD88C',
            c:'#FFE9BF',
            bg:'#FFF7E6'
          } 
        }
      },
    },
  },
} satisfies Config