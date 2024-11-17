import Doc from "../../Templates/DocTemplate";
import { Box } from "@mui/material";

const Instituicao = () => {
  return (
    <Box sx={{ height: "100vh", width: "90vw", maxWidth: "100vw" }}>
      <Doc
        category="Testes"
        title="Teste 1"
        description="Teste realizado por macacos"
      >
        <Box>Cuzinho!!!!</Box>
      </Doc>
    </Box>
  );
};

export default Instituicao;
