import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { debounce } from 'lodash'
import Heading from '../../common/heading'
import Section from '../../common/section'

import ItemSlider from './itemSlider'
import { getAllProducts } from '../../../services/item'

const ItemCategories = () => {
  // const [itemsRes, setItemRes] = useState(null)

  // const refresh = debounce(() => {
  //   getAllProducts().then(({ data }) => setItemRes(data))
  // }, 300)

  // useEffect(() => {
  //   refresh()
  // }, [])

  const [itemsRes, setItems] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:4006/api/v1/items')
      .then((response) => {
        setItems(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <Section className="bg-gray-100">
        <Heading>Body-Lotions</Heading>
        {itemsRes && <ItemSlider data={itemsRes.filter((item) => item.category === 'Body Lotion')} />}
      </Section>
      <Section className="bg-white">
        <Heading>Scrubs</Heading>
        {itemsRes && <ItemSlider data={itemsRes.filter((item) => item.category === 'Scrub')} />}
      </Section>
      <Section className="bg-gray-100">
        <Heading>Shampoo</Heading>
        {itemsRes && <ItemSlider data={itemsRes.filter((item) => item.category === 'Shampoo')} />}
      </Section>
    </>
  )
}

export default ItemCategories
