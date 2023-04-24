import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { tareas as data } from '../data/tareas';

export const TareaContext = createContext();

export const TareaContextProvider = (props) => {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({});

  const crearTarea = (tituloTarea) => {
    setTareas([
      ...tareas,
      {
        titulo: tituloTarea,
        id: uuidv4(),
        completada: false,
      },
    ]);
  };
  const eliminarTarea = (tareaId) => {
    setTareas(tareas.filter((tarea) => tarea.id !== tareaId));
  };
  const buscarTarea = (tareaId) => {
    const tareaEncontrada = tareas.find((tarea) => tarea.id === tareaId);
    if (tareaEncontrada) {
      setTarea(tareaEncontrada);
      console.log(tareaEncontrada.titulo)
      // setTareas([...tareas,])
    }
  };

  useEffect(() => {
    setTareas(data);
  }, []);

  return (
    <TareaContext.Provider
      value={{ tareas, tarea, crearTarea, eliminarTarea, buscarTarea }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};
