import React from 'react'
import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline,
} from 'react-icons/md'
import './TodoListItem.scss'
const TodoListItem = ({ todo, onRemove, onToggle }) => {
    // TodoListItem Component 에서 받아온 Todo값에 따라 UI 구성
    const { id, text, checked } = todo
    return (
        <div className="TodoListItem">
            <div
                className={
                    checked
                        ? 'checkbox checked'
                        : 'checkbox'
                }
                onClick={() => onToggle(id)}>
                {checked ? (
                    <MdCheckBox />
                ) : (
                    <MdCheckBoxOutlineBlank />
                )}
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline
                    onClick={() => onRemove(id)}
                />
            </div>
        </div>
    )
}

export default React.memo(TodoListItem)
