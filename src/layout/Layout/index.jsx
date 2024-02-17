import "./Layout.scss";

import About from "../../components/About";
import Contact from "../../components/Contact";
import Resume from "../../components/Resume";
import Projects from "../../components/Projects";

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
};
export default Layout;
