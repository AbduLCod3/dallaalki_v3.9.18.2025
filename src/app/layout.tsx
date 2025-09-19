import "./layout.scss";
import Image from "next/image";
import logo from "../../public/images/logo_v2.svg";
import logo1 from "../../public/images/logo_v0.png";
import logo2 from "../../public/images/dallaalkii_logo_v6.png";
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
                  <Image src={logo2} alt="Dallaalkii Logo" />
                </a>
                <a href="/">Home</a>
                <a href="/buy">Buy</a>
                <a href="/rent">Rent</a>
                <a href="/agents">Agents</a>
                <a href="/developers">Developers</a>
              </div>
              <div className="right">
                <a href="/contact">Contact Us</a>
                <a href="/Login">Login</a>
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
