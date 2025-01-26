import { ThemeProvider } from "../themeContext/ThemeContext";
import { AuthProvider } from "../AuthContext/AuthContext";

export function ContextProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      {
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      }
    </>
  );
}
