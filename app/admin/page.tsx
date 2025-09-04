import Script from 'next/script';

export default function AdminPage() {
  return (
    <html>
      <head>
        <title>Content Manager – S82</title>
        <Script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js" strategy="afterInteractive" />
        <link href="/admin/config.yml" type="text/yaml" rel="cms-config-url" />
      </head>
      <body>
        <p style={{ padding: 40, fontFamily: 'sans-serif' }}>
          Decap CMS loading… if you see a blank page please enable JavaScript.
        </p>
      </body>
    </html>
  );
}