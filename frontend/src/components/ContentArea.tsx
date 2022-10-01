import React from 'react'
import { Paper, Stack, Typography } from '@mui/material'

type ContentAreaProps = {
  lastName: string
  firstName: string
}

const ContentArea = (props: ContentAreaProps) => {
  const { lastName, firstName } = props
  return (
    <Paper>
      <Stack spacing={2} margin={2}>
        <Typography variant="body1" gutterBottom>
          Hello, {firstName} {lastName}! <br />
          Can I call your name {firstName}?
          <br />
        </Typography>
      </Stack>
    </Paper>
  )
}

export default ContentArea
