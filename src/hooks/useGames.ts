import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";

export interface PlatForm {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatForm }[];
  metacritic: number;
}

const useGames = (selectedGameQuery: GameQuery) =>
  useData<Games>("/games", { params: { 
    genres: selectedGameQuery.genre?.id, 
    platforms: selectedGameQuery.platform?.id,  
    ordering: selectedGameQuery.sortOrder }
  }, 
  [selectedGameQuery]);

export default useGames;
