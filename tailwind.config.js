/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'manrope':['Manrope'],
        'sohne-breit':['Sohne Breit'],
        'inter':['Inter'],
        'vietnam':['Be Vietnam Pro']
      },
      fontSize:{
        'display-7xl':['6.25rem', {
          lineHeight: '6.2438rem',
          letterSpacing: '-1.5%',
        }],
        'display-4xl':['2.5rem'],
      },
      maxWidth:{
        'xll':"74.5rem",
        76:'21.25rem'
      },
      colors:{
        brand:{
          black:"#181818",
          blue:{
            500:"#353857",
            600:"#202029",
          },
          cyan:"#A1AEBF",
          lilac:"#6B86E9",
          gray:'#D9D9D9',
          slate:'#D0C6C6'
        }
      },
      backgroundImage:{
        'base':"linear-gradient(91.42deg, #6686F6 1.67%, #72C4FF 59.32%)",
        'for-image':"linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
        'circle':"linear-gradient(157.09deg, #D9D9D9 -169.65%, rgba(217, 217, 217, 0) 53.9%)",
        'linear-blur':'linear-gradient(180deg, #6785F6 29.5%, #8236FE 79.5%)',
        'linear-blend':'linear-gradient(244.28deg, rgba(255, 82, 195, 0.05) -7.3%, rgba(20, 20, 20, 0.05) 74.35%)',
        'hunter-gr':"linear-gradient(90deg, #6A7DF7 61.75%, #7E41FD 82.13%)",
        'timeline':"linear-gradient(180deg, rgba(107, 134, 233, 0) 7.7%, rgba(107, 134, 233, 0.6) 14.29%, #6B86E9 48.88%, rgba(107, 134, 233, 0) 97.56%)"
      },
      boxShadow:{
        '4xl':"0px 4px 4px 0px #00000040",
        '5xl':"0px 4px 32px 0px #3E98FF"
      }
    },
  },
  plugins: [],
}


// background: linear-gradient(90deg, #6A7DF7 61.75%, #7E41FD 82.13%);
