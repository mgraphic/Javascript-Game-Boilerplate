import '../styles/index.scss';
import { Config } from './config';

export class Game {
    private gameBoardElement: Element;

    public constructor(gameBoard: Element) {
        this.gameBoardElement = gameBoard;
    }

    public run(): void {
        console.log('Working!');
    }
}
