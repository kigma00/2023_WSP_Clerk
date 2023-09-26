import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'
const Header = () => {
  const { userId } = auth()
  return (
    <>
      <nav className="bg-red-900 py-4 px-8">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-lg text-white">Cleark Auth</div>
            </Link>
          </div>

          <div className="flex items-center font-bold">
            {!userId ? (
              //로그인이 안된 경우
              <>
                <Link
                  href="/sign-in"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Sign-in
                </Link>

                <Link
                  href="/sign-up"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Sign-up
                </Link>
              </>
            ) : (
              //로그인이 된 경우
              <>
                <Link
                  href="/repos"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Repository
                </Link>

                <Link
                  href="/courses"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Courses
                </Link>

                <Link
                  href="/dashboard"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Dashboard
                </Link>

                <Link
                  href="/profile"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  profile
                </Link>
                <div className="ml-auto">
                  <UserButton />
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
