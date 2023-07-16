import { Layout } from '../../components/Layout'
import { Card, Form, Row, Space, Typography } from 'antd'
import { CustomInput } from '../../components/CustomInput'
import { PasswordInput } from '../../components/PasswordInput'
import { CustomButton } from '../../components/CustomButton'
import { Link, useNavigate } from 'react-router-dom'
import { Paths } from '../../paths'
import { useRegisterMutation } from '../../app/services/auth'
import { User } from '@prisma/client'
import { useState } from 'react'
import { isErrorWithMessage } from '../../utils/isErrorWithMessage'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/auth/authSlice'
import { ErrorMessage } from '../../components/ErrorMessage'


type RegisterData = Omit<User, 'id'> & { confirmPasseword: string}
export const Register = () => {

    const navigate = useNavigate()

    const user = useSelector(selectUser)

    const [error, setError] = useState('');

    const [ registerUser ] = useRegisterMutation()


    const register = async (user: RegisterData) => {

        try {
            await registerUser(user)
            navigate(`${Paths.status}/success`)
        } catch (err) {
            const mayBeError = isErrorWithMessage(err)

            if (mayBeError) {
              setError(err.data.message)
            } else {
              setError('Неизвестная ошибка')
            }
        }
    }


    return (
        <Layout>
            <Row align={'middle'} justify={'center'}>
                <Card title={'Зарегистрируйтесь'} style={{ width: '30rem' }}>
                    <Form onFinish={register}>
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
                        <ErrorMessage message={error} />
                    </Space>
                </Card>
            </Row>
        </Layout>

    )
}
