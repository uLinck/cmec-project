import { Box } from "@mui/material";
import colors from "../../../Styles/colors";

type TServiceData = {
  icon: JSX.Element;
  name: string;
  personName?: string;
  contacts: string[];
};

export const Service = (data: TServiceData) => {
  return (
    <Box
      sx={{
        minHeight: "20vh",
        backgroundColor: colors.primary60,
        height: "260px",
        display: "flex",
        flexDirection: "column",
        color: colors.neutral0,
        paddingX: "5rem",
        paddingY: "2rem",
        borderRadius: "1rem",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          marginBottom: "1.5rem",
        }}
      >
        <Box sx={{ marginBottom: "1.5rem" }}>{data.icon}</Box>
        <h1 style={{ margin: "0", color: colors.accent80 }}>{data.name}</h1>
        <h3 style={{ margin: "0" }}>{data.personName}</h3>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.8rem",
        }}
      >
        {data.contacts.map((c) => (
          <p style={{ margin: "0", color: "blue" }}>{c}</p>
        ))}
      </Box>
    </Box>
  );
};
