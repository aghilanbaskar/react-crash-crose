import { useEffect, useState } from 'react'
import JobListing from './JobListing'
import Spinner from './Spinner';
import { IJob } from '../interface/job.interface';


const JobListings = ({ isHome = false}) => {
    const [jobs, setJobs] = useState<IJob[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(true)
                const response = await fetch(isHome ? '/api/jobs?_limit=3' : '/api/jobs')
                const data = await response.json();
                setJobs(data)
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError(String(error));
                }
            } finally {
                setLoading(false)
            }
        }
        fetchJobs();
    },[])

    if (loading) {
        return <div className='flex justify-center items-center'><Spinner loading={loading} /></div>
    }
    if (error) {
        return <div className="text-center text-red-500">Error: {error}</div>;
    }
  return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
             { isHome ? 'Recent Jobs': 'Browse Jobs'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    jobs.map(job => {
                        return (
                          <JobListing key={job.id} job={ job } />
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default JobListings