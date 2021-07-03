import React from 'react';

import { ToastProvider } from './toast';

export const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    {children}
  </ToastProvider>
);
