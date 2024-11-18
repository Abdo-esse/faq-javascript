
//Question text input
const questionText = document.getElementById('question');

//Question answer input
const correctAnswer = document.getElementById('answer');

//Question count div
const questionCount = document.getElementById("questionCount");

//Add new question/answer form
const form = document.getElementById('addQuestionForm');

//count Id
let countId = 6;
console.log(questionText);
       console.log(correctAnswer);

function addNewQuestion() {
   
  
    // Function body to be implemented 
    form.addEventListener('submit', (e) => {
       
        console.log('azertyuio');
       e.preventDefault()
       console.log(questionText);
       console.log(correctAnswer);
       
       
       countId++
       let data={
       id:countId,
       status:"open",
       question: questionText.value,
       answer:  correctAnswer.value
   }
   console.log(data);
      faqData.push(data)
   console.log(faqData);

   renderFAQ(faqData)
     
    });
    
}

addNewQuestion()


function displayQuestionCount() {
    // Function body to be implemented
    const faqContainerDD = document.querySelector('.faq')
    console.log(faqContainerDD);
    var faqItemscc =document.querySelectorAll('.faq-item');
    console.log(faqItemscc);
   
    
}
displayQuestionCount()

function initializeQuestionList() {
    // Function body to be implemented

}




function deleteQuestion(questionId) {
    // Function body to be implemented
    
    
}



