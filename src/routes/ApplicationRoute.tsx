import { createBrowserRouter } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen'

const ApplicationRoute = createBrowserRouter([
    {
        path: '/',
        element: <HomeScreen/>
        
    }
])

export default ApplicationRoute