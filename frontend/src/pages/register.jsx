import { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../services'
import { setFormData } from '../store/ui/register'
import { Dropdown } from '../components/common'
import toast from '../libs/toastify'

import Layout from '../components/layout'

const Register = () => {
  const navigateTo = useNavigate()

  const { formData, allowedRoles } = useSelector((state) => state.ui.register)

  const dispatch = useDispatch()

  const loginBtn = useRef()

  useEffect(() => {
    if (loginBtn.current) {
      loginBtn.current.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }, [formData.role])

  const handleInputChange = ({ target: { id, value } }) => {
    dispatch(
      setFormData({
        ...formData,
        [id]: value?.trim(),
      }),
    )
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    localStorage.setItem('mail', formData.email)
    await register({ ...formData }).then((data) => {
      if (data) {
        navigateTo('/redirect')
        dispatch(setFormData({}))
        setTimeout(() => {
          toast.success(data.message)
        }, 300)
      }
    })
  }

  return (
    <Layout hideFooter hideHeader>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8  h-screen">
        <div className=" shadow-md bg-gray-100 px-10 py-16 rounded-lg mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-between">
            <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register</h2>
          </div>
          <form className="pt-10 space-y-6" onSubmit={onSubmit}>
            {/* <div class="flex flex-col lg:flex-row justify-between items-center gap-x-3">
              <input id="role" name="role" type="text" placeholder="buyer/seller" className="w-36" wrapperclasses="my-2 sm:my-0" value={formData.role} onChange={handleInputChange} />
            </div> */}

            <div class="flex flex-col lg:flex-row justify-between items-center gap-x-3">
              <label htmlFor="role">Role: </label>
              <Dropdown id="role" filterkey="role" options={allowedRoles} className="h-12 sm:h-14" wrapperclasses="my-2 sm:my-0" onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                Address
              </label>
              <div className="mt-2">
                <input
                  id="address"
                  name="address"
                  type="text"
                  autoComplete="address"
                  required
                  value={formData.adress}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

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
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="/login" className="font-semibold leading-6 text-green-800 hover:text-green-500">
              Login Now!
            </a>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Register
