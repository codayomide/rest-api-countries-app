import Header from '@components/Header';
import '@styles/globals.css'
import React from 'react';
import ThemeContext from './providers';

export const metadata = {
  title: "Rest Countries App",
  description: "This is a project from frontend mentor"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main className="app">
          <ThemeContext>{children}</ThemeContext>
        </main>
      </body>
    </html>
  );
}

export default RootLayout;