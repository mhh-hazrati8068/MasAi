"use client";

import Header from "../Header";

const BaseNestedLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default BaseNestedLayout;
