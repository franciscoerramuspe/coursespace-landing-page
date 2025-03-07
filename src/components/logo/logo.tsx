import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick}>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontSize: '2rem',
          fontWeight: 700,
          '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' },
        }}
      >
        Cognitio<span>.ml</span>
      </Typography>
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
