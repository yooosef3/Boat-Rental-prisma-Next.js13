'use client';

import React, { useEffect, useState } from 'react';

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ 
  children
}) => {
  const [Mounted, setMounted] = useState(false);

  useEffect(() => {
      setMounted(true);
  }, [])

  if (!Mounted) return null;

  return (
    <>
      {children}
    </>
  );
};

export default ClientOnly;