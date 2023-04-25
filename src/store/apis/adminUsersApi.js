import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const adminUsersApi = createApi({
  reducerPath: 'adminUsers',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000'
  }),
  endpoints(builder) {
    return {
      fetchAdminUsers: builder.query({
        providesTags: (result, error) => {
          if (!error) {
            return result.data.map((user) => {
              return {type: 'User', id: user.id};
            });
          } else {
            return []
          }
        },
        query: () => {
          return {
            url: '/user/admin/',
            method: 'GET',
            credentials: 'include'
          };
        },
      }),
      deleteUser: builder.mutation({
        invalidatesTags: (result, error, userId) => {
          return [{ type: "User", id: userId }];
        },
        query: (userId) => {
          return {
            url: `/user/${userId}/admin/`,
            method: 'DELETE',
            credentials: 'include'
          };
        }})
    };
  },
});

export const {
    useFetchAdminUsersQuery,
    useDeleteUserMutation
} = adminUsersApi;
export { adminUsersApi };
