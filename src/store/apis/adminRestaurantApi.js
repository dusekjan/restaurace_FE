import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const adminRestaurantApi = createApi({
  reducerPath: 'adminRestaurant',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_ADDRESS
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
            credentials: process.env.NODE_ENV !== "production" ? "include" : "same-origin"
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
            credentials: process.env.NODE_ENV !== "production" ? "include" : "same-origin",
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
