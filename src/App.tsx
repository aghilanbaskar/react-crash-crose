import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider}  from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayouts from './layouts/MainLayouts'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, { fetchJobById } from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<MainLayouts />} >
    <Route index element={<HomePage />}  />
    <Route path="/jobs" element={<JobsPage />} />
    <Route path='/add-job' element={<AddJobPage/>} />
    <Route path="/jobs/:id" element={<JobPage />} loader={fetchJobById} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
  )
)
const App = () => {
  return <RouterProvider router={router} />
}

export default App