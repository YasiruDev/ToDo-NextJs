import { Modal, Button } from 'react-bootstrap';

function TodoDetailsModal(props) {
  const { show, handleClose, todo } = props;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Todo Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Title:</strong> {todo.title}</p>
        <p><strong>ToDo ID:</strong> {todo.userId}</p>
        <p><strong>User ID:</strong> {todo.userId}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TodoDetailsModal;
