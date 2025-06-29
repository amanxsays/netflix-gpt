import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./components/Browse";
import Login from "./components/Login";

function App() {
  const appRouter = createBrowserRouter([{
    element:<Body/>,
    children:[
      {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    ]
  }]);

  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  );
}

export default App;
