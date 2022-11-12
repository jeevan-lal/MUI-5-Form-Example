import { Outlet, Link } from "react-router-dom";
// Components
// import Header from "../../Components/Header"
// import Footer from "../../Components/Footer"

export default function ExampleLayout() {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}