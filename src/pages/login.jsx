import { useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Button, Container } from 'react-bootstrap';

const LoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (username === 'admin' && password === 'admin') {
      router.push('/todo');
    } else {
      alert('Incorrect username or password. Please try again.');
    }
  };

  return (
    <Container className='container'>
      <h1 className='title'>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label className='label'>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={handleUsernameChange}
            className='input'
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className='label'>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className='label'
          />
        </Form.Group>

        <Button variant="primary" type="submit" block className='button'>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
