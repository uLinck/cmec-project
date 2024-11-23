import React from "react"
import { Sidebar } from "../Sidebar"
import { Outlet } from "react-router-dom"
import colors from "../../Styles/colors"
import { HeaderLayout } from "./HeaderLayout"

export const PageLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: colors.neutral60
      }}
    >
      <Sidebar />
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        {/* Descomentar esse cara quando tivermos tempo para estruturar melhor o layout <HeaderLayout /> */}
        <Outlet />
      </div>
    </div>
  )
}
