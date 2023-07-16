import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/Layout'
import { CustomButton } from '../../components/CustomButton'
import { Row } from 'antd'
import { EmployeeForm } from '../../components/EmployeeForm'
import { error } from 'console'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/auth/authSlice'
import { useAddEmployeeMutation, useEditEmployeeMutation, useGetEmployeeQuery } from '../../app/services/employees'
import { Paths } from '../../paths'
import { Employee } from '@prisma/client'
import { isErrorWithMessage } from '../../utils/isErrorWithMessage'

export const EditEmployee = () => {
    const navigate = useNavigate()
    const params = useParams<{ id: string }>()
    const [error, setError] = useState('')
    const {data , isLoading} = useGetEmployeeQuery(params.id || '')
    const [editEmployee] = useEditEmployeeMutation()
    
    const handleEditEmployee = async (employee: Employee) => {
        try {
            const editedEmployee = {
                ...data,
                ...employee,
            }
            await editEmployee(editedEmployee).unwrap()
            navigate(`${Paths.status}/updated`)
        } catch (error) {
            const mayBeError = isErrorWithMessage(error)

            if (mayBeError) {
                setError(error.data.message)
            } else {
                setError('Неизвестаня ошибка')
            }
        }
    }

    if (isLoading) {
        return <span>Загрузка</span>
    }

    return (
        <Layout>
            <Row align={'middle'} justify={'center'}>
                <EmployeeForm
                    title='Редактировать сотрудника'
                    btnText='Сохранить'
                    onFinish={handleEditEmployee}
                    employee={data}
                    error={error}
                />
            </Row>
        </Layout>
    )

    

    

    
}
