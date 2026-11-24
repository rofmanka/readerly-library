import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Readerly — ваша книжная библиотека",
  description: "Личная библиотека, книжные полки и читательское сообщество."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
