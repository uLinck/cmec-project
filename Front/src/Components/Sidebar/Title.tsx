import colors from "../../Styles/colors"

type TTitle = {
  title: string
}

export const Title = ({ title }: TTitle) => {
  return (
    <span
      style={{
        color: colors.neutral10,
        marginTop: 15,
        marginBottom: 15,
        textTransform: "capitalize",
        fontSize: "16px"
      }}
    >
      {title}
    </span>
  )
}
