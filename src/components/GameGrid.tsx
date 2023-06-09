import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { PlatForm } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCartSkeleton from "./GameCartSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  selectedGameQuery: GameQuery;
}

const GameGrid = ({selectedGameQuery}: Props) => {
  const { data, error, isLoading } = useGames(selectedGameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        column={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCartSkeleton></GameCartSkeleton>{" "}
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
