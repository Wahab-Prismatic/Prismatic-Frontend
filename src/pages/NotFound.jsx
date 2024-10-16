
import { Link, useNavigate } from 'react-router-dom';
import 'primeicons/primeicons.css';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <section className="text-center d-flex flex-column justify-content-center align-items-center" style={{ height: '24rem' }}>
            <i className="pi pi-exclamation-triangle text-warning display-1 mb-4"></i>
            <h1 className="display-4 fw-bold mb-3">404 Not Found</h1>
            <p className="h5 mb-4">This page does not exist</p>
            <Link onClick={() => navigate(-1)} className="btn btn-warning px-3 py-2">
                Go Back
            </Link>
        </section>
    )
}

export default NotFound