import React, { useState, useEffect } from 'react'
import { createProduct, updateProduct, deleteProduct } from '../services/item'
import Layout from '../components/layout'
import axios from 'axios'

const ProductList = (props) => {
  const [products, setProducts] = useState([])
  const [showEditDialog, setShowEditDialog] = useState(false)
  const [showProductDialog, setShowAddDialog] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  //const [searchQuery, setSearchQuery] = useState('');

  const handleDelete = async (id, index) => {
    try {
      
      const response = await deleteProduct(id, true)
      console.log(response.data)
      
      const newProducts = [...products]
      newProducts.splice(index, 1)
      setProducts(newProducts)
    } catch (error) {
      
      console.log(error)
    }
  }

  const handleEditDialog = (product) => {
    setSelectedProduct(product)
    setShowEditDialog(true)
  }

  const handleAddDialog = () => {
    setShowAddDialog(true)
  }

  const handleEdit = () => {
    
    // Hide the edit dialog
    setShowEditDialog(false)
  }

  const handleAdd = (user) => {
    

    // Hide the add dialog
    setShowAddDialog(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await getAllItems(true)
        const response = await axios.get('http://localhost:4007/api/v1/items')
        setProducts(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  /*const filteredProducts = products.filter(product => {
    return product.title.toLowerCase().includes(searchQuery.toLowerCase())
  })*/

  return (
    <Layout>
  

    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {/*<form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="search-input">Search:</label>
        <input type="text" id="search-input" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
        <button type="submit">Search</button>
      </form>
  <br />*/}
      
      <div>
        <button onClick={() => handleAddDialog()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Product
        </button>
      </div>
      {products
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .map((product) => {
          
          return (
            <div key={product._id} className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium">Title: {product.title}</h3>
                
              </div>
              <img src={product.selectedFile} className="h-40 w-auto object-contain mx-auto" />

              <p className="text-gray-600 mb-2">Description: {product.message}</p>
              <p className="text-gray-600 mb-2">Price: Rs. {product.price}</p>
              <p className="text-gray-600 mb-2">Seller: {product.seller}</p>
              <p className="text-gray-600 mb-2">Category: {product.category}</p>
              <p className="text-sm text-gray-600 mb-2">{new Date(product.created_at).toLocaleDateString()}</p>
             
                <div>
                  <button className="bg-blue-500 text-red p-2 rounded-md mr-2" onClick={() => handleEditDialog(product)}>
                    Edit
                  </button>
                  <button className="bg-red-500 text-red p-2 rounded-md mr-2" onClick={() => handleDelete(product._id)}>
                    Delete
                  </button>
                </div>
            </div>
          )
        })}
      {showEditDialog && <EditDialog product={selectedProduct} onEdit={handleEdit} />}
      {showProductDialog && <AddProductDialog onAdd={handleAdd} />}
    </div><br/><br/>
    </Layout>
  )
}

// Edit selected product
function EditDialog({ product, onEdit }) {
  
  const [title, setTitle] = useState(product.title)
  const [message, setMessage] = useState(product.message)
  const [price, setPrice] = useState(product.price)
  const [category, setCategory] = useState(product.category)
  const [selectedFile, setselectedFile] = useState(product.selectedFile)


  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }
  
  const handlePriceChange = (event) => {
    setPrice(event.target.value)
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  const handleSelectedFileChange = (event) => {
    setselectedFile(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const updatedProduct = {
        title: title,
        message: message,
        price: price,
        category: category,
        selectedFile: selectedFile,

      }

      // const response = await axios.update(`http://localhost:4007/api/v1/items/${id}`)
      const response = await updateProduct(product._id, updatedProduct, true)
      console.log(response.data)
      onEdit(updatedProduct)

      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-medium mb-2">Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input type="text" id="title" value={title} onChange={handleTitleChange} className="border border-gray-300 w-full p-2 rounded-md" style={{borderStyle: 'solid', borderWidth: '2px'}} />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea id="description" value={message} onChange={handleMessageChange} className="border border-gray-300 w-full p-2 rounded-md" style={{borderStyle: 'solid', borderWidth: '2px'}} />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
              Price
            </label>
            <input type="text" id="price" value={price} onChange={handlePriceChange} className="border border-gray-300 w-full p-2 rounded-md" style={{borderStyle: 'solid', borderWidth: '2px'}} />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <input type="text" id="description" value={category} onChange={handleCategoryChange} className="border border-gray-300 w-full p-2 rounded-md" style={{borderStyle: 'solid', borderWidth: '2px'}} />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              SelectedFile
            </label>
            <textarea id="description" value={selectedFile} onChange={handleSelectedFileChange} className="border border-gray-300 w-full p-2 rounded-md" style={{borderStyle: 'solid', borderWidth: '2px'}} />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mr-2">
              Save
            </button>
            <button onClick={() => setShowEditDialog(false)} className="bg-red-500 text-white p-2 rounded-md">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function AddProductDialog({ onAdd }) {
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [seller, setSeller] = useState('')
  const [selectedFile, setSelectedFile] = useState('')

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }
  
  const handleSellerChange = (event) => {
    setSeller(event.target.value)
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value)
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  const handleSelectedFileChange = (event) => {
    setSelectedFile(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const newProduct = {
        title: title,
        message: message,
        price: price,
        seller: seller,
        category: category,
        selectedFile: selectedFile,
      }

      
      const response = await createProduct(newProduct, true)
      console.log(response.data) 
      onAdd(newProduct)

      // Reset the form
      setTitle('')
      setMessage('')
      

      // Auto-refresh the parent component to show the updated product

      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-medium mb-2">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input type="text" id="title" value={title} onChange={handleTitleChange} className="border border-gray-300 w-full p-2 rounded-md" style={{borderStyle: 'solid', borderWidth: '2px'}} />

          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea id="description" value={message} onChange={handleMessageChange} className="border-gray-300 border w-full p-2 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Price
            </label>
            <input type="text" id="price" value={price} onChange={handlePriceChange} className="border border-gray-300 w-full p-2 rounded-md" style={{borderStyle: 'solid', borderWidth: '2px'}} />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
              Seller
            </label>
            <input type="text" id="price" value={seller} onChange={handleSellerChange} className="border border-gray-300 w-full p-2 rounded-md" style={{borderStyle: 'solid', borderWidth: '2px'}} />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <input type="text" id="price" value={category} onChange={handleCategoryChange} className="border border-gray-300 w-full p-2 rounded-md" style={{borderStyle: 'solid', borderWidth: '2px'}} />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
              Selected File
            </label>
            <input type="text" id="price" value={selectedFile} onChange={handleSelectedFileChange} className="border border-gray-300 w-full p-2 rounded-md" style={{borderStyle: 'solid', borderWidth: '2px'}} />
          </div>
          
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mr-2">
              Add
            </button>
            <button onClick={() => setShowAddDialog(false)} className="bg-red-500 text-white p-2 rounded-md">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductList
