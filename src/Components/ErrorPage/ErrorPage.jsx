import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center items-center justify-center">
            <h1 className="text-5xl font-bold my-28">oops‼‼</h1>
            <p className="mb-6">😫page not found😫</p>
            <Link to='/' className="btn w-full">Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;