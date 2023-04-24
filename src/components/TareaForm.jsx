import { useState, useContext } from 'react';
import { TareaContext } from '../context/TareaContext';

const TareaForm = () => {
  const [titulo, setTitulo] = useState('');
  const { crearTarea, tarea } = useContext(TareaContext);

  
 

  const handleSubmit = (e) => {
    e.preventDefault();
    crearTarea(titulo);
    setTitulo('');
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crear Tarea</h1>
        <input
          placeholder="Escribe una tarea "
          onChange={(e) => {
            setTitulo(e.target.value);
          }}
          value={titulo}
          className="bg-slate-300 p-3 w-full mb-6"
          autoFocus
        />
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-400">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default TareaForm;
