import colors from "../../../../Styles/colors";
import Doc from "../../../Templates/DocTemplate";
import { Box } from "@mui/material";
import { AccordionColab } from "../Components/Accordion";
import React, { useState } from "react";

// Todo: converter accordions em array lembre de sempre incrementa mais 1 quando for criar um novo acordion no id porque essa bosta compartilha o mesmo

const Instituicao = () => {
  const [expanded, setExpanded] = useState<string[]>([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded((prevExpanded) => {
        if (newExpanded) {
          return [...prevExpanded, panel];
        } else {
          return prevExpanded.filter((item) => item !== panel);
        }
      });
    };

  console.log(expanded);

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
                  César Valmor Aguiar
                </p>
                <span
                  style={{
                    color: colors.accent80,
                    marginLeft: "5px",
                  }}
                >
                  Diretor administrativo
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
                  Dani Pezente Schuller
                </p>
                <span
                  style={{
                    color: colors.accent80,
                    marginLeft: "5px",
                  }}
                >
                  Diretora pedagógica
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
                  Janice Beatris Diogo
                </p>
                <span
                  style={{
                    color: colors.accent80,
                    marginLeft: "5px",
                  }}
                >
                  Supervisora pedagógica
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
                  Maria Fabiana da Silva
                </p>
                <span
                  style={{
                    color: colors.accent80,
                    marginLeft: "5px",
                  }}
                >
                  Auxiliar administrativo
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
                  Maria Eduarda Jacobsen
                </p>
                <span
                  style={{
                    color: colors.accent80,
                    marginLeft: "5px",
                  }}
                >
                  Monitora
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
                  João de Deus Fontoura Borges
                </p>
                <span
                  style={{
                    color: colors.accent80,
                    marginLeft: "5px",
                  }}
                >
                  Funcionário
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
                  Rosangela Aparecida Alves
                </p>
                <span
                  style={{
                    color: colors.accent80,
                    marginLeft: "5px",
                  }}
                >
                  Funcionária
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
                  Thais Silveira Leal
                </p>
                <span
                  style={{
                    color: colors.accent80,
                    marginLeft: "5px",
                  }}
                >
                  Funcionária
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
                  Silvani da Silva Pedroso
                </p>
                <span
                  style={{
                    color: colors.accent80,
                    marginLeft: "5px",
                  }}
                >
                  Funcionária
                </span>
              </Box>
            </Box>
          </Box>
          <h3>Professores</h3>
          <Box
            sx={{
              display: "flex",
              gap: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Box>
                <AccordionColab
                  id="panel1"
                  expanded={expanded.includes("panel1")}
                  handleChange={handleChange("panel1")}
                  title="Mariana Felker de Moraes Lemos"
                  data={[
                    {
                      name: "Disciplinas",
                      tags: [
                        "3° ano - Fundamental.",
                        "Sociologia - 1° Médio.",
                        "Iniciação Científica - Médio.",
                        "Projeto de Vida - Médio.",
                      ],
                    },
                  ]}
                  key={"panel1"}
                />
              </Box>
              <Box>
                <AccordionColab
                  id="panel2"
                  expanded={expanded.includes("panel2")}
                  handleChange={handleChange("panel2")}
                  title="Carine Aparecida Rech Ferreira"
                  data={[
                    {
                      name: "Disciplinas",
                      tags: ["Pré 5."],
                    },
                  ]}
                  key={"panel2"}
                />
              </Box>
              <Box>
                <AccordionColab
                  id="panel11"
                  expanded={expanded.includes("panel11")}
                  handleChange={handleChange("panel11")}
                  title="Vitor Rhoden Sperb"
                  data={[
                    {
                      name: "Disciplinas",
                      tags: [
                        "Geografia - 6° ano ao 3° do Médio.",
                        "Filosofia - 1° ano Médio",
                      ],
                    },
                  ]}
                  key={"panel11"}
                />
              </Box>
              <Box>
                <AccordionColab
                  id="panel3"
                  expanded={expanded.includes("panel3")}
                  handleChange={handleChange("panel3")}
                  title="Renata Cornely"
                  data={[
                    {
                      name: "Disciplinas",
                      tags: [
                        "1° ano - Fundamental.",
                        "Artes - 6° ano ao 1° Médio.",
                        "Espanhol - 6° ao 9° ano.",
                      ],
                    },
                  ]}
                  key={"panel3"}
                />
              </Box>
              <Box>
                <AccordionColab
                  id="panel4"
                  expanded={expanded.includes("panel4")}
                  handleChange={handleChange("panel4")}
                  title="Renata Braun Falkowski"
                  data={[
                    {
                      name: "Disciplinas",
                      tags: ["2° ano - Fundamental"],
                    },
                  ]}
                  key={"panel4"}
                />
              </Box>
              <Box>
                <AccordionColab
                  id="panel5"
                  expanded={expanded.includes("panel5")}
                  handleChange={handleChange("panel5")}
                  title="Natália Momberger"
                  data={[
                    {
                      name: "Disciplinas",
                      tags: ["4° ano - Fundamental."],
                    },
                  ]}
                  key={"panel5"}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Box>
                <AccordionColab
                  id="panel6"
                  expanded={expanded.includes("panel6")}
                  handleChange={handleChange("panel6")}
                  title="Maria Emília Narciso Barcelos"
                  data={[
                    {
                      name: "Disciplinas",
                      tags: [
                        "5° ano - Fundamental.",
                        "Língua portuguesa - Médio",
                        "Literatura - Médio",
                        "Produção textual - 1° Médio",
                      ],
                    },
                  ]}
                  key={"panel6"}
                />
              </Box>
              <Box>
                <AccordionColab
                  id="panel7"
                  expanded={expanded.includes("panel7")}
                  handleChange={handleChange("panel7")}
                  title="Rosângela de Souza Narcizo"
                  data={[
                    {
                      name: "Disciplinas",
                      tags: ["5° ano - Fundamental."],
                    },
                  ]}
                  key={"panel7"}
                />
              </Box>
              <Box>
                <AccordionColab
                  id="panel8"
                  expanded={expanded.includes("panel8")}
                  handleChange={handleChange("panel8")}
                  title="Luana Gomes"
                  data={[
                    {
                      name: "Disciplinas",
                      tags: ["Língua inglesa - Pré ao 5° ano do Fundamental."],
                    },
                  ]}
                  key={"panel8"}
                />
              </Box>
              <Box>
                <AccordionColab
                  id="panel9"
                  expanded={expanded.includes("panel9")}
                  handleChange={handleChange("panel9")}
                  title="Liliane"
                  data={[
                    {
                      name: "Disciplinas",
                      tags: ["Educação física - Pré ao 9° ano do Fundamental."],
                    },
                  ]}
                  key={"panel9"}
                />
              </Box>
              <Box>
                <AccordionColab
                  id="panel10"
                  expanded={expanded.includes("panel10")}
                  handleChange={handleChange("panel10")}
                  title="Luís Guilherme Machado"
                  data={[
                    {
                      name: "Disciplinas",
                      tags: ["Educação física - Médio."],
                    },
                  ]}
                  key={"panel10"}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Box>
                <AccordionColab
                  id="panel12"
                  expanded={expanded.includes("panel12")}
                  handleChange={handleChange("panel12")}
                  title="Márcia"
                  data={[
                    {
                      name: "Disciplinas",
                      tags: [
                        "Língua portuguesa - 6° ao 9° ano do Fundamental.",
                      ],
                    },
                  ]}
                  key={"panel12"}
                />
              </Box>
              <Box>
                <AccordionColab
                  id="panel13"
                  expanded={expanded.includes("panel13")}
                  handleChange={handleChange("panel13")}
                  title="Júlia Machado Petry"
                  data={[
                    {
                      name: "Disciplinas",
                      tags: ["História - 6° ao 3° ano do Médio"],
                    },
                  ]}
                  key={"panel13"}
                />
              </Box>
              <Box>
                <AccordionColab
                  id="panel14"
                  expanded={expanded.includes("panel14")}
                  handleChange={handleChange("panel14")}
                  title="Roberto de Oliveira Silveira"
                  data={[
                    {
                      name: "Disciplinas",
                      tags: ["Língua Inglesa - 6° ao 3° ano do Médio"],
                    },
                  ]}
                  key={"panel14"}
                />
              </Box>
              <Box>
                <AccordionColab
                  id="panel15"
                  expanded={expanded.includes("panel15")}
                  handleChange={handleChange("panel15")}
                  title="Tatiana Brambila Rockenbach"
                  data={[
                    {
                      name: "Disciplinas",
                      tags: ["Física - Médio"],
                    },
                  ]}
                  key={"panel15"}
                />
              </Box>
              <Box>
                <AccordionColab
                  id="panel16"
                  expanded={expanded.includes("panel16")}
                  handleChange={handleChange("panel16")}
                  title="Adriana dos Santos Lemos"
                  data={[
                    {
                      name: "Disciplinas",
                      tags: ["Química - Médio"],
                    },
                  ]}
                  key={"panel16"}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Doc>
    </Box>
  );
};

export default Instituicao;
