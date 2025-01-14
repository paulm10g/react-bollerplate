import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import './app.css';
import Home from './home/home.tsx';
import { Route } from 'react-router-dom';
import TodoPage from './todo/todo-page.tsx';
import CoreLayout from './core/layout/core-layout.tsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CoreLayout />}>
            <Route index element={<Home />} />
            <Route path='todo' element={<TodoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
