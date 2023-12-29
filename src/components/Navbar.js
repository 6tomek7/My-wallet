import IconWalletAlt from "../assets/IconWalletAlt";
import UserNavbarSection from "./UserNavbarSection";
import "./Navbar.css";
const Navbar = ({ setContent }) => {
  const handleButtonClick = (componentName) => {
    setContent(componentName);
  };
  return (
    <div className="border rounded-bottom d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <h1 className="d-flex align-items-center">
          <IconWalletAlt className="pt-1" />
          My wallet
        </h1>
        <nav className="ms-1 ps-1">
          <button className="nav-buttons">Expenses</button>
          <button
            className="nav-buttons"
            onClick={() => handleButtonClick("income")}
          >
            Income
          </button>
          <button
            className="nav-buttons"
            onClick={() => handleButtonClick("statistics")}
          >
            Statistic
          </button>
        </nav>
      </div>
      <UserNavbarSection />
    </div>
  );
};

export default Navbar;
