import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utiliry/localStorage";
import { Helmet } from "react-helmet-async";

const AppliJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);


    const jobs = useLoaderData();

    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs)
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs)
        } 
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs)
        }
    }
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {

            // fast way--------------
            // const jobApplied = jobs.filter(job => storedJobIds.includes(job.id));
            // second way-------------------



            const jobApplied = [];

            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobApplied.push(job)
                }
            }



            setAppliedJobs(jobApplied)
            setDisplayJobs(jobApplied)
            // console.log(appliedJobs)
            // console.log(jobs, storedJobIds, jobApplied)
        }

    }, [jobs])


    return (
        <div>
            <Helmet>
                <title>career hub || applied job</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center my-16">Applied Jobs</h1>

           <div className="text-end  my-10">
           <details className="dropdown">
                <summary className="m-1 btn btn-primary">Filter</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
           </div>

            <div className="space-y-5">
                {
                    displayJobs.map(job => <div key={job.id}>
                        <div className="card card-side bg-base-100 shadow-xl border px-6">
                            <figure><img src={job.logo} alt="Movie" /></figure>
                            <div className="card-body ml-10">
                                <h2 className="card-title">{job.job_title}</h2>
                                <p>{job.company_name}</p>
                                <div>
                                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job.remote_or_onsite}</button>
                                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job.job_type}</button>
                                </div>
                                <div className="mt-4 flex ">
                                    <h1 className="flex mr-4">{job.location}</h1>
                                    <h1 className="flex"> {job.salary}</h1>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AppliJobs;