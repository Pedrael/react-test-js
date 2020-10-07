import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValueHook(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  return {
    bind: {
      value,//ключ совпадает со значением, поэтому можно писать только значение
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

function AddTodo({onCreateMethod}) {
  const inputHook = useInputValueHook('')

  function submitHandler(event) {
    event.preventDefault();
    if (inputHook.value().trim()) {
      onCreateMethod(inputHook.value());
      inputHook.clear()
    }
  }
  
  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <input {...inputHook.bind} />
      <button type="submit">Add todo</button>
    </form>
  );
}
//<input value={value} onChange={(event) => setValue(event.target.value)} />

AddTodo.propTypes = {
  onCreateMethod: PropTypes.func.isRequired,
};

export default AddTodo;
