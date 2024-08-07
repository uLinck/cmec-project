import { Box, Button, Modal, TextField } from "@mui/material";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import React from "react";
import colors from "../../Styles/colors";
import { Suggestion } from "./suggestion";

export default function Search() {
    const [open, setOpen] = React.useState(false)

    const [suggestionsFilter, setSuggestionsFilter] = React.useState("")

    const suggestions = [
        "Onde fica?",
        "Quanto é a mensalidade?"
    ].filter(description => description.toLowerCase().includes(suggestionsFilter.toLowerCase()))

    return (
        <div
            style={{
                font: colors.neutral40
            }}
        >
            <Button
                onClick={() => setOpen(true)}
                variant="contained"
                startIcon={<MagnifyingGlass size={16} color={colors.neutral40} />}
                sx={{
                    textTransform: "none",
                    padding: "0.25rem 1.5rem",
                    width: "12rem",
                    fontWeight: "normal",
                    color: colors.neutral0,
                    backgroundColor: colors.neutral60,
                    justifyContent: "flex-start",
                    '&:hover': {
                        backgroundColor: colors.neutral80
                    },
                }}>
                Pesquisar...
            </Button>
            <Modal
                disableRestoreFocus
                open={open}
                onClose={() => {
                    setOpen(false)
                    setSuggestionsFilter("")
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "30%",
                        left: "50%",
                        transform: "translate(-50%, -30%)",
                        backgroundColor: colors.neutral80,
                        border: "1.5px solid " + colors.neutral20,
                        borderRadius: "10px",
                        width: "25rem",
                        minHeight: "20vh",
                        paddingY: "0.5rem",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            paddingX: "1rem",
                        }}
                    >
                        <Box sx={{ marginRight: "0.5rem" }}>
                            <MagnifyingGlass size={18} color={colors.neutral40} />
                        </Box>,
                        <TextField
                            fullWidth
                            placeholder="Pesquise por algo..."
                            variant="standard"
                            autoFocus
                            InputProps={{
                                disableUnderline: true,
                            }}
                            onChange={e => setSuggestionsFilter(e.target.value)}
                        />
                        <Button onClick={() => setOpen(false)}
                            sx={{
                                all: "unset",
                                height: "18px",
                                marginLeft: "0.5rem",
                                '&:hover': {
                                    all: "unset",
                                    height: "18px",
                                    marginLeft: "0.5rem",
                                    cursor: "pointer",
                                }
                            }}>
                            <X size={18} color={colors.neutral40} />
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            borderTop: "1px solid " + colors.neutral40,
                            paddingTop: "0.2rem",
                        }}
                    >
                        <Box
                            sx={{
                                marginTop: "0.2rem",
                                marginLeft: "1rem",
                                marginBottom: "0.4rem",
                                color: colors.neutral40,
                                fontSize: "0.8em",
                            }}
                        >
                            Sugestões
                        </Box>
                        {suggestions.map(description => <Suggestion description={description} search={suggestionsFilter} />)}
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
