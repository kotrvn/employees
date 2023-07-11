import { Button, Form } from 'antd'
import React from 'react'


type СustomButtonProps = {
    children: React.ReactNode;
    htmlType?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed" | undefined;
    danger?: boolean;
    loading?: boolean;
    shape?: "default" | "circle" | "round" | undefined;
    icon?: React.ReactNode;
}


export const CustomButton = ({ children, htmlType = 'button', type, danger, loading, shape, icon, onClick }: СustomButtonProps) => {
    return (
        <Form.Item>
            <Button 
                htmlType={htmlType}
                type={type}
                danger={danger}
                loading={loading}
                shape={shape}
                icon={icon}
                onClick={onClick}
            >{children}</Button>
        </Form.Item>

    )
}
