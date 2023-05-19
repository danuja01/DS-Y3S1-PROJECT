import Layout from '../components/layout'
import { debounce } from 'lodash'
import { getOrdersByBuyer } from '../services/order'
import { useEffect, useState } from 'react'

const MyOrders = () => {
  const [ordersRes, setOrdersRes] = useState({})
  const [orderDetails, setOrderDetails] = useState({})
  const id = localStorage.getItem('id')

  const refresh = debounce(() => {
    getOrdersByBuyer(id).then(({ data }) => setOrdersRes(data))
  }, 300)

  useEffect(() => {
    refresh()
  }, [])

  useEffect(() => {
    if (ordersRes) {
      setOrderDetails(ordersRes)
    }
  }, [ordersRes])

  return (
    <>
      <Layout>
        <div className="mx-40">
          <h1
            className="
            text-3xl
            font-bold
            text-center
            text-green-800
            my-10
          "
          >
            ALL ORDERS
          </h1>

          {!orderDetails.length > 0 && (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-800"></div>
            </div>
          )}
          {ordersRes &&
            orderDetails.length > 0 &&
            orderDetails.map(({ productsDetails, _id, isPaid }) => (
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-10">
                {console.log(_id)}
                <div className="flex items-center justify-between p-6 space-x-6 bg-green-800 dark:border-gray-700">
                  <h2 className="text-lg font-medium capitalize text-white">Order ID - {_id}</h2>
                  <h3 className={`text-lg font-medium capitalize ${isPaid ? 'text-green-500' : 'text-red-500'}`}>Status - {isPaid ? 'Paid' : 'Not Paid'}</h3>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-slate-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Total Price
                      </th>

                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  {productsDetails.map((data) => (
                    <tbody>
                      <tr className="bg-white border-b hover:bg-slate-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {data.title}
                        </th>
                        <td className="px-6 py-4">Rs. {data.price}.00</td>
                        <td className="px-6 py-4">{data.quantity}</td>
                        <td className="px-6 py-4">{data.price * data.quantity}</td>
                        <td className="flex items-center px-6 py-4 space-x-3">
                          <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
                            Request Refund
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            ))}
        </div>
      </Layout>
    </>
  )
}

export default MyOrders
