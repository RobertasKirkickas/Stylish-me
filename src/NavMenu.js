import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

function NavMenu() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Link to="/" className="nav-link">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/profile" className="nav-link">Profile</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/shopping" className="nav-link">Shopping</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/legal" className="nav-link">Legal</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/interest-calculator" className="nav-link">Interest Calculator</Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavMenu;
