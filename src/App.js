import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

function App() {
  return (
    <div className='max-w-screen-2xl bg-white mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
