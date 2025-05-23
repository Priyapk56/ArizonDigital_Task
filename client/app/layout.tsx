import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Company from '@/components/Company';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const robotoSlab = Roboto_Slab({
//   subsets: ['latin'],
//   weight: ['400', '500', '700'], 
//   variable: '--font-roboto-slab',
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

export const metadata = {
  title: 'Quality Bearings Online',
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en"className={oswald.className}>

//       <body className="font-roboto-slab">{children}</body>
//     </html>
//   );
// }
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={oswald.className}>
      <body className="font-roboto-slab flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Company /> {/* or <Company /> */}
      </body>
    </html>
  );
}




