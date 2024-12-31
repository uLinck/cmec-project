import { Box } from "@mui/system";
import { Fade } from "react-awesome-reveal";
import { Activity, TActivityData } from "./activity";

export const Cards = (data: TActivityData[]) => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        width: "100%",
        flexDirection: "column",
        gap: "7rem",
      }}
    >
      {data.map((activity, index) => (
        <Fade
          direction={index % 2 === 0 ? "left" : "right"}
          damping={0.2}
          triggerOnce
          style={{
            display: "flex",
            justifyContent: index % 2 === 0 ? "start" : "end",
          }}
          fraction={0.5}
          duration={1500}
        >
          <Activity {...activity} />
        </Fade>
      ))}
    </Box>
  );
};

export const CardsMobile = (data: TActivityData[]) => {
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        width: "100%",
        flexDirection: "column",
        gap: "7em",
      }}
    >
      {data.map((activity) => (
        <Fade
          direction="right"
          damping={0.2}
          triggerOnce
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          fraction={0.5}
          duration={1500}
        >
          <Activity {...activity} />
        </Fade>
      ))}
    </Box>
  );
};
