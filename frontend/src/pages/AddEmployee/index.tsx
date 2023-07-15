import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/Layout'
import { CustomButton } from '../../components/CustomButton'
import { Row } from 'antd'
import { EmployeeForm } from '../../components/EmployeeForm'
import { error } from 'console'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/auth/authSlice'
import { useAddEmployeeMutation } from '../../app/services/employees'
import { Paths } from '../../paths'
import { Employee } from '@prisma/client'
import { isErrorWithMessage } from '../../utils/isErrorWithMessage'

export const AddEmployee = () => {

    const [error, setError] = useState('')
    const navigate = useNavigate()

    const user = useSelector(selectUser)

    const [addEmployee] = useAddEmployeeMutation()

    const handleAddEmployee = async (data: Employee) => {
        try {
            await addEmployee(data).unwrap()
            navigate(`${Paths.status}/created`)
        } catch (error) {
            const mayBeError = isErrorWithMessage(error)

            if (mayBeError) {
                setError(error.data.message)
            } else {
                setError('Неизвестаня ошибка')
            }
        }
    }

    useEffect(() => {
        if (!user) {
            navigate(Paths.login)
        }
    }, [navigate, user])


    return (
        <Layout>
            <Row align={'middle'} justify={'center'}>
                <EmployeeForm
                    title='Добавить сотрудника'
                    btnText='Добавить'
                    onFinish={handleAddEmployee}
                    error={error}
                />
            </Row>
        </Layout>
    )
}
