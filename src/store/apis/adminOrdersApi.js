import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const adminOrdersApi = createApi({
  reducerPath: 'adminOrders',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_ADDRESS
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
            credentials: process.env.NODE_ENV !== "production" ? "include" : "same-origin",
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
            credentials: process.env.NODE_ENV !== "production" ? "include" : "same-origin"
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
            credentials: process.env.NODE_ENV !== "production" ? "include" : "same-origin"
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
