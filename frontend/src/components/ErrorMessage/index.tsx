import { Alert } from 'antd'
import React from 'react'

type ErrorMessageProps = {
    message?: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
    if (!message) {
        return null
    }
  return (
    <Alert message={message} type='error' />
  )
}
