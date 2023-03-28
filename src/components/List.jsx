import ListItem from './ListItem'


const List = ({item, setTodos}) => {
   
    return (
        <div className="todo">
            <h1 className='h1-remaining'> Remaining tasks : {item.length}</h1>
            <ul>
                {
                    item.length>0?
                    item.map((el, index) => {
                        return <ListItem setTodos={setTodos} todos={item} key={el.id} text={el.text} id={el.id}/>
                    })
                    : null
                   /*  item.map((el, index) => {
                        return <ListItem setTodos={setTodos} todos={item} key={el.id} text={el.text} id={el.id}/> 
                    }) */
                }
              
            </ul>
        </div>
     
    )
}

export default List;