import React, { useCallback, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import './TodoInsert.scss'

// useState를 사용하여 TodoInsert Component에서 인풋에 입력하는 값을 관리
// input 관리하는 onchange 함수 작성 (useCallback Hook 사용)
const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('')
    const onChange = useCallback((e) => {
        setValue(e.target.value)
    }, [])

    /*
     * - onSubmit이벤트 설정
     * - TodoInsert에 넣어 준 onInsert 함수에 현재 useState를 통해 관리하고
     * 있는 value 값을파라미터로 넣어서 호출
     * */
    const onSubmit = useCallback(
        (e) => {
            onInsert(value)
            setValue('') //value 값 초기화
            // submit 이벤트는 브라우저에서 새로고침 발생 => e.preventDefault() 호출
            e.preventDefault()
        },
        [onInsert, value],
    )
    /*
     * - onClick 사용 시 => onKeyPress(Deprecated 됨) 로 Enter 감지 함수 작성 필요
     * - form + onSubmit 사용 시 => input에 Enter만 눌러도 submit 이벤트 발생
     * */

    return (
        <div>
            <form
                className="TodoInsert"
                onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="할 일을 입력하세요"
                    value={value}
                    onChange={onChange}
                />
                <button type="submit">
                    <MdAdd />
                </button>
            </form>
        </div>
    )
}

export default TodoInsert
