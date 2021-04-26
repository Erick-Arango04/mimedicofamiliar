import ContenedorCard from "../Cards/ContenedorCard";
import ContenedorTestimonial from "../Cards/ContenedorTestimonial";
import Footer from "../Footer/Footer";
import Header from "../Head/Header";

const PagePrincipal = () => {
   return (
      <>
         <Header />
         <ContenedorCard />
         <ContenedorTestimonial />
         <Footer />
      </>
   );
};

export default PagePrincipal;
