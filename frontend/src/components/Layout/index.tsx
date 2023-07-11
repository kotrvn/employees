import { Header } from '../Header';
import styles from './index.module.css'
import {Layout as AntLayout } from 'antd';

export type LayoutProps = {
    children: React.ReactNode
}

export const Layout = ({ children } : LayoutProps) => {
  return (
    <div className={styles.main}>
        <Header />
        <AntLayout.Content style={{ height: '100%'}}>
        {children}
        </AntLayout.Content>
    </div>
  )
}
