import { Task } from "@/Interfaces/task";

interface TaskRowProps {
    tarea: Task;
    toggleTarea: (tarea: Task) => void;
    deleteTarea: (tarea: Task) => void;
}


export const TaskRow: React.FC<TaskRowProps> = ({tarea, toggleTarea, deleteTarea}) => {
    const handleDelete = () => {
        deleteTarea(tarea)
    };

    return (
        <tr>
            <td className="bg-light">
                {tarea.name}
                <input type="checkbox"
                className="form-check-input form-check-input-success ms-2 mt-2"
                checked={tarea.done}
                onChange={() => toggleTarea(tarea)} />
                <label className="form-check-label ms-2">Hecho</label>
                {!tarea.done && (
                    <button onClick={handleDelete} className="btn btn-danger btn-sm m-2">Eliminar tarea</button>
                )}
            </td>
        </tr>
    );
};