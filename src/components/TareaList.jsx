import { useContext } from 'react';
import TareaCard from './TareaCard';
import { TareaContext } from '../context/TareaContext';

const TareaList = () => {
  const { tareas } = useContext(TareaContext);

  if (tareas.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No hay tareas
      </h1>
    );
  }
  return (
    <div className="grid md:grid-cols-4 gap-2 md:p-4 sm:w-full">
      {tareas.map((tarea) => (
        <TareaCard tarea={tarea} key={tarea.id} />
      ))}
    </div>
  );
};

export default TareaList;
