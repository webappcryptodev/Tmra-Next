import React, { ReactElement } from 'react';
import { render as baseRender, RenderOptions, RenderResult } from '@testing-library/react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from '@redux/store';

/**
 * Custom renderer example with @testing-library/react
 * You can customize it to your needs.
 *
 * To learn more about customizing renderer,
 * please visit https://testing-library.com/docs/react-testing-library/setup
 */

export const AllTheProviders = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>{children}</Provider>
      </QueryClientProvider>
    </>
  );
};

const render = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  baseRender(ui, {
    wrapper: AllTheProviders as any,
    ...options,
  }) as RenderResult;

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
