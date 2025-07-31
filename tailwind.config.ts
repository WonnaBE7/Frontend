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
        // 160%
        'r-10-160': ['10px', { lineHeight: '160%' }],
        'r-12-160': ['12px', { lineHeight: '160%' }],
        'r-14-160': ['14px', { lineHeight: '160%' }],
        'r-16-160': ['16px', { lineHeight: '160%' }],
        'r-18-160': ['18px', { lineHeight: '160%' }],
        'r-20-160': ['20px', { lineHeight: '160%' }],
        'r-22-160': ['22px', { lineHeight: '160%' }],
        'r-24-160': ['24px', { lineHeight: '160%' }],
        'r-26-160': ['26px', { lineHeight: '160%' }],
        'r-28-160': ['28px', { lineHeight: '160%' }],
        'r-30-160': ['30px', { lineHeight: '160%' }],
        'r-32-160': ['32px', { lineHeight: '160%' }],
      
        // 140%
        'r-10-140': ['10px', { lineHeight: '140%' }],
        'r-12-140': ['12px', { lineHeight: '140%' }],
        'r-14-140': ['14px', { lineHeight: '140%' }],
        'r-16-140': ['16px', { lineHeight: '140%' }],
        'r-18-140': ['18px', { lineHeight: '140%' }],
        'r-20-140': ['20px', { lineHeight: '140%' }],
        'r-22-140': ['22px', { lineHeight: '140%' }],
        'r-24-140': ['24px', { lineHeight: '140%' }],
        'r-26-140': ['26px', { lineHeight: '140%' }],
        'r-28-140': ['28px', { lineHeight: '140%' }],
        'r-30-140': ['30px', { lineHeight: '140%' }],
        'r-32-140': ['32px', { lineHeight: '140%' }],
      
        // 120%
        'r-10-120': ['10px', { lineHeight: '120%' }],
        'r-12-120': ['12px', { lineHeight: '120%' }],
        'r-14-120': ['14px', { lineHeight: '120%' }],
        'r-16-120': ['16px', { lineHeight: '120%' }],
        'r-18-120': ['18px', { lineHeight: '120%' }],
        'r-20-120': ['20px', { lineHeight: '120%' }],
        'r-22-120': ['22px', { lineHeight: '120%' }],
        'r-24-120': ['24px', { lineHeight: '120%' }],
        'r-26-120': ['26px', { lineHeight: '120%' }],
        'r-28-120': ['28px', { lineHeight: '120%' }],
        'r-30-120': ['30px', { lineHeight: '120%' }],
        'r-32-120': ['32px', { lineHeight: '120%' }],
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
          },
          red:{
            p:'#EC6250',
            s:'#FFB5AB',
            c:'#FEE3E0',
            bg:'#FFF1EF',
          },
          aqua:{
            p:'#0098C2',
            s:'#AFEBFB',
            c:'#D2F4FD',
            bg:'#EEFBFF',
          },
          green:{
            p:'#51B910',
            s:'#96B881',
            c:'#BACEAD',
            bg:'#EFF9E9',
          },
          orange:{
            p:'#F59E0B',
            s:'#FFE1AD',
            c:'#FFEFD3',
            bg:'#FFF6E7',
          }
        }
      },
    },
  },
} satisfies Config