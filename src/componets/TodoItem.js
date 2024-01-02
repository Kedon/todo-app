import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import './TodoItem.scss';

export default function TodoItem({
    item,
    toggleDoneTodo,
    handleRemoveTodo
}){

    return (
        <div className="todo-item-ui">
            <Checkbox
                onChange={() => toggleDoneTodo(item)}
                checked={item.done} />
        <div className={`task ${item.done ? "done" : ""}`}>{item.task}</div>
        <Button
            onClick={() => handleRemoveTodo(item)}
            size="small"
            label="remover"
            severity="danger"
            />
        </div>
    )
}