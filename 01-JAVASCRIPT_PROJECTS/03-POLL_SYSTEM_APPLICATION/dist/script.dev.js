"use strict";

var options = [{
  id: "option1",
  text: "JavaScript",
  votes: 0
}, {
  id: "option2",
  text: "Python",
  votes: 0
}, {
  id: "option3",
  text: "Java",
  votes: 0
}, {
  id: "option4",
  text: "C++",
  votes: 0
}];

function submitVote() {
  var selectedOption = document.querySelector('input[name="poll"]:checked'); // console.log(selectedOption.value);

  if (!selectedOption) {
    alert("Please select the option!");
    return;
  }

  var optionId = selectedOption.value;
  var selectedOptionObj = options.find(function (option) {
    return option.id === optionId;
  }); // console.log(selectedOptionObj);

  if (selectedOptionObj) {
    selectedOptionObj.votes++; // console.log(selectedOptionObj);

    displayResult();
  }
}

function displayResult() {
  var result = document.getElementById("result");
  result.innerHTML = "";
  options.forEach(function (option) {
    var percentage = (option.votes / getTotalVotes() * 100).toFixed(2) || 0;
    var barWidth = percentage > 0 ? percentage + "%" : "0%";
    var optionResult = document.createElement("div");
    optionResult.className = "option-result";
    optionResult.innerHTML = "\n        <span class = \"option-text\">".concat(option.text, "</span>\n        <div class = \"bar-container\">\n            <div class = \"bar\" style = \"width: ").concat(barWidth, ";\"></div>\n        </div>\n        <span class = \"percentage\">").concat(percentage, "%</span>\n    ");
    result.appendChild(optionResult);
  });
}

function getTotalVotes() {
  return options.reduce(function (total, option) {
    return total + option.votes;
  }, 0);
}

displayResult();