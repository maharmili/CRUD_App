

const Todos = ({todos,deleteTodo,setId}) => {
  return(
    
    <div className="container text-center">
    <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
 
    {
        todos.map((todo)=>{
       return(
        <>
        <tbody key={todo.id}>
        <tr>
       <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td>
        <button  onClick={()=>setId(todo.id)}  className="btn btn-warning mx-2">Edit</button>
        <button  onClick={()=>deleteTodo(todo.id)}  className="btn btn-danger ">Delete</button>
      </td>
    </tr>
        </tbody>
        </>
       
       )
        })
    }
  </table>
  </div>
  )
};

export default Todos;
