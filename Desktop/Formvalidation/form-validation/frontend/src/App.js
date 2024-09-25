import './App.css';
import Signup from './signup/Signup';
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Login from './Login/Login';
function App() {
  
  const route = createBrowserRouter([
  {  
    path:"/",
    element: <Signup/>,
  }, 
  {
    path:"/login",
    element: <Login/>,
  },
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
};
export default App;
