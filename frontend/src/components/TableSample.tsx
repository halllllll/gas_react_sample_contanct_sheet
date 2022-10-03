import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled
} from '@mui/material'
import dummyData from '../public/randomData.json'

const StickyTableCellHeader = styled(TableCell)(({ theme }) => ({
  position: 'sticky',
  background: theme.palette.background.paper,
  width: 90,
  zIndex: 256
}))

const StickyTableCellColumn = styled(TableCell)(({ theme }) => ({
  position: 'sticky',
  background: theme.palette.background.paper,
  // width: 90,
  zIndex: 128
}))

const NormalTableCell = styled(TableCell)(({ theme }) => ({
  whiteSpace: 'normal',
  wordWrap: 'break-word'
}))

type TableDummyProps = {
  name: string
  id: string
  birthday: string
  country: string
  city: string
  email: string
}

const renderBody = (data: TableDummyProps) => {
  return (
    <>
      <TableRow>
        <StickyTableCellColumn>{data.name}</StickyTableCellColumn>
        <NormalTableCell>{data.id}</NormalTableCell>
        <NormalTableCell>{data.birthday}</NormalTableCell>
        <NormalTableCell>{data.country}</NormalTableCell>
        <NormalTableCell>{data.city}</NormalTableCell>
        <NormalTableCell>{data.email}</NormalTableCell>
      </TableRow>
    </>
  )
}

const TableSample = () => {
  const data = dummyData

  return (
    <Paper
      sx={{
        width: 400
      }}
    >
      <TableContainer
        sx={{
          height: '80vh',
          maxWidth: 400
        }}
      >
        <Table
          stickyHeader
          style={{
            tableLayout: 'fixed'
          }}
        >
          <TableHead>
            <TableRow>
              <StickyTableCellHeader>Name</StickyTableCellHeader>
              <NormalTableCell
                sx={{
                  width: 40
                }}
              >
                ID
              </NormalTableCell>
              <NormalTableCell
                sx={{
                  width: 50
                }}
              >
                Birthday
              </NormalTableCell>
              <NormalTableCell
                sx={{
                  width: 120
                }}
              >
                COUNTRY
              </NormalTableCell>
              <NormalTableCell
                sx={{
                  width: 80
                }}
              >
                city
              </NormalTableCell>
              <NormalTableCell
                sx={{
                  width: 100
                }}
              >
                email
              </NormalTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((d) => {
              console.log(`data row: ${d}`)
              return renderBody(d)
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default TableSample
