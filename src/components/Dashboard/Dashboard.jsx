import { logout } from '../../redux/slices/auth/Login';
import { useDispatch } from 'react-redux';

const Dashboard = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <button onClick={handleLogout} className="btn btn-danger float-end mr-4 mb-[40px]">
                Logout
            </button>
            <div className="max-w-lg mx-auto mt-10 p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
                <p>Welcome to your dashboard! You are successfully logged in.</p>
            </div>
        </>
    );
}

export default Dashboard