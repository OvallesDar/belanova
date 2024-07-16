import AllCarpentryCategories from "./components/AllCarpentryCategories"
import CarpentryHeader from "./components/CarpentryHeader"
import HowWeWork from "./components/HowWeWork"
export default function page() {
  return (
    <>
        <CarpentryHeader />
        <AllCarpentryCategories />
        <HowWeWork />
    </>
  )
}