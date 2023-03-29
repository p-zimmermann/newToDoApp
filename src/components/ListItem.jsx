import {FcFullTrash} from 'react-icons/fc'
import Checkbox from '@mui/material/Checkbox';


const ListItem = ({setTodos, todos, text, id} ) => {
    const deleteTodo = (e) => {
        setTodos(todos.filter(todoEl => todoEl.id !== id ? todoEl : null));
    }
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <>
        
        <div className='list-item'> 
            <Checkbox {...label} /> 
            <li className='list-todo' id={id}>
                {text}
                <FcFullTrash onClick={deleteTodo} />
            </li>
            
        </div>
        </>
    )
}

export default ListItem