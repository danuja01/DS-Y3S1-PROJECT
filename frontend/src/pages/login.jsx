import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { login } from '../services'
import { setFormData, toggleRememberMe } from '../store/ui/login'
import { setAuthUser } from '../store/data/user'

import Heading from '../components/common/heading'
import Layout from '../components/layout'
import { Loader } from '../components/common'
import Checkbox from '../components/common/checkbox'

const Login = () => {
  const navigateTo = useNavigate()

  const { formData, rememberMe } = useSelector((state) => state.ui.login)

  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    dispatch(
      setFormData({
        ...formData,
        [e.target.id]: e.target.value.trim(),
      }),
    )
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    await login({ email: formData.email, password: formData.password }, true).then((data) => {
      if (data) {
        const store = rememberMe ? localStorage : sessionStorage
        store.setItem('access_token', data.data.access_token)
        store.setItem('refresh_token', data.data.refresh_token)
        dispatch(setAuthUser(data.data.user))
        dispatch(setFormData({}))
        navigateTo('/')
      }
    })
  }

  return (
    <Layout hideHeader hideFooter>
      <div className=" z-[-1]">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8  h-screen">
          <Heading className="text-center text-[2rem] capitalize w-full">Welcome!, WellnessRoots</Heading>
          <div class="flex justify-center items-center">
            <div class="w-11/12 sm:w-7/12 xl:w-4/12 2xl:w-[27%] mb-10">
              <Loader />
            </div>
          </div>
          <div className=" shadow-md bg-gray-100 px-10 py-16 rounded-lg mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>

            <form className="pt-10 space-y-6" onSubmit={onSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-green-800 hover:text-green-600">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button className="flex w-full justify-center rounded-md bg-green-800 hover:bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">
                  Sign in
                </button>
              </div>

              <div class="flex justify-between mt-4">
                <div class="flex items-center">
                  <Checkbox checked={rememberMe} toggle={() => dispatch(toggleRememberMe())} />
                  <p class="text-sm ml-2 font-semibold">Remember Me</p>
                </div>
                <Link to="/forgot-password" class="font-semibold text-sm text-green-800 hover:text-green-600">
                  Forgot Password
                </Link>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <a href="#" className="font-semibold leading-6 text-green-800 hover:text-green-500">
                {' Register Now!'}
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
