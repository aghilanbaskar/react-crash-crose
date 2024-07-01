import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    <HomeCards/>
    <JobListings isHome={true}/>
    <ViewAllJobs />
    </>
  )
}

export default HomePage