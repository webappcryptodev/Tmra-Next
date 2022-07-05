import { useAppSelector } from '@redux/hooks';
import { readAuthFromLocalStorage } from '@redux/slices/auth/authSlice';
import { useAppDispatch } from '@redux/hooks';
import { ReactNode, useEffect } from 'react';
import { readCurrentUserFromLocalStorage } from '@redux/slices/currentUser/currentUserSlice';

function FusionAuthProvider({ children }: { children: ReactNode }): JSX.Element {
  const currentUser = useAppSelector(state => state.currentUser);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(readAuthFromLocalStorage(undefined));
    dispatch(readCurrentUserFromLocalStorage(undefined));
  }, [dispatch]);
  useEffect(() => {
    console.debug('Current FusionAuth user is', currentUser);
  }, [currentUser]);
  return <>{children}</>;
}

export { FusionAuthProvider };
