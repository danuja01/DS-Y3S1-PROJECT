import { useNavigate } from 'react-router-dom'
import { useEffectOnce } from '../hooks'
import { verify } from '../services'
import axios from 'axios'

const Verify = () => {
  const navigateTo = useNavigate()
  const code = window.location.pathname.split('/').pop()

  useEffectOnce(() => {
    verify(code)
    axios
      .post('http://localhost:4007/api/v1/auth/verify/' + code)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    navigateTo('/login')
  }, [])

  return <></>
}

export default Verify
