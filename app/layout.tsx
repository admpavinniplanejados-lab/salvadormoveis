import './globals.css';

export const metadata = {
  title: 'Salvador Móveis | E-commerce institucional',
  description: 'Catálogo, login, rastreamento e administração da Salvador Móveis.',
  icons: {
    icon: '/favicon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: '#004791',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Salvador Móveis',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
