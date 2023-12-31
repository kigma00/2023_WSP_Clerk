'use client'
import Courses from '@/components/Courses'
import { useState, useEffect } from 'react'
import LoadingPage from '../loading'
import CourseSearch from '@/components/CourseSearch'

const CoursesPage = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses')
      const data = await res.json()
      setCourses(data)
      setLoading(false)
    }

    fetchCourses()
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 m-2"> Courses </h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </div>
  )
}
export default CoursesPage
