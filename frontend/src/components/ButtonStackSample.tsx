import React from "react"
import { Stack, Button, Divider} from "@mui/material"

const ButtonStackSampleComponent = () => {
  return (
    <Stack
        direction="row"
        spacing={5}
        justifyContent="center"
        sx={{m:2, p:2}}
        divider={<Divider orientation="vertical" flexItem />}
    >
      <Button variant="contained" color="primary">primary</Button>
      <Button variant="contained" color="secondary">secondary</Button>
      <Button variant="contained" color="warning">warning</Button>
      <Button variant="contained" color="info">info</Button>
      <Button variant="contained" color="success">success</Button>
    </Stack>
  )
}

export default ButtonStackSampleComponent