import { Box, Button, Modal, TextField } from "@mui/material";
import { MagnifyingGlass, X, File } from "phosphor-react";
import React from "react";
import colors from "../../Styles/colors";
import { Suggestion } from "./suggestion";

export default function Search() {
    const [open, setOpen] = React.useState(false)

    const [suggestionsFilter, setSuggestionsFilter] = React.useState("")

    let suggestions = [
        <Suggestion icon={<File />} description="Quanto é a mensalidade?" search={suggestionsFilter} />,
        <Suggestion icon={<File />} description="Onde fica?" search={suggestionsFilter} />
    ]

    return (
        <div>
            <Button
                onClick={() => setOpen(true)}
                variant="contained"
                startIcon={<MagnifyingGlass size={16} />}
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
                        border: "1px solid " + colors.neutral20,
                        borderRadius: "10px",
                        width: "25rem",
                        minHeight: "20vh",
                        padding: "1rem 1rem",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Box sx={{ marginRight: "0.5rem" }}>
                            <MagnifyingGlass size={18} color={colors.neutral0} />
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
                        <Box onClick={() => setOpen(false)} sx={{ cursor: "pointer", height: "18px", marginLeft: "0.5rem" }}>
                            <X size={18} color={colors.neutral0} />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            borderTop: "1px solid " + colors.neutral40,
                            paddingTop: "1rem",
                        }}
                    >
                        {suggestions.filter(s => s.props.description.toLowerCase().includes(suggestionsFilter.toLowerCase()))}
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
