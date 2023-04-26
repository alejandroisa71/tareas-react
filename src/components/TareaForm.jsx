import { useState, useContext, useEffect } from 'react';
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom';

import { TareaContext } from '../context/TareaContext';

const TareaForm = () => {
  const [tarea, setTarea] = useState({
    id: '',
    titulo: '',
    completada: false
  });

  const { crearTarea, tareas, modificarTarea } = useContext(TareaContext);
  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (e) => {
    setTarea({ ...tarea, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Guardar los cambios?',
      showDenyButton: true,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar',
      denyButtonText: `Descartar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Tarea guardada!', '', 'success')
        if (params.id) {
          modificarTarea(tarea)
        } else {
          crearTarea(tarea);
        }
      } else if (result.isDenied) {
        Swal.fire('No se guardo la tarea', '', 'info')
      }
      navigate('/');
    })
    
   
  };
  useEffect(() => {
    const tareaEncontrada = tareas.find((tarea) => tarea.id === params.id);
    if (tareaEncontrada) {
      setTarea(tareaEncontrada);
    }
  }, [params.id, tareas]);

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">{params.id ? 'Edita Tarea' : 'Crea Tarea'}</h1>
        <input
          type="text"
          name="titulo"
          placeholder="Escribe una tarea "
          onChange={handleChange}
          value={tarea.titulo}
          className="bg-slate-300 p-3 w-full mb-6"
          autoFocus
        />
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-400">
          <h2>{params.id ? 'Modificar' : 'Guardar'}</h2>
        </button>
      </form>
    </div>
  );
};

export default TareaForm;
