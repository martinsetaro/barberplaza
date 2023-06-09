import './globals.css'



export const metadata = {
  title:"Barber Plaza",
  icons: {
    icon: '/static/logooficial.png',
  },
  
}

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
