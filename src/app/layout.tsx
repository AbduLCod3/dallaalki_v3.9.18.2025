import "./styles/layout_v2.scss";
import Navbar from "../components/navBar/Navbar";
import HomePage from "./HomePage";

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
          <div className="content">
            <HomePage />
          </div>

          {/* <main>{children}</main> */}
          <footer>© {new Date().getFullYear()} Dallaalkii</footer>
        </div>
      </body>
    </html>
  );
}
