import { Container, Stack } from '@mui/material'
import React, { useState } from 'react'
import { TitleArea, InputArea, ContentArea } from './Index'

const Page = () => {
  const [lastName, setLastName] = useState('苗字')
  const [firstName, setFirstName] = useState('名前')
  const handleChangeName = (newLastName: string, newFirstName: string) => {
    setLastName(newLastName)
    setFirstName(newFirstName)
  }

  return (
    <Container>
      <Stack spacing={2} margin={2}>
        <TitleArea />
        <InputArea handleChangeName={handleChangeName} />
        <ContentArea lastName={lastName} firstName={firstName} />
      </Stack>
    </Container>
  )
}

export default Page
