import React, { Component, Fragment, useContext } from "react"
import PropTypes from 'prop-types'
import Context from '../context';

/*
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
        {}
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
*/

export default class Todo extends Component {
  constructor(props) {
    super(props)
    console.log('constructor');
  }
  fixhook () {
    const {removeTodoMethod} = useContext(Context)
    return removeTodoMethod
  }
  render() {
    const classes = []
  
    if (this.props.todo.completed) {
      classes.push('done')
    }
    //checked={todo.completed} если начальные значения комплитед не все фоллс, чтоб отображалось с самого начала как выполненное
    const onClickHandler = () => this.fixhook()(this.props.todo.id)
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
    return (
      <Fragment>
        <li style={styles.li}>
          <span className={classes.join(' ')}>
            {}
            <input
              checked={this.props.todo.completed}
              type="checkbox"
              onChange={() => this.props.onChangeMethod(this.props.todo.id)}
            />
            <strong>{this.props.index + 1}</strong>
            &nbsp;
            {this.props.todo.title}
          </span>


          <button className='rm' onClick={onClickHandler}>&times;</button>
        </li>
      </Fragment>
    )
  }
}
