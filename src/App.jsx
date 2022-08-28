import { useEffect, useState } from "react"
import Form from "./components/Form"
import Haeder from "./components/Haeder"
import TaskList from "./components/TaskList"

function App() {

  const [tareas, setTareas] = useState([])
  const [tarea, setTarea] = useState({})

  const eliminarTarea = (id) => {
    const actulizarTarea = tareas.filter(tarea => tarea.id !== id);
    setTareas(actulizarTarea);
  };

  useEffect(()=>{
    const obtenerTareasLocalStorage =()=>{
      const tareasLocalStorage = JSON.parse(localStorage.getItem('Tareas')) ?? [];
      setTareas(tareasLocalStorage);
      
    }

    obtenerTareasLocalStorage()

  }, [])

  useEffect(()=>{
    //Almacena en el local storage
    localStorage.setItem('Tarea', JSON.stringify(tareas))
  },[tareas])


  return (
    <div className="container mx-auto mt-20">
      <Haeder />
     <div className="mt-12 md:flex">
      <Form tareas={tareas} setTareas={setTareas} tarea={tarea} setTarea={setTarea} />
      <TaskList eliminarTarea={eliminarTarea} tareas={tareas} setTarea={setTarea} />
     </div>
    </div>
  )
}

export default App
