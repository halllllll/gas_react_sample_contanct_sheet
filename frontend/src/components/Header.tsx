import React from 'react'
import { AppBar, Typography, Container, Box, styled } from '@mui/material'

const HeaderStyle = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
  color: 'primary',
  flexGrow: 1,
  flex: 1
}))

const Header = () => {
  return (
    <>
      <header>
        <HeaderStyle>
          <Container
            maxWidth="md"
            sx={{
              marginY: 4
            }}
            disableGutters
          >
            <Typography variant="h6" color="inherit" component="div">
              ヘッダーだよ
            </Typography>
          </Container>
        </HeaderStyle>
      </header>
      <Box
        sx={{
          marginBottom: 16
        }}
      />
    </>
  )
}

export default Header
