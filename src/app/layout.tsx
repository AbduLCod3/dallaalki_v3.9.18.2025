import "./styles/layoutv2.scss";
import Navbar from "../components/Navbar";

export const metadata = { title: "Dallaalkii.com" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <Navbar />
          <main>{children}</main>
          <footer>© {new Date().getFullYear()} Dallaalkii</footer>
        </div>
      </body>
    </html>
  );
}
