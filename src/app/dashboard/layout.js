import '../globals.css'




export const metadata = {
  title:"Dashboard usuario",
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
      </body>
    </html>
  )
}