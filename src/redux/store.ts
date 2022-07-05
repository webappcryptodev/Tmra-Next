import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from '@redux/slices/currentUser/currentUserSlice';
import authReducer from '@redux/slices/auth/authSlice';
import cartReducer from '@redux/slices/cart/cartSlice';
import organizationReducer from '@redux/slices/organization/organizationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    currentUser: currentUserReducer,
    cart: cartReducer,
    organization: organizationReducer,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
