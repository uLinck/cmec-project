import colors from "../../../../Styles/colors"
import Doc from "../../../Templates/DocTemplate"
import { Box } from "@mui/material"

const Cooperativa = () => {
  return (
    <Box sx={{ width: "80vw", maxWidth: "100vw" }}>
      <Doc
        category="Colaboradores"
        title="Cooperativa"
        description={
          <Box
            sx={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <span>
              A Cooperativa Morungavense de Educação e Cultura - CMEC é a
              mantenedora do Colégio Santa Luzia.
            </span>
            <span>
              A Cooperativa foi fundada em 2007 e atualmente tem 21 associados.
            </span>
          </Box>
        }
      >
        <Box sx={{ justifyContent: "column" }}>
          <h3>Conselho Administrativo</h3>
          <Box
            sx={{
              display: "flex"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <p
                  style={{
                    margin: "5px 0"
                  }}
                >
                  César Valmor Aguiar
                </p>
                <span
                  style={{
                    color: colors.accent80,
                    marginLeft: "5px"
                  }}
                >
                  Diretor
                </span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <p
                  style={{
                    margin: "5px 0"
                  }}
                >
                  Hilda Luzia da Silva Nascimento
                </p>
                <span
                  style={{
                    color: colors.accent80,
                    marginLeft: "5px"
                  }}
                >
                  Vice Diretora
                </span>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "30px"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <p
                  style={{
                    margin: "5px 0"
                  }}
                >
                  Luiz carlos
                </p>
                <span
                  style={{
                    color: colors.accent80,
                    marginLeft: "5px"
                  }}
                >
                  Monitor
                </span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <p
                  style={{
                    margin: "5px 0"
                  }}
                >
                  João de Deus Fontoura Borges
                </p>
                <span
                  style={{
                    color: colors.accent80,
                    marginLeft: "5px"
                  }}
                >
                  Funcionário
                </span>
              </Box>
            </Box>
          </Box>
          <h3>Cooperativados</h3>
          <Box
            sx={{
              display: "flex"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <p
                  style={{
                    margin: "5px 0"
                  }}
                >
                  César Valmor Aguiar
                </p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <p
                  style={{
                    margin: "5px 0"
                  }}
                >
                  Hilda Luzia da Silva Nascimento
                </p>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "30px"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <p
                  style={{
                    margin: "5px 0"
                  }}
                >
                  Luiz carlos
                </p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <p
                  style={{
                    margin: "5px 0"
                  }}
                >
                  João de Deus Fontoura Borges
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Doc>
    </Box>
  )
}

export default Cooperativa
