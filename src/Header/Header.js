import { AppBar, Container } from "@mui/material";
import './Header.css';


function Header() {
  return(
    <AppBar className="head" position="fixed">
      <Container maxWidth="xl">
        <h1 className="title">Наш Суперкофе</h1>
      </Container>
    </AppBar>
  );
}

export default Header;