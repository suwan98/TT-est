import {HelmetProvider} from "react-helmet-async";
import {RouterProvider} from "react-router-dom";
import router from "./routes/routes";
function App() {
  return (
    <>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
