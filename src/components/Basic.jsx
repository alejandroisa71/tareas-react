import { Formik } from "formik";

import { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

import { TareaContext } from "../context/TareaContext";

const Basic = () => {
  const { crearTarea, tareas, modificarTarea } = useContext(TareaContext);
  const navigate = useNavigate();
  const params = useParams();
  return (
    <div>
      <Formik
        initialValues={{ titulo: "" }}
        validate={(values) => {
          const errors = {};
          if (values.titulo === "") {
            errors.titulo = "El campo es obligatorio";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {

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
                modificarTarea(values)
              } else {
                crearTarea(values);
              }
            } else if (result.isDenied) {
              Swal.fire('No se guardo la tarea', '', 'info')
            }
            navigate('/');
          })
            setSubmitting(false);
            // navigate("/");    
        }
      }





        // onSubmit={(values, { setSubmitting }) => {
        //   setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));
        //     setSubmitting(false);
        //     crearTarea(values);
        //     navigate("/");
        //   }, 400);
        // }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <div className="max-w-md mx-auto h-screen">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
              <h1 className="text-2xl font-bold text-white mb-3">
                Agrega Tarea
              </h1>
              <input
                type="text"
                name="titulo"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="bg-slate-300 p-3 w-full mb-2"
                autoFocus
              />
              <p className="text-red-500 mb-3">
                {errors.titulo && touched.titulo && errors.titulo}{" "}
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-400"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Basic;
