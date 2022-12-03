import React, { createContext, useContext, useState } from 'react';

import { iChildrenProp } from './types';

export const SidebarContext = createContext({
  mobileNavsidebar: false,
  setMobileNavsidebar: (mobileNavsidebar: boolean) => {},
});

export const SidebarProvider = ({ children }: iChildrenProp) => {
  const [mobileNavsidebar, setMobileNavsidebar] = useState<boolean>(false);

  return (
    <SidebarContext.Provider
      value={{
        mobileNavsidebar,
        setMobileNavsidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
