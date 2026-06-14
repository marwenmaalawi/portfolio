import type { Metadata } from "next";
import { ThemeProvider } from "../../features/theme/ThemeContext";
import CustomCursor from "../../components/effects/CustomCursor";

export const metadata: Metadata = {
  title: "Mohamed Marwen Maalawi",
  description: "Senior Full-Stack Software Engineer",
};

export default function EntryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <CustomCursor />
      {children}
    </ThemeProvider>
  );
}
