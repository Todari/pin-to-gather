import type {Metadata} from 'next';
import localFont from 'next/font/local';

import ClientProvider from './ClientProvider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: '핀투게더',
  description: '함께보는 지도, 함께하는 순간',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
