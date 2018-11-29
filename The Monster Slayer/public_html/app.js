/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
new Vue({
    el:'#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        hello: function() {
            console.log('hello..');
        },
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
       },
       attack: function(){
           var damage = this.calculateDamage(3,10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });
            if (this.checkWin()) {
                return;
            }
           this.monsterAttacks();
       },
       specialAttack: function() {
           var damage = this.calculateDamage(10,20); 
           this.monsterHealth -= damage;
           this.turns.unshift({
                isPlayer: true,
                text: 'Player hits so hard to Monster for ' + damage
            });
           if (this.checkWin()) {
                return;
            }
           this.monsterAttacks();
       },
       monsterAttacks: function(){
           var damage = this.calculateDamage(5,12);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            });
       },
       heal: function(){
            if (this.playerHealth <= 99) {
                this.playerHealth += 10;
            }
            else{
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for '
            });
            
            this.monsterAttacks();
       },
       giveUp: function() {
            this.gameIsRunning = false;
        },
        calculateDamage: function(min,max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('you won! wanna play again? ;D')) {
                    this.startGame();
                }
                else{
                    this.gameIsRunning = false;
                }
                return true;
            }
            else if (this.playerHealth <= 0) {
              if (confirm('you lost! :( wanna play again? ;D')) {
                    this.startGame();
                }
                else{
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});


