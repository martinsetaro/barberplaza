import './globals.css'



export const metadata = {
  title:"Barber Plaza",
  icons: {
    icon: '/_next/static/media/logooficial.ico',
  },
  
}

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
