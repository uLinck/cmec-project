import Doc from "../../Templates/DocTemplate"
import { Box } from "@mui/material"

const Instituicao = () => {
  return (
    <Box sx={{ height: "100vh", width: "80vw", maxWidth: "100vw" }}>
      <Doc
        category="Colaboradores"
        title="Instituição"
        description="Saiba quem são os colaboradores da instituição!"
      >
        <Box sx={{ justifyContent: "column" }}>
          <h3>Administração</h3>
          <p>César Valmor Aguiar</p>
        </Box>
      </Doc>
    </Box>
  )
}

export default Instituicao
