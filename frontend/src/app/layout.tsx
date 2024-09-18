import type { Metadata } from 'next';
// import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Disclosure, DisclosurePanel, DisclosureButton } from '@headlessui/react';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import cx from 'classnames';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const navigation = [
  { name: '商品の販売', href: '/payments' },
  { name: 'サブスクリプション', href: '/billing' },
  { name: 'マーケットプレイス', href: '/connect' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='light' enableColorScheme={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
