import ValueObject from "./ValueObject";

export default class AccessConfig implements ValueObject {
    private minPlayers: number;
    private maxPlayers: number;
    private timeOfNextPlayer: number;
    private visibility: boolean;

    constructor (minPlayers: number, maxPlayers: number, timeOfNextPlayers: number, visibility: boolean) {
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
        this.timeOfNextPlayer = timeOfNextPlayers;
        this.visibility = visibility;
    }

    static AccessConfig(minPlayers: number, maxPlayer: number) {
        return AccessConfig;
    }

    AccessConfig(minPlayers: number, maxPlayers: number, visibility: boolean) {
        if(minPlayers < 4) {
            throw new Error("'min players' can't be less than 4");
        }
        if(minPlayers > 13) {
            throw new Error("'min players' can't be greater than" + 13);
        }
        if(maxPlayers < 4) {
            throw new Error("'max players' can't be less than 13");
        }
        if(maxPlayers < minPlayers) {
            throw new Error("'max players' can't be less than" + minPlayers);
        }

        return new AccessConfig(minPlayers, maxPlayers, 15, visibility);
    }
}