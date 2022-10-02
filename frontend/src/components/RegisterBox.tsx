import React, { useState } from 'react'
import { Button } from '@mui/material'
import RegisterDialog from './RegisterDialog'
import { Box } from '@mui/system'

const RegisterBox = () => {
  // dialog管理用state
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <Box>
      <RegisterDialog
        title="here is Dialog Title"
        message="Dialog message"
        buttonType="OkOnly"
        open={dialogOpen}
        onAccept={() => console.log(`onAccept`)} // とりあえずコンソールに出力するだけとする
        onClose={() => setDialogOpen(false)}
      />
      <Button onClick={() => setDialogOpen(true)}>OPEN</Button>
    </Box>
  )
}

export default RegisterBox
