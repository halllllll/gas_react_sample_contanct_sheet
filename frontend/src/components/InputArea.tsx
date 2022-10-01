import { Button, Paper, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

type InputAreaProps = {
  handleChangeName: (newLastName: string, newFirstName: string) => void
}

const InputArea = (props: InputAreaProps) => {
  const [lastName, setLastName] = useState('苗字')
  const [firstName, setFirstName] = useState('名前')
  const { handleChangeName } = props
  const handleClick = () => {
    handleChangeName(lastName, firstName)
  }

  return (
    <Paper>
      <Stack spacing={2} margin={2} direction="row" justifyContent="center">
        <TextField
          id="last-name"
          label="苗字"
          variant="outlined"
          style={{ width: 'fit-content' }}
          onChange={(e) => {
            setLastName(e.target.value)
          }}
        />
        <TextField
          id="first-name"
          label="名前"
          variant="outlined"
          style={{ width: 'fit-content' }}
          onChange={(e) => {
            setFirstName(e.target.value)
          }}
        />
        <Button
          variant="contained" // ?
          style={{ width: 'fit-content' }}
          onClick={handleClick}
        >
          CHANGE
        </Button>
      </Stack>
    </Paper>
  )
}

export default InputArea
