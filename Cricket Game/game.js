let userChoice = "";
      let computerChoice = "";
      let result = "";

      let score;
      let scoreStr = localStorage.getItem("Score");

      resetScore(scoreStr);
      function resetScore(scoreStr) {
        score = scoreStr
          ? JSON.parse(scoreStr)
          : {
              win: 0,
              lost: 0,
              tie: 0,
            };

        score.displayScore = function () {
          return `Win: ${score.win} Lost: ${score.lost} Tie: ${score.tie}`;
        };

        showResult();
      }

      function generateComputerChoice() {
        let choice = "";
        let random = Math.random() * 3;

        if (random > 0 && random <= 1) return "Bat";
        else if (random > 1 && random <= 2) return "Ball";
        else {
          return "Stump";
        }
        let result = "";
      }

      function getResult(userMove, computerMove) {
        if (userMove === "Bat") {
          if (computerMove === "Bat") {
            score.tie++;
            return `It's a tie`;
          } else if (computerMove === "Ball") {
            score.win++;
            return `User has won`;
          } else {
            score.lost++;
            return "Computer has won";
          }
        } else if (userMove === "Ball") {
          if (computerMove === "Bat") {
            score.lost++;
            return `Computer has won`;
          } else if (computerMove === "Ball") {
            score.tie++;
            return `It's a tie`;
          } else {
            score.win++;
            return "User has won";
          }
        } else {
          if (computerChoice === "Bat") {
            score.win++;
            return `User has won`;
          } else if (computerChoice === "Ball") {
            score.lost++;
            return `Computer has won`;
          } else {
            score.tie++;
            return `It's a tie`;
          }
        }
      }

      function showResult(userMove, computerMove, result) {
        localStorage.setItem("Score", JSON.stringify(score));
        document.querySelector("#user-move").innerText =
          userMove !== undefined ? `You have chosen ${userMove}` : "";
        document.querySelector("#computer-move").innerText = computerMove
          ? `Computer choice is ${computerMove}`
          : "";
        document.querySelector("#result").innerText = result || ""; //fallback operator
        document.querySelector("#score").innerText = score.displayScore();
      }