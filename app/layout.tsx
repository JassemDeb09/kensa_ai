import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/contexts/LanguageContext'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KENSA AI - Strategic Artificial Intelligence',
  description: 'Turn your vision into reality with strategic artificial intelligence. Enterprise AI solutions with guaranteed ROI in under 6 months.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-poppins`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}