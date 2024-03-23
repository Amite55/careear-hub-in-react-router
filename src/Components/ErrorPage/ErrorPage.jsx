import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>oops!!!</h1>
            <Link to='/'>Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;