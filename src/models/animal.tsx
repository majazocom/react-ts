export interface Animal {
    name: string;
    specie: string;
}

export interface AnimalCollection {
    animals: Animal[];
    mou(animal: object): void;
}
