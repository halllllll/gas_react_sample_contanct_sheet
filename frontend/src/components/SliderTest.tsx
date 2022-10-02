import React from 'react'
import { Slider } from '@mui/material'
import { alpha, styled } from '@mui/material'

const MySliderStyle = styled(Slider)(({ theme }) => ({
  width: 300,
  color: theme.palette.success.main,
  '& .MultiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`
    },
    '&:Mui-active': {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`
    }
  }
}))

const SliderTest = () => {
  return <MySliderStyle defaultValue={30} />
}

export default SliderTest
