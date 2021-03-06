﻿/// <reference path="../managers/assets.ts" />
module objects {
    export class Scoreboard {
        lives: number = LIVES_NUM;
        score: number = 0;
        missed: number = 0;
        level: number = 1;
        label: createjs.Text;
        labelString: string = "";
        
        constructor() {
            this.label = new createjs.Text(this.labelString, GAME_FONT, FONT_COLOUR);
            this.update();
        }

        update() {
            if (this.lives <= 0) {
                this.labelString = "YOU ARE DEAD, STOP PLAYING";
                this.label.text = this.labelString;
            }
            else if (this.missed > 11){
                this.labelString = "You missed 12! Your village was destroyed";
                this.label.text = this.labelString;
            }
            else{ 
                this.labelString = "Lives: " + this.lives.toString() + " Kills: " + this.score.toString() + " Missed: " + this.missed.toString() + " Level: " + this.level.toString();
                this.label.text = this.labelString;
            }
        }
    }
}