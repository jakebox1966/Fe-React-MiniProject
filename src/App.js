import './App.css'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import { useCallback, useRef, useState } from 'react'

function App() {
    // useState를 사용 => todos 상태 정의 => todos를 TodoList의 props로 전달
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '리액트의 기초 알아보기',
            checked: true,
        },
        {
            id: 2,
            text: '컴포넌트 스타일링 해보기',
            checked: true,
        },
        {
            id: 3,
            text: '일정 관리 앱 만들어 보기',
            checked: true,
        },
    ])
    // - useRef를 사용하여 id 값 관리 => 단순참조 되는 값 (리렌더링 필요X)
    const nextId = useRef(4)

    // - onInsert 함수 작성(useCallback 사용 : props로 전달해야 할 함수를 만들때는 useCallback 사용 추천)
    const onInsert = useCallback(
        (text) => {
            const todo = {
                id: nextId.current,
                text,
                checked: false,
            }
            setTodos(todos.concat(todo))
            nextId.current += 1 // nextId 1씩 더하기
        },
        [todos],
    )

    // - filter 함수 사용하여 onRemove 함수 작성(useCallback 사용)
    const onRemove = useCallback(
        (id) => {
            setTodos(todos.filter((todo) => todo.id !== id))
        },
        [todos],
    )

    // - 수정 기능(checkBox control) => map 사용하여 불변성 유지하면서 특정 배열 원소 업데이트
    const onToggle = useCallback(
        (id) => {
            setTodos(
                todos.map((todo) =>
                    todo.id === id
                        ? {
                              ...todo,
                              checked: !todo.checked,
                          }
                        : todo,
                ),
            )
        },
        [todos],
    )
    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList
                todos={todos}
                onRemove={onRemove}
                onToggle={onToggle}
            />
        </TodoTemplate>
    )
}

export default App
