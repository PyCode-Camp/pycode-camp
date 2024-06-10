import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <main className="min-h-screen ">{children}</main>
    </>
  );
};

export default Layout;
