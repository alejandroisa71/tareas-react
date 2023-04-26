import { Link } from 'react-router-dom';

const Heading = () => {
  return (
    <>
     <Link to="/">
     <h1 className='text-center text-2xl text-white font-bold'>Hola a App Tareas </h1>
     </Link>
      <div className="md:text-right sm:text-center px-4 py-2 m-2">
        <Link to="add">
          <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-md ">
            Agregar Tarea
          </button>
        </Link>
      </div>
    </>
  );
};
export default Heading;
