import Heading from '../../common/heading'
import Section from '../../common/section'

import ItemSlider from './itemSlider'

const ItemCategories = () => {
  return (
    <>
      <Section className="bg-gray-100">
        <Heading>Body-Lotions</Heading>
        <ItemSlider />
      </Section>
      <Section className="bg-white">
        <Heading>Scrubs</Heading>
        <ItemSlider />
      </Section>
      <Section className="bg-gray-100">
        <Heading>Shampoo</Heading>
        <ItemSlider />
      </Section>
    </>
  )
}

export default ItemCategories
