export const metadata = { title: "Dallaalkii.com" };
import "./layout.scss";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/buy">Buy</a>
            <a href="/rent">Rent</a>
            <a href="/agents">Agents</a>
            <a href="/developers">Developers</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} Dallaalkii</footer>
      </body>
    </html>
    </div>

  );
}
