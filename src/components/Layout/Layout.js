import Nav from "../Nav/Nav";
import Styles from "./Layout.module.css";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <div className={Styles.layout}>
      <header className={Styles.header}>
        <div className={Styles.headerContent}>
          <div className={Styles.navContainer}>
            <Nav />
          </div>
        </div>
      </header>
      <main className={Styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
