import colors from "../../../../Styles/colors";
import Doc from "../../../Templates/DocTemplate";
import { Box } from "@mui/material";

const Cooperativa = () => {
  const cooperativados: string[] = [
    "Maria Emília Narciso Barcelos",
    "Éverton Belloli Moura",
    "João de Deus Fontoura Borges",
    "Joyce Vidal Sarmento",
    "Dani Cleura Pezente Schuller",
    "Adriana dos Santos Lemos",
    "Maria Fabiana da Silva",
    "Juraci Terezinha Pospichil",
    "Urubatan de Moura Souza",
    "Carine Aparecida Rech Ferreira",
    "Liliane Kersting Pereira",
    "Márcia Aparecida Stumpf Aguiar",
    "Roberto de Oliveira Silveira",
    "Mariana Felker de Moraes Lemos",
    "Leticia Pacheco Viegas Araújo",
    "Renata Cornely Rocha",
    "Natália Cristina Moberger",
    "Vitor Rhoden Sperb",
    "Rosângela de Souza Narcizo",
    "Renata da Silva Braun Falkowski",
    "Júlia Machado Petry",
    "Tatiana Brambila Rockenbach",
  ];

  const groupCooperativados = (list: string[], size: number): string[][] => {
    if (!Array.isArray(list)) return [];
    const grouped: string[][] = [];
    for (let i = 0; i < list.length; i += size) {
      grouped.push(list.slice(i, i + size));
    }
    return grouped;
  };

  const groupedCooperativados = groupCooperativados(cooperativados, 3);

  return (
    <Box sx={{ width: "80vw", maxWidth: "100vw" }}>
      <Doc
        category="Colaboradores"
        title="Cooperativa"
        description={
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>
              A Cooperativa Morungavense de Educação e Cultura - CMEC é a
              mantenedora do Colégio Santa Luzia.
            </span>
            <span>
              A Cooperativa foi fundada em 2007 e atualmente tem 22 associados.
            </span>
          </Box>
        }
      >
        <Box sx={{ justifyContent: "column" }}>
          <h3>Conselho Administrativo</h3>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    margin: "5px 0",
                  }}
                >
                  Juraci Terezinha Pospichil
                </p>
                <span
                  style={{
                    color: colors.accent80,
                    marginLeft: "5px",
                  }}
                >
                  Presidente
                </span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    margin: "5px 0",
                  }}
                >
                  Carine Aparecida Rech Ferreira
                </p>
                <span
                  style={{
                    color: colors.accent80,
                    marginLeft: "5px",
                  }}
                >
                  Vice-presidente
                </span>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "30px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    margin: "5px 0",
                  }}
                >
                  Mariana Felker de Moraes Lemos
                </p>
                <span
                  style={{
                    color: colors.accent80,
                    marginLeft: "5px",
                  }}
                >
                  Secretária
                </span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    margin: "5px 0",
                  }}
                >
                  Joyce Vidal Sarmento
                </p>
                <span
                  style={{
                    color: colors.accent80,
                    marginLeft: "5px",
                  }}
                >
                  Tesoureira
                </span>
              </Box>
            </Box>
          </Box>

          <h3>Cooperativados</h3>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {groupedCooperativados.map((group, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  gap: "20px",
                }}
              >
                {group.map((name, idx) => (
                  <p
                    key={idx}
                    style={{
                      margin: "5px 0",
                      color: colors.primary60,
                    }}
                  >
                    {name}
                  </p>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Doc>
    </Box>
  );
};

export default Cooperativa;
