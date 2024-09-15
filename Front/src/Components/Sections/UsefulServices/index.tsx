import { Box } from "@mui/material"
import colors from "../../../Styles/colors"
import { Service } from "./service"
import { Hoodie, Hourglass, Van } from "@phosphor-icons/react"
import { Fade } from "react-awesome-reveal"

export const UsefulServices = () => {
    return (
        <Box
            sx={{
                maxWidth: "100vw",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                paddingY: "60vh",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    alignSelf: "center",
                    width: "60%",
                }}
            >
                <h1
                    style={{
                        color: colors.accent100,
                        marginBottom: "1rem",
                        fontWeight: "normal"
                    }}
                >
                    Serviços Úteis
                </h1>
                <p
                    style={{
                        color: colors.neutral0,
                        fontSize: "1.3em",
                        textIndent: 32
                    }}
                >
                    Em nossa escola, disponibilizamos alguns serviços que podem ser úteis para o aluno, a fim de que ele tenha uma experiência melhor conosco!
                </p>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "3rem",
                }}
            >
                <Fade
                    direction="up"
                    cascade
                    damping={0.2}
                    triggerOnce
                >
                    <Service icon={<Hoodie size={60} color={colors.accent100} />} name="Uniformes" personName="RS 020 - Morungava" contacts={["(51) 3486-1192"]} />
                    <Service icon={<Van size={60} color={colors.accent100} />} name="Van Escolar" personName="Severo Tur" contacts={["(51) 3432-0212", "(51) 3106-3217", "(51) 9 9125-7619"]} />
                    <Service icon={<Van size={60} color={colors.accent100} />} name="Van Escolar" personName="Laércio" contacts={["(51) 9 9652-4683", "(51) 9 8431-7455"]} />
                </Fade>
            </Box>
        </Box >
    )
}
