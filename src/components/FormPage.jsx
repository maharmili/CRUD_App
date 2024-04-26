import { useEffect, useState } from "react";

const FormPage = ({todos,setTodos,id,setId}) => {

const [title,setTitle]=useState("");
const [description,setDescription]=useState("");


const titleChange=(e)=>{
  setTitle(e.target.value)
}

const descriptionChange=(e)=>{
  setDescription(e.target.value)
  }

  const handleSubmit=(e)=>{
e.preventDefault()
if (!title && !description) {
  alert('Please enter both a title and description.');
} else if (!title) {
  alert('Please enter a title....');
} else if (!description) {
  alert('Please enter a description....');
} else {
  if(id){
    updateById(id)
    setId('')
  } else {
    const obj={
      id:Math.random(),
      title,
      description
      // title:title,
      // description:description
      // (if key and value are same then write in the above format)
    }
    setTodos([...todos,obj])
  }
   setTitle('');
    setDescription('');
}
}



useEffect(()=>{
  if(id){
    const updatedTodo=todos.filter((todo)=>todo.id === id)
    setTitle(updatedTodo[0].title)
    setDescription(updatedTodo[0].description)
    console.log('updatedId',updatedTodo)
  }

},[id]);

const updateById=(id)=>{
  const object={
    title,
    description
  }
  setTodos((prevData)=>
prevData.map((todo)=> todo.id === id ? {...todo, ...object} : todo)
)
}

return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="container my-5 text-center" 
    style={{display:'flex' ,justifyContent:'center',alignItems:'center'}}
    >
   <input
   value={title}
   onChange={titleChange}
   type="text" 
   className="mx-2" placeholder="Title"/>

   <input
   value={description}
   onChange={descriptionChange}
    type="text" 
    className="mx-2"
     placeholder="Description"/>
     {
      id && ( <button className="btn btn-warning " type="submit"  >Edit</button>)
     }
     {
      !id && (   <button className="btn btn-warning " type="submit"  >Add</button>
    )
     }

    </div>
    </form>
  
    </>
  )
};

export default FormPage;
