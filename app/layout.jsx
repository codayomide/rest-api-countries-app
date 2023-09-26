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
      <ThemeContext>
        <body className="bg-neutralWhite dark:bg-dmBgVeryDarkBlue">
          <Header />
          <main className="app">
            {children}
          </main>
        </body>
      </ThemeContext>
    </html>
  );
}

export default RootLayout;