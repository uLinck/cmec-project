import colors from "../../../../Styles/colors"
import Doc from "../../../Templates/DocTemplate"
import { Box } from "@mui/material"
import { AccordionColab } from "../Components/Accordion"
import React, { useState } from "react"

// Todo: converter accordions em array lembre de sempre incrementa mais 1 quando for criar um novo acordion no id porque essa bosta compartilha o mesmo

const Instituicao = () => {
  const [expanded, setExpanded] = useState<string[]>([])

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(prevExpanded => {
        if (newExpanded) {
          return [...prevExpanded, panel]
        } else {
          return prevExpanded.filter(item => item !== panel)
        }
      })
    }

  console.log(expanded)

  return (
    <Box sx={{ width: "80vw", maxWidth: "100vw" }}>
      <Doc
        category="Colaboradores"
        title="Instituição"
        description="Saiba quem são os colaboradores da instituição!"
      >
        <Box sx={{ justifyContent: "column" }}>
          <h3>Administração</h3>
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
          <h3>Professores</h3>
          <Box
            sx={{
              display: "flex",
              gap: 5
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1
              }}
            >
              <Box>
                <AccordionColab
                  id="panel1"
                  expanded={expanded.includes("panel1")}
                  handleChange={handleChange("panel1")}
                  title="Mariana Felker Gomes de Moraes"
                  data={[
                    {
                      name: "Turmas",
                      tags: ["Pré 5", "5º ano", "Médio"]
                    },
                    {
                      name: "Disciplinas",
                      tags: ["História", "Geografia", "Filosofia", "Sociologia"]
                    }
                  ]}
                  key={"panel1"}
                />
              </Box>
              <Box>
                <AccordionColab
                  id="panel2"
                  expanded={expanded.includes("panel2")}
                  handleChange={handleChange("panel2")}
                  title="Nome"
                  data={[
                    {
                      name: "Turmas",
                      tags: ["Pré 5", "5º ano", "Médio"]
                    },
                    {
                      name: "Disciplinas",
                      tags: ["História", "Geografia", "Filosofia", "Sociologia"]
                    }
                  ]}
                  key={"panel2"}
                />
              </Box>
              <Box>
                <AccordionColab
                  id="panel3"
                  expanded={expanded.includes("panel3")}
                  handleChange={handleChange("panel3")}
                  title="Nome"
                  data={[
                    {
                      name: "Turmas",
                      tags: ["Pré 5", "5º ano", "Médio"]
                    },
                    {
                      name: "Disciplinas",
                      tags: ["História", "Geografia", "Filosofia", "Sociologia"]
                    }
                  ]}
                  key={"panel3"}
                />
              </Box>
              <Box>
                <AccordionColab
                  id="panel4"
                  expanded={expanded.includes("panel4")}
                  handleChange={handleChange("panel4")}
                  title="Nome"
                  data={[
                    {
                      name: "Turmas",
                      tags: ["Pré 5", "5º ano", "Médio"]
                    },
                    {
                      name: "Disciplinas",
                      tags: ["História", "Geografia", "Filosofia", "Sociologia"]
                    }
                  ]}
                  key={"panel4"}
                />
              </Box>
              <Box>
                <AccordionColab
                  id="panel5"
                  expanded={expanded.includes("panel5")}
                  handleChange={handleChange("panel5")}
                  title="Nome"
                  data={[
                    {
                      name: "Turmas",
                      tags: ["Pré 5", "5º ano", "Médio"]
                    },
                    {
                      name: "Disciplinas",
                      tags: ["História", "Geografia", "Filosofia", "Sociologia"]
                    }
                  ]}
                  key={"panel5"}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1
              }}
            >
              <Box>
                <AccordionColab
                  id="panel6"
                  expanded={expanded.includes("panel6")}
                  handleChange={handleChange("panel6")}
                  title="Mariana Felker Gomes de Moraes"
                  data={[
                    {
                      name: "Turmas",
                      tags: ["Pré 5", "5º ano", "Médio"]
                    },
                    {
                      name: "Disciplinas",
                      tags: ["História", "Geografia", "Filosofia", "Sociologia"]
                    }
                  ]}
                  key={"panel6"}
                />
              </Box>
              <Box>
                <AccordionColab
                  id="panel7"
                  expanded={expanded.includes("panel7")}
                  handleChange={handleChange("panel7")}
                  title="Nome"
                  data={[
                    {
                      name: "Turmas",
                      tags: ["Pré 5", "5º ano", "Médio"]
                    },
                    {
                      name: "Disciplinas",
                      tags: ["História", "Geografia", "Filosofia", "Sociologia"]
                    }
                  ]}
                  key={"panel7"}
                />
              </Box>
              <Box>
                <AccordionColab
                  id="panel8"
                  expanded={expanded.includes("panel8")}
                  handleChange={handleChange("panel8")}
                  title="Nome"
                  data={[
                    {
                      name: "Turmas",
                      tags: ["Pré 5", "5º ano", "Médio"]
                    },
                    {
                      name: "Disciplinas",
                      tags: ["História", "Geografia", "Filosofia", "Sociologia"]
                    }
                  ]}
                  key={"panel8"}
                />
              </Box>
              <Box>
                <AccordionColab
                  id="panel9"
                  expanded={expanded.includes("panel9")}
                  handleChange={handleChange("panel9")}
                  title="Nome"
                  data={[
                    {
                      name: "Turmas",
                      tags: ["Pré 5", "5º ano", "Médio"]
                    },
                    {
                      name: "Disciplinas",
                      tags: ["História", "Geografia", "Filosofia", "Sociologia"]
                    }
                  ]}
                  key={"panel9"}
                />
              </Box>
              <Box>
                <AccordionColab
                  id="panel10"
                  expanded={expanded.includes("panel10")}
                  handleChange={handleChange("panel10")}
                  title="Nome"
                  data={[
                    {
                      name: "Turmas",
                      tags: ["Pré 5", "5º ano", "Médio"]
                    },
                    {
                      name: "Disciplinas",
                      tags: ["História", "Geografia", "Filosofia", "Sociologia"]
                    }
                  ]}
                  key={"panel10"}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Doc>
    </Box>
  )
}

export default Instituicao
