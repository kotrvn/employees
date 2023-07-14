import { Employee } from '@prisma/client'
import { api } from './api'



export const employeesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllEmployees: builder.query<Employee[], void>({
            query: () => ({
                url: '/employees',
                metod: 'GET'
            })
        }),
        getEmployee: builder.query<Employee, string>({
            query: (id) => ({
                url: `/employees/${id}`,
                metod: 'GET'
            })
        }),
        editEmployee: builder.mutation<string, Employee>({
            query: (employee) => ({
                url: `/employees/edit${employee.id}`,
                metod: 'PUT'
            })
        }),
        removeEmployee: builder.mutation<string, string>({
            query: (id) => ({
                url: `/employees/delete${id}`,
                metod: 'PUT',
                body: { id }
            })
        }),
        addEmployee: builder.mutation<Employee, Employee>({
            query: (employee) => ({
                url: '/employees/add',
                method: 'POST',
                body: employee
            })
        })
    })
})

export const { 
    useGetAllEmployeesQuery, 
    useGetEmployeeQuery, 
    useEditEmployeeMutation, 
    useRemoveEmployeeMutation, 
    useAddEmployeeMutation 
} = employeesApi


export const { endpoints: { getAllEmployees, getEmployee, editEmployee, removeEmployee, addEmployee }} = employeesApi
