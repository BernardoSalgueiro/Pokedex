import { error, log } from "console";
import { PokemonListResponse } from "../types/pokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemons(
    limit: number,
    offset: number
): Promise<PokemonListResponse> {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);

    if (!response.ok) {
        throw new Error("Erro ao buscar Pokémon.");        
    }

    return response.json();
}