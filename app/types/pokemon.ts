/* Estrutura de cada pokemon na listagem */
export interface PokemonListItem {
    name: string,
    url: string,
}

export interface PokemonListResponse {
    count: number,
    next: string | null,
    previous: string | null,
    results: PokemonListItem[]
}