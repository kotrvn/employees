import { Layout } from '../../components/Layout'
import { Card, Form, Row, Space, Typography } from 'antd'
import { CustomInput } from '../../components/CustomInput'
import { PasswordInput } from '../../components/PasswordInput'
import { CustomButton } from '../../components/CustomButton'
import { Link } from 'react-router-dom'
import { Paths } from '../../paths'

export const Register = () => {
  return (
    <Layout>
      <Row align={'middle'} justify={'center'}>
        <Card title={'Зарегистрируйтесь'} style={{ width: '30rem' }}>
          <Form onFinish={() => { }}>
            <CustomInput name='name' placeholder='Имя' />
            <CustomInput type="email" name='email' placeholder='Email' />
            <PasswordInput name={'password'} placeholder={'Пароль'} />
            <PasswordInput name={'confirmPassword'} placeholder={'Повторите пароль'} />
            <CustomButton type='primary' htmlType='submit' loading={false}>Зарегистрироваться</CustomButton>
          </Form>
          <Space direction={'vertical'} size={'large'}>
            <Typography.Text>
              Уже зарегистрированы? <Link to={Paths.login}>Войдите</Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>

  )
}
