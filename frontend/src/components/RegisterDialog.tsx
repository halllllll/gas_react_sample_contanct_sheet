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
  
  // コンポーネント内でhookを使う時はwrapしようね
  // 承諾したときのなにか
  const handleAccept = () => {
    handleClose()
    onAccept()
  }
  // ダイアログを閉じた時
  // たぶん明示的にダイアログの閉じるボタンを押されなくてもそこ以外を押したときにも閉じる処理があるからここで定義してるんだと思われ
  const handleClose = () => {
    setDialogOpen(false)
    onClose()
  }

  // useEffectよくわかってないけど値の監視に使う？useStateとの違い何？
  useEffect(() => {
    setDialogOpen(open)
  }, [open])

  return (
    <Dialog
        open={dialogOpen}
        sx={{
            m: 2,
            p: 2,
            color: (theme) => theme.palette.secondary.light
        }}
    >
      <DialogTitle>
        <span>{title}</span>
      </DialogTitle>
      <DialogContent>
        <Box>{message}</Box>
      </DialogContent>
      <DialogActions>
        {buttonType === 'OkOnly' &&
        <Button
            onClick={handleAccept}
            variant="outlined"
        >
            OK
        </Button>}
        {buttonType === 'YesNo' && (
          <>
            <Button
                onClick={handleAccept}
                variant="contained"
            >
                YES
            </Button>
            <Button
                onClick={handleClose}
                variant="contained"
            >
                NO
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  )
}

export default RegisterDialog
