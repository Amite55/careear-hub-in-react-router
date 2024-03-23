
const CategoryList = () => {
    return (
        <div className="my-10">
            <h2 className="text-6xl text-center mb-6">Job Category List</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className=" md:grid grid-cols-3 mt-11 gap-8">
                <div className="text-center bg-gray-900 p-12 space-y-4 rounded-xl shadow-3xl">
                <h2 className="font-bold text-xl">Account & Finance</h2>
                <p>300 Jobs Available </p>
                </div>
                <div className="text-center bg-gray-900 p-12 space-y-4 rounded-xl shadow-3xl">
                <h2 className="font-bold text-xl">Account & Finance</h2>
                <p>300 Jobs Available </p>
                </div>
                <div className="text-center bg-gray-900 p-12 space-y-4 rounded-xl shadow-3xl">
                <h2 className="font-bold text-xl">Account & Finance</h2>
                <p>300 Jobs Available </p>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;