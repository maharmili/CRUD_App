import {useEffect, useState } from "react";
import FormPage from "./components/FormPage";
import Todos from "./components/Todos";


const App= () => {

  const getData=()=>{
    const data=JSON.parse(localStorage.getItem("list"));
    if(data){
      return JSON.parse(localStorage.getItem("list"));
    } else {
      return []
    }
  }

  const [todos,setTodos]=useState( getData() )
  const[id,setId]=useState("");

useEffect(()=>{
  localStorage.setItem("list",JSON.stringify(todos))
})

const deleteTodo=(id)=>{
    const newTodos=todos.filter((todosId)=>{
      return todosId.id !== id;
    })
    setTodos(newTodos)
  }

  return (
    <>
    <div className="container-fluid">
      <h1 className="text-center mt-lg-5">Todo List CRUD Application</h1>
      <FormPage  todos={todos} setTodos={setTodos} id={id} setId={setId}/>
      <Todos todos={todos} deleteTodo={deleteTodo} setId={setId}/>
    </div>
    </>
  )
};

export default App;



