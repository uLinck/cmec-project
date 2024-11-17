import colors from "../../Styles/colors"
import logo from "../../Assets/Imgs/LogoWhiteM.svg"
import { useLocation } from "react-router-dom"
import { routesColab } from "./routes"
import { Item } from "./Item"

export const Sidebar = () => {
  const location = useLocation()

  const [, , moduloNome, moduloValor] = location.pathname.split("/")

  return (
    <div
      style={{
        width: "25%",
        backgroundColor: colors.neutral60
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "20px",
          marginTop: "10px"
        }}
      >
        <img src={logo} alt="Logo" width={80} />
        <span
          style={{
            color: colors.neutral10,
            marginTop: 15,
            marginBottom: 15,
            textTransform: "capitalize",
            fontSize: "16px"
          }}
        >
          {moduloNome}
        </span>
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column"
          }}
        >
          {moduloNome === "colaboradores" ? (
            routesColab.map(item => (
              <Item
                item={{
                  name: item.name,
                  value: `${moduloNome}/${item.value}`
                }}
                active={item.value === moduloValor}
              />
            ))
          ) : (
            <div>colocar itens do calendario</div>
          )}
        </ul>
      </div>
    </div>
  )
}
