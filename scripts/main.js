//Question text input
const questionText = document.getElementById("question");

//Question answer input
const correctAnswer = document.getElementById("answer");

//Question count div
const questionCountDiv = document.getElementById("questionCount");

//Add new question/answer form
const form = document.getElementById("addQuestionForm");

//count Id
let countId = 6;

function addNewQuestion() {
  // Function body to be implemented
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const radios = document.querySelectorAll('input[name="staus"]');
    let selectedValue = null;

    radios.forEach((radio) => {
      if (radio.checked) {
        selectedValue = radio.value;
        console.log(selectedValue);
        
      }
    });

    countId++;
    var data = {
      id: countId,
      status:  selectedValue,
      question: questionText.value,
      answer: correctAnswer.value,
    };
    console.log(data);
    faqData.push(data);
    console.log(faqData);

    // //    function checkRadio(value) {
    // //     if (value == "open") {
    // //         data.status=value
    // //       console.log("Choice: ", value);
    // //       document.getElementById("openRadio").checked = true;
    // //       document.getElementById("closedRadio").checked = false;

    // //     } else if (value == "closed") {
    // //         data.status=value
    // //       console.log("Choice: ", value);
    // //       document.getElementById("closedRadio").checked = true;
    // //       document.getElementById("openRadio").checked = false;
    // //     }
    //   }
    renderFAQ(faqData);
    displayQuestionCount();
  });
}

addNewQuestion();
console.log(faqData);

function displayQuestionCount() {
  // Function body to be implemented
  console.log("hdfff");

  let questionCount = faqData.filter(
    (item) =>
      (item.question !== "") & (item.answer !== "") & (item.status == "open")
  );
  questionCountDiv.textContent = questionCount.length;
}
displayQuestionCount();

function initializeQuestionList() {
  // Function body to be implemented
}

function deleteQuestion(questionId) {
  // Function body to be implemented
}

// function checkRadio(value) {
//     if (value == "open") {
//         data.status=value
//       console.log("Choice: ", value);
//       document.getElementById("openRadio").checked = true;
//       document.getElementById("closedRadio").checked = false;

//     } else if (value == "closed") {
//         data.status=value
//       console.log("Choice: ", value);
//       document.getElementById("closedRadio").checked = true;
//       document.getElementById("openRadio").checked = false;
//     }
//   }
