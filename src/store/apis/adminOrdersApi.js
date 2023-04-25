import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const adminOrdersApi = createApi({
  reducerPath: 'adminOrders',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000'
  }),
  endpoints(builder) {
    return {
      changeStatus: builder.mutation({
        invalidatesTags: (result, error, order) => {
          return [{ type: "Order", id: order.id }];
        },
        query: (order) => {
          // order = {status: XY, id: ID}
          return {
            url: `/order/${order.id}/admin/`,
            method: 'PUT',
            credentials: 'include',
            body: {
              status: order.status,
            },
          };
        },
      }),
      fetchAdminDetailOrder: builder.query({
        query: (orderId) => {
          return {
            url: `/order/${orderId}/admin/`,
            method: 'GET',
            credentials: 'include'
          };
        },
      }),
      fetchAdminOrders: builder.query({
        providesTags: (result, error) => {
          if (!error) {
            return result.data.map((order) => {
              return {type: 'Order', id: order.id};
            });
          } else {
            return []
          }
        },
        query: () => {
          return {
            url: '/order/admin/',
            method: 'GET',
            credentials: 'include'
          };
        },
      }),
    };
  },
});

export const {
  useFetchAdminOrdersQuery,
  useFetchAdminDetailOrderQuery,
  useChangeStatusMutation
} = adminOrdersApi;
export { adminOrdersApi };
