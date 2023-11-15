import { Flex } from "antd"
import { Header } from "antd/es/layout/layout"
import "./header.css"

export function TopToolbar() {
  return (
    <Header className="header">
      <Flex align="start">Ratings</Flex>
    </Header>
  )
}
