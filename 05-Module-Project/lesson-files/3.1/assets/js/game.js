// var playerName = 'Clank McKrank';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// fight function
var fight = function () {
  // Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  // ask player if they'd like to fight or run
  var promptFight = window.prompt(
    'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
  );

  // if player choses to fight, fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
    // if player did not chose 1 or 2 in prompt
  } else {
    window.alert("You need to pick a valid option. Try again!");
  }
}; // end of fight function

// run fight function to start game
fight();

/*
//Switch Statement
var fight = function () {
  window.alert("Welcome to Robot Gladiators!");

  var promptFight = window.prompt(
    'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
  );

  switch (promptFight.toLowerCase()) {
    case "fight":
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName +
          " attacked " +
          enemyName +
          ". " +
          enemyName +
          " now has " +
          enemyHealth +
          " health remaining."
      );

      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName +
          " attacked " +
          playerName +
          ". " +
          playerName +
          " now has " +
          playerHealth +
          " health remaining."
      );

      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      } else {
        window.alert(
          playerName + " still has " + playerHealth + " health left."
        );
      }
      break;

    case "skip":
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;
      } else {
        fight();
      }
      break;

    default:
      window.alert("You need to pick a valid option. Try again!");
  }
};
fight();
*/

/*
//ternary operator
var fight = function() {
  window.alert("Welcome to Robot Gladiators!");

  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  (promptFight.toLowerCase() === "fight") ?
    (
      enemyHealth = enemyHealth - playerAttack,
      console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      ),
      (enemyHealth <= 0) ? window.alert(enemyName + " has died!") : window.alert(enemyName + " still has " + enemyHealth + " health left."),
      playerHealth = playerHealth - enemyAttack,
      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      ),
      (playerHealth <= 0) ? window.alert(playerName + " has died!") : window.alert(playerName + " still has " + playerHealth + " health left.")
    ) :
    (promptFight.toLowerCase() === "skip") ?
      (
        var confirmSkip = window.confirm("Are you sure you'd like to quit?"),
        (confirmSkip) ? (
          window.alert(playerName + " has decided to skip this fight. Goodbye!"),
          playerMoney = playerMoney - 2
        ) : fight()
      ) :
      window.alert("You need to pick a valid option. Try again!");
}; 
fight();
*/
