import { User } from '@prisma/client';
import { api } from './api'

export type UserData = Omit<User, 'id'>

type ResponsLogInData =  User & { token: string };

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ResponsLogInData, UserData>({
            query: (userData) => ({
                url: '/user/login',
                method: 'POST',
                body: userData,
            }),
        }),
        register: builder.mutation<ResponsLogInData, UserData>({
            query: (userData) => ({
                url: '/user/register',
                method: 'POST',
                body: userData,
            }),
        }),
        current: builder.query<ResponsLogInData, void>({
            query: (userData) => ({
                url: '/user/current',
                method: 'GET',
            }),
        })
    })
})


export const { useLoginMutation, useRegisterMutation, useCurrentQuery } = authApi

export const { endpoints: { login, register, current } } = authApi;