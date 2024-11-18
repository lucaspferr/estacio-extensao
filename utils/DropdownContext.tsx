import React, { createContext, useContext, useState, ReactNode } from "react";

interface DropdownContextType {
  expandAll: boolean;
  expandByType: (type: "Table" | "Graph", expand: boolean) => void;
  expandedTypes: Record<string, boolean>;
}

const DropdownContext = createContext<DropdownContextType>({
  expandAll: false,
  expandByType: () => {},
  expandedTypes: {},
});

export const DropdownProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [expandAll, setExpandAll] = useState(false);
  const [expandedTypes, setExpandedTypes] = useState<Record<string, boolean>>({
    Table: false,
    Graph: false,
  });

  const expandByType = (type: "Table" | "Graph", expand: boolean) => {
    setExpandedTypes((prev) => ({ ...prev, [type]: expand }));
  };

  return (
    <DropdownContext.Provider
      value={{ expandAll, expandByType, expandedTypes }}
    >
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdownContext = () => useContext(DropdownContext);
