import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Navbar } from "react-bootstrap";
import { ChakraProvider, Button, useBoolean } from "@chakra-ui/react";

import MyNFT from "./img/myNFT.png";
import logo from "./img/DcofferLogoWord.png";
import FB from "./img/icon/Facebook.png";
import DC from "./img/icon/Discord.png";
import IG from "./img/icon/Instagram.png";
import TG from "./img/icon/Telegram.png";
import TW from "./img/icon/Twitter.png";
import FB1 from "./img/icon/FB1.png";
import DC1 from "./img/icon/DC1.png";
import IG1 from "./img/icon/IG1.png";
import TG1 from "./img/icon/TG1.png";
import TW1 from "./img/icon/TW1.png";

const expand = "lg";

const navbarstyle = {
  opacity: "0.9",
  boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.1 )",
};

const column_center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const row_center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
};

const icon = [
  { icon: FB, hover: FB1, url: "https://www.facebook.com/" },
  { icon: DC, hover: DC1, url: "https://www.facebook.com/" },
  { icon: IG, hover: IG1, url: "https://www.facebook.com/" },
  { icon: TG, hover: TG1, url: "https://www.facebook.com/" },
  { icon: TW, hover: TW1, url: "https://www.facebook.com/" },
];

function Socialmedia(i) {
  const [flag, setFlag] = useBoolean();

  return (
    <div
      onMouseEnter={setFlag.on}
      onMouseLeave={setFlag.off}
      style={row_center}
    >
      {flag ? (
        <a href={icon[i].url} target="_blank" rel="noopener noreferrer">
          <img
            alt="dcoffer"
            src={icon[i].icon}
            width="35"
            style={{ margin: "10px" }}
          />
        </a>
      ) : (
        <a href={icon[i].url} target="_blank" rel="noopener noreferrer">
          <img
            alt="dcoffer"
            src={icon[i].hover}
            width="35"
            style={{ margin: "10px" }}
          />
        </a>
      )}
    </div>
  );
}

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar
          fixed="top"
          style={navbarstyle}
          key={expand}
          bg="light"
          expand={expand}
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <img
                alt="dcoffer"
                src={logo}
                width="120"
                className="d-inline-block align-center"
              />
            </Navbar.Brand>

            <Button colorScheme="blue">Launch App</Button>
          </Container>
        </Navbar>
        <body className="App-header">
          <Container>
            <Row className="justify-content-md-center">
              <Col style={row_center} md="6">
                <img
                  alt="dcoffer"
                  src={MyNFT}
                  width="600"
                  className="d-inline-block align-center"
                />
              </Col>
              <Col style={column_center} md="6">
                <img
                  alt="dcoffer"
                  src={logo}
                  width="70%"
                  className="d-inline-block align-center"                                 
                />
                <h1 style={{margin:"30px"}} >You'll Never Have Me !!</h1>
                <div style={row_center}>
                  {Socialmedia(0)}
                  {Socialmedia(1)}
                  {Socialmedia(2)}
                  {Socialmedia(3)}
                  {Socialmedia(4)}
                </div>
                <Button colorScheme="blue" style={{ marginTop: "30px" }}>
                  Launch App
                </Button>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row style={{height: "10000px"}}>
              <Col style={column_center} md="6">
               
              </Col>
              <Col style={column_center} md="6">
                
              </Col>
            </Row>
          </Container>          
        </body>
      </div>
    </ChakraProvider>
  );
}

export default App;
