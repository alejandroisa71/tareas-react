import { createContext, useReducer } from 'react';
import tareaReducer from './TareaReducer';
import { v4 } from 'uuid';

const initialState = {
  tareas: [],
};

export const TareaContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tareaReducer, initialState);

  const crearTarea = (tarea) => {
    dispatch({
      type: 'AGREGAR_TAREA',
      payload: {
        ...tarea,
        id: v4(),
        completada:false
      },
    });
  };

  const eliminarTarea = (id) => {
    dispatch({
      type: 'ELIMINAR_TAREA',
      payload: id,
    });
  };

  const modificarTarea = (tarea) => {
    dispatch({ type: 'MODIFICAR_TAREA', payload: tarea });
  };

  const tareaHecha = (id) => dispatch({ type: 'TAREA_HECHA', payload: id });

  return (
    <TareaContext.Provider
      value={{
        ...state,
        crearTarea,
        eliminarTarea,
        modificarTarea,
        tareaHecha,
      }}
    >
      {children}
    </TareaContext.Provider>
  );
};
