import { Container } from "@mui/system"
import { Outlet } from "react-router-dom"
import AppFooter from "../component/layout/footer"
// import NavBar from "../component/layout/nav"

export default function MainLayout() {
  return (
    <Container disableGutters maxWidth={false}>
      {/* <NavBar dark /> */}
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </Container>
  )
}
