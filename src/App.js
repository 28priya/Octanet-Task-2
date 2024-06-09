import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
`;

const TodoApp = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 100%;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
  color: #333;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Input = styled.input`
  width: calc(100% - 22px);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TodoItem = styled.li`
  padding: 15px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #f0f0f0;
    transform: scale(1.02);
  }
`;

const DeleteButton = styled.button`
  background: linear-gradient(135deg, #ff6a6a 0%, #ee5253 100%);
  color: #fff;
  border: none;
  padding: 7px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: linear-gradient(135deg, #ee5253 0%, #ff6a6a 100%);
    transform: scale(1.1);
  }
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <TodoApp>
        <Title>To-Do List</Title>
        <form onSubmit={addTodo}>
          <Input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
          />
        </form>
        <TodoList>
          {todos.map((todo, index) => (
            <TodoItem key={index}>
              {todo}
              <DeleteButton onClick={() => removeTodo(index)}>Delete</DeleteButton>
            </TodoItem>
          ))}
        </TodoList>
      </TodoApp>
    </Container>
  );
}

export default App;
