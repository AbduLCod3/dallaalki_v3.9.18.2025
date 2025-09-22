//import "./styles/layout.scss";
import "./styles/layoutv2.scss";
import Image from "next/image";
import logo from "../../public/images/dallaalkii_logo_v6.1.png";
import menu from "../../public/images/menu.png";
export const metadata = { title: "Dallaalkii.com" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="layout">
      <html lang="en">
        <body>
          <header>
            <nav>
              <div className="left">
                <a href="/" className="logo">
                  <Image src={logo} alt="Dallaalkii Logo" />
                </a>
                <a href="/">Home</a>
                <a href="/buy">Buy</a>
                <a href="/rent">Rent</a>
                <a href="/agents">Agents</a>
                <a href="/developers">Developers</a>
              </div>
              <div className="right">
                <a href="/contact">Contact Us</a>
                <a href="/Login" className="login">
                  Login
                </a>
                <div className="menuIcon">
                  <Image src={menu} alt="Menu Icon" />
                </div>
                <div className="menu">
                  <a href="/">Home</a>
                  <a href="/buy">Buy</a>
                  <a href="/rent">Rent</a>
                  <a href="/agents">Agents</a>
                  <a href="/developers">Developers</a>
                  <a href="/contact">Contact Us</a>
                  <a href="/Login">Login</a>
                </div>
              </div>
            </nav>
          </header>
          <main>{children}</main>
          <footer>© {new Date().getFullYear()} Dallaalkii</footer>
        </body>
      </html>
    </div>
  );
}
