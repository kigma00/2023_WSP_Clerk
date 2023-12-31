import Link from 'next/link'

const Courses = async ({ courses }) => {
  return (
    <div className="grid-1 ">
      {courses?.map((course) => (
        <div key={course.id} className="bg-red-200 p-4 m-2 rounded-lg">
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p className="mb-4">{course.description}</p>
          <Link
            href={course.link}
            target="_blank"
            className="py-2 px-4 bg-red-700 hover:bg-red-900 text-white rounded-lg mb-4 m-100"
          >
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  )
}
export default Courses
