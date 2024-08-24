import Banner from "../layout/banner/Banner"
import bannerImageSrc from "../../assets/img/radeon-banner.png"

const Home = () => {
  return (
    <>
      <Banner customClass="full-screen" src={bannerImageSrc}/>
    </>
  )
}

export default Home