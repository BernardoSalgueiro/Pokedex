export interface PokemonListItem {
    name: string,
    url: string
}

export interface PokemonListResponse {
    count: number,
    next: string | null,
    previous: string | null,
    results: PokemonListItem[]
}

export interface PokemonAbility {
    ability: {
        name: string, 
        url: string
    };
}

export interface PokemonType {
    type: {
        name: string,
        url: string, 
    };
}

export interface PokemonSprites {
    front_default: string | null;
}

export interface PokemonDetails {
    name: string,
    sprites: PokemonSprites,
    abilities: PokemonAbility,
    types: PokemonType[],
}