import { Routes, Route } from 'react-router-dom';
import Heading from './components/Heading';
import TareaForm from './components/TareaForm';
import TareaList from './components/TareaList';

import { ContextProvider } from './context/TareaContext';

const App = () => {
  return (
    <main className="bg-zinc-500 h-full">
      <div className="container mx-auto p-10">
        <ContextProvider>
          <Heading />
          <Routes>
            <Route path="/" element={<TareaList />} />
            <Route path="/add" element={<TareaForm />} />
            <Route path="/edit/:id" element={<TareaForm />} />
          </Routes>
        </ContextProvider>
      </div>
    </main>
  );
};
export default App;
