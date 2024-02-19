import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
const inter = Inter({ subsets: ["latin"] });

//TODO: 动态的需要看一下，最好是静态的。
export const metadata: Metadata = {
  title: "HeyReal - Chat with AI Girlfriend Online",
  description: "Here, you can find your favorite AI characters, roleplay AI chatbots, anime AI chat, and more. Also, you can try to create your own AI characters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        {/* <nav>
        <Link href={'/dashboard'}>首页</Link>
          &nbsp;
          <Link href={'/list'}>列表</Link>
          &nbsp;
          <Link href={'/list/create'}>创建</Link>
          &nbsp;
          <Link href={'/about'}>关于我们</Link>
          &nbsp;
          <Link href={'/help'}>帮助</Link>
        </nav> */}

        {children}

      </body>
    </html>
  );
}
