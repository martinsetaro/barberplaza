import './globals.css'
import GoogleAnalytics from '@bradgarropy/next-google-analytics/dist/types/components/GoogleAnalytics/GoogleAnalytics'



export const metadata = {
  title:"Barber Plaza",
  icons: {
    icon: '/static/logooficial.png',
  },

  

  
}

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <GoogleAnalytics measurementId='G-XJQTMDLY80'/>
      <body
      suppressHydrationWarning={true} 
      >{children}</body>
    </html>
  )
}
