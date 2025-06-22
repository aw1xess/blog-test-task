import styled from "@emotion/styled";
import About from "./pages/About";
import Menu from "./components/Menu";
import { useState } from "react";
import Blog from "./pages/Blog";

const Container = styled.div`
  max-width: 1280px;
  padding: 2rem;
  margin: 0 auto;
`;

function App() {
  const [route, setRoute] = useState("about");

  return (
    <>
      <Menu currentRoute={route} setRoute={setRoute} />
      <Container>
        {route === "about" ? (
          <About />
        ) : route === "blog" ? (
          <Blog />
        ) : (
          "Page not found"
        )}
      </Container>
    </>
  );
}

export default App;
