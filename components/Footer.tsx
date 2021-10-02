import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function StickyFooter() {
  return (

    <Box
        // component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 7,
        backgroundColor: (theme) => (theme.palette.mode === 'light'
          ? theme.palette.grey[200]
          : theme.palette.grey[800]),
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          Узнать ислам, задать вопрос, решить проблему
        </Typography>
      </Container>
    </Box>

  )
}