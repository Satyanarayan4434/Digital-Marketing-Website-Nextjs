'use client';

import { Toaster } from 'sonner';

export const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"
      theme="light"
      richColors
      closeButton
      visibleToasts={3}
      expand={true}
    />
  );
};