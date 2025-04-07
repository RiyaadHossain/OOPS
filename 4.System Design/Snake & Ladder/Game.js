"use strict";
class Board {
    constructor(size, snakes, ladders) {
        this.size = size;
        this.snakes = snakes;
        this.ladders = ladders;
    }
    getNewPosition(position) {
        if (this.snakes.has(position)) {
            console.log(`🐍 Oh no! Snake from ${position} to ${this.snakes.get(position)}`);
            return this.snakes.get(position);
        }
        if (this.ladders.has(position)) {
            console.log(`🚀 Ladder from ${position} to ${this.ladders.get(position)}`);
            return this.ladders.get(position);
        }
        return position;
    }
}
class Player {
    constructor(name) {
        this.name = name;
        this.position = 1;
        this.moveHistory = [1];
    }
    move(steps) {
        this.position += steps;
        this.moveHistory.push(this.position);
    }
    printHistory() {
        console.log(`📜 ${this.name}'s move history: ${this.moveHistory.join(" -> ")}`);
    }
}
class Dice {
    roll() {
        return Math.floor(Math.random() * 6) + 1;
    }
}
class Game {
    constructor(board, players) {
        this.board = board;
        this.players = players;
        this.dice = new Dice();
        this.currentPlayerIndex = 0;
        this.leaderboard = [];
    }
    playTurn() {
        const player = this.players[this.currentPlayerIndex];
        console.log(`🎲 ${player.name}'s turn`);
        const diceValue = this.dice.roll();
        console.log(`${player.name} rolled a ${diceValue}`);
        let newPosition = player.position + diceValue;
        if (newPosition > this.board.size) {
            console.log(`${player.name} needs an exact roll to win!`);
        }
        else {
            newPosition = this.board.getNewPosition(newPosition);
            player.move(newPosition - player.position);
            console.log(`${player.name} moves to ${player.position}`);
            if (player.position === this.board.size) {
                console.log(`🏆 ${player.name} wins!`);
                this.leaderboard.push(player);
                this.players.splice(this.currentPlayerIndex, 1);
                this.currentPlayerIndex--; // Adjust index after removing player
            }
        }
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    }
    startGame() {
        console.log("🎲 Starting Snake and Ladder Game...");
        while (this.players.length > 0) {
            this.playTurn();
        }
        this.showLeaderboard();
    }
    showLeaderboard() {
        console.log("\n🏆 FINAL LEADERBOARD:");
        this.leaderboard.forEach((player, rank) => {
            console.log(`#${rank + 1} ${player.name}`);
        });
        console.log("\n📜 PLAYER MOVE HISTORIES:");
        this.leaderboard.forEach((player) => player.printHistory());
    }
}
// Define snakes and ladders
const snakes = new Map([
    [16, 6], [47, 26], [49, 11], [56, 53], [62, 19], [64, 60], [87, 24], [93, 73], [95, 75], [98, 78]
]);
const ladders = new Map([
    [2, 38], [7, 14], [8, 31], [15, 26], [21, 42], [28, 84], [36, 44], [51, 67], [71, 91], [78, 98], [87, 94]
]);
const board = new Board(100, snakes, ladders);
const players = [new Player("Alice"), new Player("Bob"), new Player("Charlie")];
const game = new Game(board, players);
game.startGame();
