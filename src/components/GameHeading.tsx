import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {

  const gamesHeading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`; 

  return (
    <Heading as={'h2'} marginBottom={5} fontSize='5xl'> {gamesHeading} </Heading>
  )
}

export default GameHeading