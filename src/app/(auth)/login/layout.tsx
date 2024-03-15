export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <p>Layout Login ne</p>
      {children}
    </main>
  );
}
