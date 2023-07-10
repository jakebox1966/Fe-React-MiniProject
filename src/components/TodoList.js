import React from 'react'
import TodoListItem from './TodoListItem'
import './TodoList.scss'

// App Component에서 전달된 props 를 TodoItem으로 변환하여 렌더링
const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {/*
      - props로 받아 온 todos 배열을 배열 내장 함수 map을 통해
        TodoListItem으로 이루어진 배열로 변환하여 렌더링
      - todo데이터는 통째로 props로 전달 => 성능 최적화 편리
      */}
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList
