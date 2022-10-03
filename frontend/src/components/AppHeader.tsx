import React, { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  InputLabel,
  styled
} from '@mui/material'
import { grey } from '@mui/material/colors'
import ErrModal from './AlertDialog'
import { RunGoogleScript } from './Utils'

const HeaderStyle = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
  color: 'primary'
}))

const Header = () => {
  const [selectOptions, setSelectOptions] = useState<[string] | unknown>()

  useEffect(() => {
    console.log('sheet取得')
    const serverGetAllSheetName = async () => {
      try {
        const data = await RunGoogleScript('getAllSheetName')
        if (Array.isArray(data)) {
          data.forEach((d) => {
            console.log(d)
          })
          setSelectOptions(data)
        } else {
          throw new Error(`serverGetAllSheetName not return Array data.`)
        }
      } catch (err) {
        console.error(err)
        ;<ErrModal state={true} title={'ERROR'} content={err} />
      }
    }
    serverGetAllSheetName()
  }, [])

  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  return (
    <>
      <header>
        <HeaderStyle>
          <Container
            maxWidth="md"
            disableGutters
          >
            <Toolbar
              variant="dense"
              sx={{
                m: 1,
                display: 'flex'
              }}
            >
              <Typography
                variant="h3"
                color="inherit"
                component="h1"
                sx={{
                  flexGrow: 1
                }}
              >
                ヘッダーだよ
              </Typography>
              {/* 以下追加しただけ */}
              <FormControl
                sx={{
                  minWidth: 80,
                  backgroundColor: grey[100]
                }}
                size="small"
              >
                <InputLabel id="demo-simple-select-autowidth-label">
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={age}
                  onChange={handleChange}
                  autoWidth
                  label="Age"
                  variant="filled"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Twenty</MenuItem>
                  <MenuItem value={21}>Twenty one</MenuItem>
                  <MenuItem value={22}>Twenty one and a half</MenuItem>
                </Select>
              </FormControl>
            </Toolbar>
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
