import './globals.css'
import GoogleAnalytics from '@bradgarropy/next-google-analytics';
import Head from 'next/head'


export const metadata = {
  title:"Barber Plaza",
  icons: {
    icon: '/static/logooficial.png',
  },

  

  
}

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <Head>
         <GoogleAnalytics measurementId='G-XJQTMDLY80'/>
      </Head>
     
      <body
      suppressHydrationWarning={true} 
      >{children}
      </body>
    </html>
  )
}
