import React from "react";
import { Container } from "reactstrap";

import TopNav from "../navbar/TopNav";

const DefaultLayout = ({ children }) => (
  <>
    <div>
      <TopNav />
    </div>

    <Container>
      <br />
      {children}
    </Container>
  </>
);

export default DefaultLayout;
