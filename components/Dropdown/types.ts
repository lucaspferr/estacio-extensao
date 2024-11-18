import React from "react";

export interface DropdownProps {
  label: string;
  type: "Table" | "Graph";
  children: React.ReactNode;
}
