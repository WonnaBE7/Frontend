import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
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
  plugins: [],
} satisfies Config