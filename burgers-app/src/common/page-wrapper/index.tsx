import { Typography, Box } from "@mui/material";
import { ReactNode } from "react";

type Props = {
    children: ReactNode,
    title?: string
}

export const PageWrapper = ({ title, children }: Props) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '30px'
        }}>
            <Typography variant="h3">{title}</Typography>
            {children}
        </Box>
    )
}