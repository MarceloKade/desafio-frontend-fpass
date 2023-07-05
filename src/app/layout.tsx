import './globals.css'
import StyledComponentsRegistry from '@/registry'
import { Anton } from 'next/font/google'

const bebas = Anton({ subsets: ['latin'], weight: "400", variable: '--font-bebas' })

export const metadata = {
  title: 'desafio-frontend-fpass',
  description: 'Esse aplicativo faz parte do desafio de Front-end da empresa Fpass. O objetivo é listar os heróis da marvel, pesquisar pelo nome e obter a descrição de cada um deles ao seleciona-lo, utilizando a api Marvel Developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${bebas.className} font-sans`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}