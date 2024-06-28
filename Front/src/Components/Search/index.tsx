import { Button } from "@mui/material";
import { MagnifyingGlass } from "phosphor-react";

export default function Search() {
    return (
        <Button
            variant="contained"
            startIcon={<MagnifyingGlass size={16} />}
            sx={{
                textTransform: "none",
                padding: "0.25rem 1.5rem",
                width: "25vw",
                fontWeight: "normal"
            }}>
            Pesquisar...
        </Button>
    );
}
