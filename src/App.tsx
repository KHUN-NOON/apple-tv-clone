import { Provider } from "react-redux"
import store from "./redux/store"
import { RouterProvider } from 'react-router-dom'
import ApplicationRoute from "./routes/ApplicationRoute"

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={ApplicationRoute}/>
    </Provider>
  )
}

export default App
