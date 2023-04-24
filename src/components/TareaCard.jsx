

import { useContext } from 'react';
import { TareaContext } from '../context/TareaContext';

const TareaCard = ({ tarea }) => {
  const { eliminarTarea, buscarTarea } = useContext(TareaContext);
  const { id, titulo } = tarea;
  // console.log(tarea)
  return (
    <div className="bg-gray-800 text-white rounded-md p-4">
      <h1 className="text-xl font-bold capitalize">{titulo}</h1>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 mr-4 hover:bg-red-800"
        onClick={() => eliminarTarea(id)}
      >
        Eliminar
      </button>
      <button
        className="bg-green-400 px-2 py-1 rounded-md mt-4 hover:bg-green-600"
        onClick={() => buscarTarea(id)}
      >
        Modificar
      </button>
    </div>
  );
};
export default TareaCard;
