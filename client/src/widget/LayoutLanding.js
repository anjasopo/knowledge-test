import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const LayoutLanding = (props) => {
  return (
    <>
      <Navigation />
      <div className="container mx-auto">{props.children}</div>
      <Footer />
    </>
  );
};

export default LayoutLanding;
