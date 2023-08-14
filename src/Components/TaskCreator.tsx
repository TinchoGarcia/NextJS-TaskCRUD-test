import React, { useState } from "react";

interface TaskCreatorProps {
    creaNuevaTarea: (nombreTarea: string) => void;
}

export const TaskCreator: React.FC<TaskCreatorProps> = ({ creaNuevaTarea }) => {
    const [nuevaTarea, setNuevaTarea] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        creaNuevaTarea(nuevaTarea);
        
        setNuevaTarea("");
    };

    return (
        <div className="mt-3 mb-3">
        <form onSubmit={handleSubmit} className="form-inline">
            <input 
            type="text"
            placeholder="Ingresa la tarea"
            value={nuevaTarea}
            onChange={(event) => setNuevaTarea(event.target.value)}
            />
            <button className="btn btn-primary ms-2">Añadir la tarea</button>
        </form>
        </div>
    );
};