import React from "react";
import { Games } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platForms={game.parent_platforms.map(
            (parent_platform) => parent_platform.platform
          )}
        ></PlatformIconList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
