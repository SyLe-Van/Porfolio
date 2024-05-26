import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Landing,
  Skills,
  Education,
  Contacts,
  Projects,
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
      <Projects />
      <Contacts />
    </div>
  );
}

export default Main;
