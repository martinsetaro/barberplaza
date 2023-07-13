import './globals.css'
import Head from 'next/head';



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
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-XJQTMDLY80"
  ></script>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XJQTMDLY80');
      `,
    }}
  ></script>
</Head>
      <body
      suppressHydrationWarning={true} 
      >{children}</body>
    </html>
  )
}
