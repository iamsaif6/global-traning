import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import Script from 'next/script';
import UserbackComponent from '@/component/UserbackComponent';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Mediation Training',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Script src="https://cdn.botpress.cloud/webchat/v2.4/inject.js" strategy="afterInteractive"></Script>
        <Script src="https://files.bpcontent.cloud/2025/05/20/09/20250520093739-YCHB89K8.js" strategy="afterInteractive"></Script>
        <Navbar />
        {children}
        <UserbackComponent apiKey="A-toB4qf6TlycGzt55mrEgeMRHe" />
        <Footer />
      </body>
    </html>
  );
}
