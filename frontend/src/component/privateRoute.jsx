import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";

const PrivateRoute = () => {
    const { loggedIn, checkingStatus } = useAuthStatus()

    if (checkingStatus) return (
        <div className='flex items-center justify-center mx-auto container mt-28'><p>Loading...</p></div>

    )
    return loggedIn ? <Outlet /> : <Navigate to='/login' replace />
}

export default PrivateRoute;