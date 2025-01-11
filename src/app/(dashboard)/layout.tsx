"use client";
import React from "react";
import SideNav from "@/components/ui/SideNav";
import { navOptions } from "@/components/ui/common/navOptions";
import Header from "@/components/ui/Header";
import Modal from "@/components/ui/Modal";
import { StoreProvider } from "../store/storeContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StoreProvider>
        <Modal />
        <main className="flex min-h-screen w-full flex-col bg-muted/40 overflow-hidden relative">
          <Header />
          <SideNav options={navOptions} />
          <div className="flex flex-col">{children}</div>
        </main>
      </StoreProvider>
    </>
  );
}
