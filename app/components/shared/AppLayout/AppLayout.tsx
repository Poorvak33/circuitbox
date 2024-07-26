"use client";

import React, { ReactNode } from "react";
import { AppShell } from "@mantine/core";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AppShell
      layout="default"
      header={{ height: 72 }}
      footer={{ height: 64 }}
      padding="md"
    >
      <AppShell.Header p="md">
        <Header />
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer p="md">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
};

export default Layout;
