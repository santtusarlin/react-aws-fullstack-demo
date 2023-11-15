import { Layout } from "antd"
import "./App.css"
import { TopToolbar } from "../../components/header/header"
import { Sidenav } from "../../components/sidenav/sidenav"
import { Content, Footer } from "antd/es/layout/layout"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <Layout className="layout">
        <TopToolbar />
        <Layout>
          <Sidenav />
          <Content>
            <Outlet />
          </Content>
        </Layout>
        <Footer className="footer">React Demo - Santtu Sarlin</Footer>
      </Layout>
    </>
  )
}

export default App
