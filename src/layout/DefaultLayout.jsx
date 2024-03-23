import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function DefaultLayout(props) {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
}

export default DefaultLayout;
