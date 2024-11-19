
//Question text input
const questionText = document.getElementById('question');

//Question answer input
const correctAnswer = document.getElementById('answer');

//Question count div
const questionCountDiv = document.getElementById("questionCount");

//Add new question/answer form
const form = document.getElementById('addQuestionForm');

//count Id
let countId = 6;


function addNewQuestion() {
   
  
    // Function body to be implemented 
    form.addEventListener('submit', (e) => {
       
        
       e.preventDefault()
       
       
       
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
   displayQuestionCount()
    });
    
}

addNewQuestion()
console.log(faqData);

function displayQuestionCount() {
    // Function body to be implemented
    console.log('hdfff');
    
  let  questionCount = faqData.filter(item=>item.question!==''&item.answer!==''&item.status=="open")
  questionCountDiv.textContent=questionCount.length
   
    
}
displayQuestionCount()

function initializeQuestionList() {
    // Function body to be implemented

}




function deleteQuestion(questionId) {
    // Function body to be implemented
    
    
}



