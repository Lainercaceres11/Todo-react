import React from "react";
import Tareas from "./Tareas";

const TaskList = ({ tareas, setTarea, eliminarTarea}) => {


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scroll">
      {tareas && tareas.length ? (
        <>
          {" "}
          <h2 className="font-black text-3xl text-center mb-10">
            Lista de tareas
          </h2>
          {tareas.map((tarea) => {
            return <Tareas tarea={tarea} key={tarea.id}  setTarea={setTarea} eliminarTarea={eliminarTarea}/>;
          })}
        </>
      ) : (
        <h2 className="font-black text-3xl text-center mb-10">
        No tengo tareas
      </h2>
      )}
    </div>
  );
};

export default TaskList;
