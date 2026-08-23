import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  sidebarWidth?: "sm" | "md" | "lg";
  centered?: boolean;
}