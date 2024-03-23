/* eslint-disable react/prop-types */
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card bg-slate-900 py-8 px-5 my-10 card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="mt-4 flex ">
                    <h1 className="flex mr-4"><MdOutlineLocationOn className="text-2xl mr-2" />{location}</h1>
                    <h1 className="flex"><AiOutlineDollar className="text-2xl" /> {salary}</h1>
                </div>
                <div className="card-actions">
                     <Link to={`/job/${id}`}>
                     <button className="btn  bg-gradient-to-r from-indigo-500 to-indigo-600">View Details</button>
                     </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;