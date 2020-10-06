import React, { useContext } from "react"
import PropTypes from 'prop-types'
import Context from '../context';

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem'
  },
  input: {
    marginRight: '1rem'
  }
}

function TodoItem({ todo, index, onChangeMethod }) { //передаем метод извне
  const {removeTodoMethod} = useContext(Context)
  const classes = []

  if (todo.completed) {
    classes.push('done')
  }
  //checked={todo.completed} если начальные значения комплитед не все фоллс, чтоб отображалось с самого начала как выполненное
  const onClickHandler = () => removeTodoMethod(todo.id)
  
  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        {/*jsx comment*/}
        <input
          checked={todo.completed}
          type="checkbox"
          onChange={() => onChangeMethod(todo.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>


      <button className='rm' onClick={onClickHandler}>&times;</button>
    </li>
  )
}
// <button className='rm' onClick={removeTodoMethod.bind(null, todo.id)}>&times;</button>
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChangeMethod: PropTypes.func.isRequired
}

export default TodoItem;
