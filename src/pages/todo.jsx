import { request } from '../config/action';
import { useState,useEffect } from 'react';
import { Button, Container, ListGroup, Modal, Pagination, Table } from 'react-bootstrap';
import { HOOK_ENDPOINTS, METHOD,PAGE_SIZE } from '../config';
import TodoDetailsModal from '../components/TodoModel';

const TodoApp = () => {
  const [todoList, setToDoList] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [todoDetails, setTodoDetails] = useState({});

  useEffect(() => {
  fetchData()
}, [currentPage]);

useEffect(() => {
   
  selectedTodo&&fetchSelectedData()
  
}, [selectedTodo]);

const fetchData =async ()=>{
  try {
    const data= await request(METHOD.GET,
      `${HOOK_ENDPOINTS.TODO}?_page=${currentPage}&_limit=${PAGE_SIZE}`)
    setToDoList(data)
  } catch (error) {
    
  }
}

const fetchSelectedData =async ()=>{
  try {
    const data= await request(METHOD.GET,
      `${HOOK_ENDPOINTS.TODO}/${selectedTodo}`)
      setTodoDetails(data)
    setShowDetails(true);
  } catch (error) {
    
  }
}

const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
};
const handleRowClick = (todoId) => {
  setSelectedTodo(todoId);
};


const handleCloseDetails = () => setShowDetails(false);

const pageCount = Math.ceil(200 / PAGE_SIZE); // assume total 200 todos
                                              // API response should provide total items count

  return (
    <Container className='container'>
      <h1 className='title'>Todos</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {todoList?.map((todo) => (
            <tr key={todo.id} onClick={() => handleRowClick(todo.id)}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {Array.from({ length: pageCount }).map((_, i) => (
          <Pagination.Item key={i} active={i + 1 === currentPage} 
          onClick={() => handlePageChange(i + 1)}>
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
      
      {todoDetails&&
      <TodoDetailsModal show={showDetails} handleClose={handleCloseDetails} todo={todoDetails} />}
    </Container>
  );
};

export default TodoApp;
