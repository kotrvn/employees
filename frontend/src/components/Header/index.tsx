import { LoginOutlined, LogoutOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Space, Typography } from 'antd';
import { CustomButton } from '../CustomButton'
import { Link, useNavigate } from 'react-router-dom';
import { Paths } from '../../paths';

import styles from './index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/auth/authSlice';

export const Header = () => {

  const user = useSelector(selectUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogoutClick = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    navigate(Paths.login)
  }

  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to={Paths.home}>
          <CustomButton type='ghost'>
            <Typography.Title className={styles.title} level={1}>Сотрудники</Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      {
        user ? (
          <CustomButton type='ghost' icon={<LogoutOutlined />} onClick={onLogoutClick}>
            Выйти
          </CustomButton>
        ) : (
          <Space>
            <Link to={Paths.register}>
              <CustomButton type='ghost' icon={<UserOutlined />}>Зарегистрироваться</CustomButton>
            </Link>
            <Link to={Paths.login}>
              <CustomButton type='ghost' icon={<LoginOutlined />}>Войти</CustomButton>
            </Link>
          </Space>
        )
      }

    </Layout.Header>
  )
}
