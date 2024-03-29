import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-screen-2xl bg-white mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
