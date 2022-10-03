import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Container, Box, styled } from '@mui/material'
import ErrModal from './AlertDialog'
import { RunGoogleScript } from './Utils'

const HeaderStyle = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
  color: 'primary',
  flexGrow: 1,
  flex: 1
}))

const Header = () => {
  const [selectOptions, setSelectOptions] = useState<[string]|unknown>()

  useEffect(() => {
    console.log('sheet取得')
    const serverGetAllSheetName = async() =>{
        try{
            const data = await RunGoogleScript("getAllSheetName");
            if(Array.isArray(data)){
                data.forEach(d=>{
                    console.log(d);
                });
                setSelectOptions(data);
            }else{
                throw new Error(`serverGetAllSheetName not return Array data.`);
            }
        }catch(err){
            console.error(err);
        }

    }
    serverGetAllSheetName(); 
  }, [])

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
