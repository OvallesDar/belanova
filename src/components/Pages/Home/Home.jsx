import HomeHeader from "./components/HomeHeader"
import HomeFirstSection from "./components/HomeFirstSection"
import HomeCircleLogo from "./components/HomeCircleLogo"
import HomeCardImageButton from "./components/HomeCardImageButton"
import ContactForm from "../../Common/ContactForm"

function Home() {
  return (
    <>
      <HomeHeader />
      <HomeFirstSection />
      <HomeCircleLogo />
      <HomeCardImageButton/>
      <ContactForm/>
    </>
  )
}

export default Home