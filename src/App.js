import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import GlobalStyle from "./components/Globalstyle";
import About from "./pages/About";
import Home from "./pages/Home";
import Indonesia from "./pages/Indonesia";
import Provinsi from "./pages/Provinsi";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/covid/indonesia" element={<Indonesia />} />
            <Route path="/covid/provinsi" element={<Provinsi />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
