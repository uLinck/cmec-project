import { Box, Button, Modal } from "@mui/material";
import { MagnifyingGlass } from "phosphor-react";
import React from "react";
import colors from "../../Styles/colors";

export default function Search() {
    const [open, setOpen] = React.useState(false)
    return (
        <div>
            <Button
                onClick={() => setOpen(true)}
                variant="contained"
                startIcon={<MagnifyingGlass size={16} />}
                sx={{
                    textTransform: "none",
                    padding: "0.25rem 1.5rem",
                    width: "18vw",
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
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: colors.neutral80,
                    border: "0.75px solid " + colors.neutral40,
                    width: "400px",
                    height: "20vw"
                }}>

                </Box>
            </Modal>
        </div>
    );
}
