import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utiliry/localStorage";
import { Helmet } from "react-helmet-async";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    const {job_description, job_responsibility, educational_requirements, experiences, job_title, salary,contact_information} = job;

    const handleApplyjob = () =>{


        saveJobApplication(idInt)



        toast('Your Job Apply sucassfuly')
    }
    
    return (
        <div>
            <Helmet>
                <title>Job details </title>
            </Helmet>
            <h2 className="my-14 text-center text-6xl">Job Details</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="grid border md:col-span-3 space-y-8 py-10 px-5">
                    <h2><span className="font-bold">Job Description :</span> {job_description}</h2>
                    <h2><span className="font-bold">Job Responsibility :</span> {job_responsibility}</h2>
                    <h2><span className="font-bold">Educational Requirements : </span>{educational_requirements}</h2>
                    <h2><span className="font-bold">Experiences : </span> {experiences}</h2>
                </div>
                <div className="border space-y-5 p-5">
                    <h1 className="text-xl font-semibold">Job Details</h1>
                    <div className="divider"></div>
                    <p><span className="font-bold">Salary : </span>{salary}</p>
                    <p><span className="font-bold">Job Title : </span>{job_title}</p>
                    <h1 className="text-xl font-semibold">Contact Information</h1>
                    <div className="divider"></div>
                    <p><span className="font-bold">Phone : </span>{contact_information.phone}</p>
                    <p><span className="font-bold">Email : </span>{contact_information.email}</p>
                    <p><span className="font-bold">Address : </span>{contact_information.address}</p>
                    <button 
                    onClick={handleApplyjob}
                     className="w-full btn bg-[#7E90FE] text-white">
                        Apply Now</button>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;