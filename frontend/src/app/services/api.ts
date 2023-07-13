import { BaseQueryFn, EndpointDefinitions, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { RetryOptions } from '@reduxjs/toolkit/dist/query/retry';

const baseQuery = fetchBaseQuery({
    // baseUrl: 'http/localhost:3000/api',
    // prepareHeaders: (headers, { getState }) => {
    //     const token = (getState() as RootState).auth
    // }

});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 })

export const api = createApi({
    reducerPath: 'splitApi',
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: true,
    endpoints: () => ({}),
})




