import colors from "../../Styles/colors"

export const HeaderLayout = () => {
  return (
    <div
      style={{
        height: "8%",
        background: `linear-gradient(20deg, ${colors.neutral60} 30%, ${colors.primary60} 100%, ${colors.primary60} 100%)`
      }}
    />
  )
}
