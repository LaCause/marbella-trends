export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 bg-gray-800 text-white">
        <h1>Public Header</h1>
      </header>
      <main className="flex-1 p-4">{children}</main>
      <footer className="p-4 bg-gray-200 text-center">
        <p>Public Footer</p>
      </footer>
    </div>
  );
}
