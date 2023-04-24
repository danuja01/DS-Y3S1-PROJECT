import ItemCategories from '../components/home/ItemCategories/ItemCategories'
import Hero from '../components/home/hero'
import Layout from '../components/layout'

const Home = () => {
  return (
    <Layout title="Home">
      <Hero />
      <ItemCategories />
    </Layout>
  )
}

export default Home
