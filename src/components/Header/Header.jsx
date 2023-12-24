import { Navbar, Nav, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ROUTE, STRING } from '../../config';

const Header = () => {
  const router = useRouter();

  const handleRoute=(route)=>{
    (route===ROUTE.LOGIN)&&router.push(route);
  }
  return (
   <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">{STRING.APP_NAME}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto justify-content-end">
      <Nav.Link onClick={() => handleRoute(ROUTE.TODO)}>Todos</Nav.Link>
      <Nav.Link onClick={() => handleRoute(ROUTE.LOGIN)}>Logout</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
};

export default Header;
