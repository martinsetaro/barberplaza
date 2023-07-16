import './globals.css';





export const metadata = {
  title:"Barber Plaza",
  icons: {
    icon: '/static/logooficial.png',
  },
}

export default function RootLayout({ children}) {
  return (
    <html lang="en">
    
      <body
      suppressHydrationWarning={true} 
      >{children}
      <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XJQTMDLY80"></script>
     <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());

        gtag('config', 'G-XJQTMDLY80');
</script>
      </body>
    </html>
  )
}
