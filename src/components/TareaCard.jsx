import { useContext } from 'react';
import { TareaContext } from '../context/TareaContext';
import { Link } from 'react-router-dom';
import { GrCheckboxSelected,GrCheckbox } from "react-icons/gr"

const TareaCard = ({ tarea }) => {
  const { eliminarTarea, tareaHecha } = useContext(TareaContext);
  const { id, titulo, completada } = tarea;
  return (
    <div className="bg-gray-800 text-white rounded-md p-4">
      <h1 className="text-xl font-bold capitalize">{titulo}</h1>
      <div className="flex-grow text-right ">
        <button
          className="text-3xl text-right bg-purple-600 hover:bg-purple-500  "
          onClick={() => tareaHecha(id)}
        >
          {completada ? <GrCheckboxSelected/> : <GrCheckbox/>}
        </button>
      </div>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 mr-4 hover:bg-red-800"
        onClick={() => eliminarTarea(id)}
      >
        Eliminar
      </button>
      <Link
        to={`/edit/${id}`}
        className="bg-green-400 px-5 py-1.5 rounded-md mt-4 hover:bg-green-600"
      >
        Editar
      </Link>
    </div>
  );
};
export default TareaCard;
