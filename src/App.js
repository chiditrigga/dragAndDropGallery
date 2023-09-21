
import Body from './body';
import Login from './login';

import { createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
  } from 'react-router-dom'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route index element={<Login />} />
        <Route path="/images" element={<Body />} />
       
     
      </Route>
    
    )
  );
  return (
   <>
  <RouterProvider router={router} />
   </>
  );
}

export default App;
