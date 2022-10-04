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
  color: "primary"
}))

const genSelectItem = (data: string) => {
  return <MenuItem value={data}>{data}</MenuItem>
}

const Header = () => {
  const [selectOptions, setSelectOptions] = useState<[string]>(['...'])

  const [curSelectedSheetName, setCurSelectedSheetName] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setCurSelectedSheetName(event.target.value)
    console.log(`changed (pre) sheet: ${curSelectedSheetName}`);
  }

  // 初回起動でSpreadSheetのSheet名を取得・セレクトリストに反映
  useEffect(() => {
    const serverGetAllSheetName = async () => {
      try {
        const resp = await RunGoogleScript('getAllSheetName')
        const data = JSON.parse(JSON.stringify(resp))
        if (typeof data.sheets !== null && Array.isArray(data.sheets)) {
          data.sheets.forEach((d) => {
            console.log(d)
          })
          setSelectOptions(data.sheets)
        } else {
          throw Error(`serverGetAllSheetName not return Array data.`)
        }
      } catch (err) {
        console.error(err)
        ;<ErrModal state={true} title={'ERROR'} content={err} />
      }
    }
    serverGetAllSheetName()
  }, [])


  return (
    <>
      <header>
        <HeaderStyle>
          <Container maxWidth="md" disableGutters>
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

              <FormControl
                sx={{
                  minWidth: 80,
                  backgroundColor: grey[100]
                }}
                size="small"
              >
                <InputLabel id="cur-sheet-name-label">
                  シート名
                </InputLabel>
                <Select
                  labelId="cur-sheet-name-label"
                  id="cur-sheet-name-id"
                  value={curSelectedSheetName}
                  onChange={handleChange}
                  autoWidth
                  label="シート名"
                  variant="filled"
                >
                  {selectOptions.map((item) => genSelectItem(item))}
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
