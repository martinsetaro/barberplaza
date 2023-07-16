import './globals.css'
import GoogleAnalytics from '@bradgarropy/next-google-analytics';



export const metadata = {
  title:"Barber Plaza",
  icons: {
    icon: '/static/logooficial.png',
  },

  

  
}

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <head>
         <GoogleAnalytics measurementId='G-XJQTMDLY80'/>
      </head>
     
      <body
      suppressHydrationWarning={true} 
      >{children}
      </body>
    </html>
  )
}
