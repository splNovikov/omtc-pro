import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    template: 'ОМТС ПРО',
    default: 'ОМТС ПРО - онлайн магазин специального оборудования и техники'
  },
  description: 'ОМТС ПРО - онлайн магазин специального оборудования и техники',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="ru" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
