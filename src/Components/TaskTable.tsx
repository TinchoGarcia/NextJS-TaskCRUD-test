import React from "react";
import { TaskRow } from "./TaskRow";
import { Task } from "@/Interfaces/task";

interface TaskTableProps {
  tareas: Task[];
  toggleTarea: (tarea: Task) => void;
  showCompleted?: boolean;
  deleteTarea: (tarea: Task) => void;
};

export const TaskTable: React.FC<TaskTableProps> = ({ tareas, toggleTarea, showCompleted = false, deleteTarea }) => {
    const taskTableRows = (doneValue: boolean) => {
    
        return (
            tareas 
                .filter(tarea => tarea.done === doneValue)
                .map(tarea => (
                <TaskRow tarea={tarea} key={tarea.name} toggleTarea={toggleTarea} deleteTarea={deleteTarea} />
            ))
        );
    
    
    };

    return (
    <table className="table table-striped table-bordered border-secondary">
      <thead>
        
      </thead>
      <tbody>
        {
        taskTableRows(showCompleted)
        }
        
      </tbody>
    </table>
  );
};
