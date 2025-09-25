import "./styles/layout_v2.scss";
import Navbar from "../components/navBar/Navbar";

export const metadata = {
  title: "Dallaalkii.com",
  description: "Your trusted real estate platform",
};

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
