import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  styled
} from '@mui/material'

type ErrModalProps = {
  state: boolean
  title: string
  content: string
}

const ErrModal = (props: ErrModalProps) => {
  const { state, title, content } = props
  const [open, setOpen] = useState(state)

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export default ErrModal
