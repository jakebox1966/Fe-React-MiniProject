import React from 'react'
import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline,
} from 'react-icons/md'
import './TodoListItem.scss'
const TodoListItem = ({ todo }) => {
    // TodoListItem Component 에서 받아온 Todo값에 따라 UI 구성
    const { text, checked } = todo
    return (
        <div className="TodoListItem">
            <div
                className={
                    checked
                        ? 'checkbox checked'
                        : 'checkbox'
                }>
                {checked ? (
                    <MdCheckBox />
                ) : (
                    <MdCheckBoxOutlineBlank />
                )}
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}

export default TodoListItem
