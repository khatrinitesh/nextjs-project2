import React from 'react';
import Header from './header';
import Footer from './footer';

export default function RootLayout({ children }) {
    return (
        <>
        <Header/>
            <div className='main_content'>{children}</div>
        <Footer/>
        </>
    );
  }