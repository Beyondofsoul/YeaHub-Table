import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { appRouter } from './appRouter';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './appStore';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>,
);
