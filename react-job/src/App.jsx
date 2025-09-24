import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
  return (
    <>
    {/* <!-- Components --> */}
    <Navbar/>
    <Hero/>
    <HomeCards/>
    <JobListings/>
    <ViewAllJobs/>
    

    </>
  )
}

export default App