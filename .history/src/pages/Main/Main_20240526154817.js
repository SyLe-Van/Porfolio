import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  Skills,
  Testimonials,
  Blog,
  Education,
  Experience,
  Contacts,
  Projects,
  Services,
  Achievement,
} from "../../components";
import { headerData } from "../../data/headerData";

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <Education />
      <Skills />
      {/* <Experience /> */}
      <Projects />
      {/* <Achievement /> */}
      {/* <Services /> */}
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
