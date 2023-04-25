import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const adminRestaurantApi = createApi({
  reducerPath: 'adminRestaurant',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000'
  }),
  endpoints(builder) {
    return {
      fetchRestaurantOpened: builder.query({
        providesTags: (result, error) => {
          if (!error) {
            return ["Restaurant"];
          } else {
            return []
          }
        },
        query: () => {
          return {
            url: '/restaurant-opened',
            method: 'GET',
            credentials: 'include'
          };
        },
      }),
      restaurantOpened: builder.mutation({
        invalidatesTags: (result, error) => {
          return ["Restaurant"];
        },
        query: (opened) => {
          return {
            url: `/restaurant-opened`,
            method: 'PUT',
            credentials: 'include',
            body: {
              opened: opened,
            },
          };
        }})
    };
  },
});

export const {
    useFetchRestaurantOpenedQuery,
    useRestaurantOpenedMutation
} = adminRestaurantApi;
export { adminRestaurantApi };
