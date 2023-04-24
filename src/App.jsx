import TareaForm from './components/TareaForm';
import TareaList from './components/TareaList';

const App = () => {
  return (
    <main className="bg-zinc-500 h-screen">
      <div className="container mx-auto p-10">
        <TareaForm />
        <TareaList />
      </div>
    </main>
  );
};
export default App;
