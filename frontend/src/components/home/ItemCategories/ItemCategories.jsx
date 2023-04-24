import Heading from '../../common/heading'
import Section from '../../common/section'

import ItemSlider from '../../common/itemSlider'

const ItemCategories = () => {
  return (
    <>
      <Section>
        <Heading>Body-Lotions</Heading>
        <ItemSlider />
      </Section>
      <Section>
        <Heading>Scrubs</Heading>
        <ItemSlider />
      </Section>
      <Section>
        <Heading>Shampoo</Heading>
        <ItemSlider />
      </Section>
    </>
  )
}

export default ItemCategories
