import { Link } from "react-router-dom"
import colors from "../../Styles/colors"
import { TRoutes } from "./routes"

type TItem = {
  item: TRoutes
  active: boolean
}

export const Item = ({ item, active }: TItem) => {
  return (
    <Link
      style={{
        listStyle: "none",
        borderLeft: `1px solid ${active ? colors.neutral0 : colors.neutral40}`,
        color: active ? colors.neutral0 : colors.neutral40,
        cursor: "pointer",
        padding: "10px 10px",
        textDecoration: "none",
        fontSize: "15px",
        transition: "all 0.3s"
      }}
      to={item.value}
    >
      {item.name}
    </Link>
  )
}
