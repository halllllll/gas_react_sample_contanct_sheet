/** reference -> https://www.sukerou.com/2022/04/muireactmaterial-ui.html */

import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material'

type DialogProps = {
  title: string
  message: string
  onAccept: () => void
  onClose: () => void
  open: boolean
  buttonType: ButtonType
}

type ButtonType = 'OkOnly' | 'YesNo'

const RegisterDialog = (props: DialogProps) => {
  const { title, message, onAccept, onClose, open, buttonType } = props

  const [dialogOpen, setDialogOpen] = useState(false)

  // 承諾したときのなにか
  const handleAccept = () => {
    handleClose()
    onAccept()
  }
  // ダイアログを閉じた時？
  const handleClose = () => {
    setDialogOpen(false)
    onClose()
  }

  // useEffectよくわかってないけど値の監視に使う？useStateとの違い何？
  useEffect(() => {
    setDialogOpen(open)
  }, [open])

  return (
    <Dialog open={dialogOpen}>
      <DialogTitle>
        <span>{title}</span>
      </DialogTitle>
      <DialogContent>
        <Box>{message}</Box>
      </DialogContent>
      <DialogActions>
        {buttonType === 'OkOnly' && <Button onClick={handleAccept}>OK</Button>}
        {buttonType === 'YesNo' && (
          <>
            <Button onClick={handleAccept}>YES</Button>
            <Button onClick={handleClose}>NO</Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  )
}

export default RegisterDialog
