import { useRoutes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import routes from "./routes.jsx"

export const App = () => {

  let element = useRoutes(routes);

  return(
    <>
      {element}
      <Toaster
        position="button-right"
        reverseOrder={false}
      />
    </>
  )
}