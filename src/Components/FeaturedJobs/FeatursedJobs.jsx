import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";


const FeatursedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() =>{
        fetch('jobs.json')
        .then(response => response.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div className="text-center my-16">
                <h2 className="text-5xl mb-6">Featured Jobs {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : 'text-center my-10'}>
                <button 
                onClick={() => setDataLength(jobs.length)}
                className="btn bg-gradient-to-r from-indigo-500 to-indigo-600">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeatursedJobs;