export default function tareaReducer(state, { type, payload }) {
  switch (type) {
    case 'AGREGAR_TAREA':
      return {
        tareas: [...state.tareas, payload],
      };
    case 'ELIMINAR_TAREA':
      return {
        tareas: state.tareas.filter((tarea) => tarea.id !== payload),
      };
    case 'MODIFICAR_TAREA':
      // eslint-disable-next-line no-case-declarations
      const tareaModificada = payload;

      // eslint-disable-next-line no-case-declarations
      const tareasModificada = state.tareas.map((tarea) => {
        if (tarea.id === tareaModificada.id) {
          tarea.titulo = tareaModificada.titulo;
        }
        return tarea;
      });
      return {
        tareas: tareasModificada,
      };
    case 'TAREA_HECHA':
      return {
        tareas: state.tareas.map((tarea) =>
          tarea.id === payload
            ? { ...tarea, completada: !tarea.completada }
            : tarea
        ),
      };

    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
}
