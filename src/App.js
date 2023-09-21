
import Body from './body';
import Login from './login';

import { createBrowserRouter,
  Route,Routes,
  createRoutesFromElements,
  RouterProvider
  } from 'react-router-dom'
import Signup from './signup';
import ErrorPage from './error';

import FbConfig from './fbConfig';

import { initializeApp } from 'firebase/app';

const app = initializeApp(FbConfig)

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        
          <Route index element={<Login />} />
       
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
        
        {/* private page */}
      

       
        <Route path="/images" element={<Body />} />
        
     
    
      </Route>
    
    )
  );
  return (
 
  <RouterProvider router={router} />

   
  );
}

export default App;
