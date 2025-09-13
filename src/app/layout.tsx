// app/layout.tsx (Next.js 13+ example)
import "@/styles/global.css";

export const metadata = {
  title: "JobFlow",
  description: "Job Application Management App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white">{children}</body>
    </html>
  );
}
