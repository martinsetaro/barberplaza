import '../globals.css'




export const metadata = {
  title:"Login a cuenta",
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