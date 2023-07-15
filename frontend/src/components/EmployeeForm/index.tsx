import { Employee } from '@prisma/client';
import { Card, Form, Space } from 'antd';
import React from 'react'
import { CustomInput } from '../CustomInput';
import { ErrorMessage } from '../ErrorMessage';
import { CustomButton } from '../CustomButton';

type EmployeeFormProps<T> = {
    onFinish: (values: T) => void;
    btnText: string;
    title: string;
    error?: string;
    employee?: T;
}

export const EmployeeForm = ({onFinish, btnText, title, error, employee}: EmployeeFormProps<Employee>) => {
  return (
    <Card title={title} style={{ width: '30rem'}}>
        <Form name='employee-form' onFinish={ onFinish } initialValues={ employee }>
            <CustomInput name={'firstName'} placeholder={'Имя'}  />
            <CustomInput name={'lastName'} placeholder={'Фамилия'}  />
            <CustomInput type='number'  name={'age'} placeholder={'Возраст'}  />
            <CustomInput name={'address'} placeholder={'Адрес'}  />
            <Space>
                <ErrorMessage message={error} />
                <CustomButton htmlType={'submit'}>{btnText}</CustomButton>
            </Space>
        </Form>

    </Card>
  )
}
