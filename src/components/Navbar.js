import IconWalletAlt from "../assets/IconWalletAlt";
import UserNavbarSection from "./UserNavbarSection";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="border rounded-bottom d-flex align-items-center">
      <h1 className="d-flex align-items-center">
        <IconWalletAlt className="pt-1" />
        My wallet
      </h1>
      <nav className="ms-1 ps-1">
        <button className="nav-buttons">Expenses</button>
        <button className="nav-buttons">Income</button>
        <button className="nav-buttons">Statistic</button>
      </nav>
      <UserNavbarSection />
    </div>
  );
};

export default Navbar;
