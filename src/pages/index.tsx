import { useState, useEffect } from "react";
import { TaskCreator } from "@/Components/TaskCreator";
import { TaskTable } from "@/Components/TaskTable";
import { Task } from "@/Interfaces/task";

const App: React.FC = () => {
  const [itemsTareas, setItemsTareas] = useState<Task[]>([]);
  const [showCompleted, setshowCompleted] = useState<boolean>(false);

  function creaNuevaTarea(nombreTarea: string) {
    console.log(nombreTarea);
    
    if (nombreTarea.trim()==="") {
      alert("La tarea no puede estar vacía");
      return;
    }
    
    if (!itemsTareas.find((tarea) => tarea.name === nombreTarea)) {
      setItemsTareas([...itemsTareas, { name: nombreTarea, done: false }]);
    }
  }

  const toggleTarea = (tarea: Task) => {
    setItemsTareas(
      itemsTareas.map((t) =>
        t.name === tarea.name ? { ...t, done: !t.done } : t
      )
    );
  };

  const deleteTarea = (tarea: Task) => {
    try { const updatedTareas = itemsTareas.filter(t => t.name !== tarea.name);
      setItemsTareas(updatedTareas)
      
    } catch (error) {
      alert('Error al eliminar la tarea. Por favor intente nuevamente')
    }
    
  }

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setItemsTareas(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(itemsTareas));
  }, [itemsTareas]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4">Lista de Tareas</h1>
      
      <TaskCreator creaNuevaTarea={creaNuevaTarea} />
      <TaskTable tareas={itemsTareas} toggleTarea={toggleTarea} deleteTarea={deleteTarea}/>

      <div className="mt-5 form-check form-switch bg-secondary text-center p-1 border-secondary text-white">
        <input 
          type="checkbox"
          className="form-check-input form-check-input-success ms-2 mt-2"
          onChange={(e) => setshowCompleted(!showCompleted)}
        />{" "}
        <label className="m-1 mb-2"> <strong>Mostrar tareas hechas</strong></label>
      </div>

      <div className="">
      {showCompleted === true && (
        <TaskTable
          tareas={itemsTareas}
          toggleTarea={toggleTarea}
          deleteTarea={deleteTarea}
          showCompleted={showCompleted}
        />
      )}
    </div>
    </div>
    </div>
    </div>

    

  );
};

export default App;
