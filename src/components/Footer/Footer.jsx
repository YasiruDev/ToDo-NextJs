import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container className="text-center my-3">
      <p>My ToDo &copy; {new Date().getFullYear()}</p>
    </Container>
  );
};

export default Footer;
