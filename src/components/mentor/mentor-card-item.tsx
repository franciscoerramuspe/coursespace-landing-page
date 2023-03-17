import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { Mentor } from '@/interfaces/mentor'

interface Props {
  item: Mentor
}

const MentorCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1,
        py: 4,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: 2,
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 3,
            height: 200,
            mb: 2,
          }}
        >
          <Image src={item.photo as string} width={570} height={427} alt={'Mentor ' + item.id} />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography component="h2" variant="h4" sx={{ fontSize: '1.4rem' }}>
            {item.name}
          </Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary', fontSize: '1.2rem' }}>{item.category}</Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary', fontSize: '1.1rem' }} variant="subtitle1">
            {item.description}
          </Typography>
          <Box sx={{ '& img': { width: 115, height: 60 } }}>
            {/* eslint-disable-next-line */}
            <img src={item.company?.logo} alt={item.company?.name + ' logo'} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default MentorCardItem
