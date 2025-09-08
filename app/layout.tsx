/* eslint-disable @next/next/no-sync-scripts */
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'S82 Studio | Architecture & Design',
  description: 'Creating exceptional architectural experiences that blend innovation with timeless design principles.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Netlify Identity widget */}
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </head>
      <body className={inter.className}>
        {children}
         {/* Auto-redirect helper */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on('init', user => {
                  if (!user) window.netlifyIdentity.on('login', () => {
                    document.location.href = '/admin/';
                  });
                });
              }
            `,
          }}/>
      </body>
    </html>
  );
}