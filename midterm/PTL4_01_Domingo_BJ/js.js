
    let questions = [
      { q: "Which is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Jupiter" },
      { q: "What is the chemical symbol for Gold?", options: ["Ag", "Au", "Pb", "Fe"], answer: "Au" },
      { q: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"], answer: "Leonardo da Vinci" },
      { q: "Which country hosted the 2016 Summer Olympics?", options: ["China", "Brazil", "Japan", "UK"], answer: "Brazil" },
      { q: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8" }
    ];

    let currentQuestion, score, timeLeft, timer;

    function startQuiz() {
      currentQuestion = 0;
      score = 0;
      timeLeft = 30;
      document.getElementById("result").innerText = "";
      document.getElementById("retry").innerHTML = "";
      document.getElementById("question-container").style.display = "block";
      document.getElementById("watch-container").style.display = "block";
      document.getElementById("progress").style.display = "block";

    
      document.querySelector(".quiz-box").classList.remove("result-mode");

      showQuestion();

      timer = setInterval(function() {
        document.getElementById("watch-timer").innerText = timeLeft;

        if (timeLeft <= 5) {
          document.getElementById("watch-timer").style.color = "red";
        } else {
          document.getElementById("watch-timer").style.color = "black";
        }

        timeLeft--;
        if (timeLeft < 0) {
          clearInterval(timer);
          endQuiz();
        }
      }, 1000);
    }

    function showQuestion() {
      if (currentQuestion < questions.length) {
        let qObj = questions[currentQuestion];
        let labels = ["A", "B", "C", "D"];
        let html = "<div class='question'><p>" + (currentQuestion+1) + ". " + qObj.q + "</p>";
        html += "<div class='options'>";
        qObj.options.forEach((opt, index) => {
          html += "<button onclick='checkAnswer(\"" + opt + "\")'>" + labels[index] + ". " + opt + "</button>";
        });
        html += "</div></div>";
        document.getElementById("question-container").innerHTML = html;

        document.getElementById("progress").innerText =
          "Question " + (currentQuestion+1) + " of " + questions.length;
      } else {
        endQuiz();
      }
    }

    function checkAnswer(selected) {
      if (selected === questions[currentQuestion].answer) {
        score++;
      }
      currentQuestion++;
      showQuestion();
    }

    function endQuiz() {
      clearInterval(timer);
      document.getElementById("question-container").style.display = "none";
      document.getElementById("watch-container").style.display = "none";
      document.getElementById("progress").style.display = "none";

     
      document.querySelector(".quiz-box").classList.add("result-mode");

      document.getElementById("result").innerText =
        "Score: " + score + " / " + questions.length;
      document.getElementById("retry").innerHTML =
        "<button onclick='startQuiz()'>Retry</button>";
    }


    startQuiz();