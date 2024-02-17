import "./Layout.scss";

import About from "../../components/About";
import Services from "../../components/Services";
import Contact from "../../components/Contact";
import Resume from "../../components/Resume";
import Projects from "../../components/Projects";

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <About />
      <Resume/>
      <Projects />
      {/* <Services /> */}
      <Contact />
    </div>
  );
};
export default Layout;
