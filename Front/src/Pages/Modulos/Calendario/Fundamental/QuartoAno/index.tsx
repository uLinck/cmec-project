import { Box } from "@mui/material"
import { CalendarioTemplate } from "../../../../Templates/CalendarioTemplate"
import { Card } from "../../components/Card"

export const QuartoAno = () => {
  return (
    <Box sx={{ width: "85vw", maxWidth: "100vw" }}>
      <CalendarioTemplate
        title="4° ano do fundamental - Disciplinas"
        subtitle="Saiba as datas das provas e trabalhos de suas disciplinas!"
      >
        <Card
          title="Matemática"
          tags={["28/06 - Trabalho", "08/07 - Prova "]}
        />
        <Card
          title="Matemática"
          tags={["28/06 - Trabalho", "08/07 - Prova "]}
        />
        <Card
          title="Matemática"
          tags={["28/06 - Trabalho", "08/07 - Prova "]}
        />
        <Card
          title="Matemática"
          tags={["28/06 - Trabalho", "08/07 - Prova "]}
        />
        <Card
          title="Matemática"
          tags={["28/06 - Trabalho", "08/07 - Prova "]}
        />
        <Card
          title="Matemática"
          tags={["28/06 - Trabalho", "08/07 - Prova "]}
        />
      </CalendarioTemplate>
    </Box>
  )
}
