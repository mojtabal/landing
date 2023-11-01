import About from "../../components/About/About";
import Blog from "../../components/Blog/Blog";
import Comment from "../../components/Comments/Comment";
import Contact from "../../components/Contact/Contact";
import Header from "../../components/Header/Header";
import Home from "../../components/Home/Home";
import Pricing from "../../components/Pricing/Pricing";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { Grid } from "@mui/material";
export default function MainPage() {
  return (
    <Grid maxWidth={"1500px"} margin={"auto"}>
      <Header />
      <Home />
      <About />
      <Services />
      <Pricing />
      <Blog />
      <Comment />
      <Contact />
      <Footer />
      <ScrollToTop />
    </Grid>
  );
}
