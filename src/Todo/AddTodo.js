import React, { Component, useState } from "react";
import PropTypes from "prop-types";


//удобно для случаев, когда в форме множество полей для группировки работы с многими состояниями
//2 способа - изменение стейта, изменение пропсов, или запуск ререндера
function useInputValueHook(defaultValue = "") {

  const [value, setValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);

  const error = value.length < 3; //можно выносить условия в отдельные переменные
  return {
    bind: {
      value, //ключ совпадает со значением, поэтому можно писать только значение
      error,
      isFocused,
      onChange: (event) => setValue(event.target.value),
      onFocus: () => setIsFocused(true), // focus
      onBlur: () => setIsFocused(false), // unfocus
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

//нельзя распаковывать элементы, не являщиеся родными в хтмл элементах, если передаются такие элементы внутрь компонента, то их нужно отделять от распаковываемых спредом и передавать отдельно (для стрикт мода)

const GenericInput = ({ error, isFocused, ...restProps }) => (
  <>
    <input
      id="input"
      {...restProps}
      style={error && isFocused ? { background: "red" } : {}}
    />
    {console.log(error)}
    {error && isFocused && <label htmlFor="input">some error message</label>}
  </>
);

function AddTodo({ onCreateMethod }) {
  const inputHook = useInputValueHook("");

  function submitHandler(event) {
    event.preventDefault();
    if (inputHook.value().trim()) {
      onCreateMethod(inputHook.value());
      inputHook.clear();
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <GenericInput {...inputHook.bind} />
      <button type="submit"> Add todo </button>{" "}
    </form>
  );
}

//спред распаковывает массивы по порядку (1 2 3 4), а объекты по ключам (каждое поле в соответствующую переменную, которая называется как ключ)

//<input value={value} onChange={(event) => setValue(event.target.value)} />

AddTodo.propTypes = {
  onCreateMethod: PropTypes.func.isRequired,
};

export default AddTodo;
