import React, { ReactNode } from 'react';
import Header from '../components/Header';

interface IProps {
  children: ReactNode
}

export default function MainLayout({ children }: IProps) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
