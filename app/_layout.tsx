import { Stack } from "expo-router";
import { DropdownProvider } from "@/utils/DropdownContext";

export default function Layout() {
  return (
    <DropdownProvider>
      <Stack />
    </DropdownProvider>
  );
}
