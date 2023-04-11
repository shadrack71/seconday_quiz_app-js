const AnswerConstainer = [
    {
        id:0,
        question:"Define the term physics ?",
        answer:"is the study of matter and its relation to energy",
        answerKeyWords:["study","matter","relation","energy"],
        TotalMarks:2

    },
    {
        id:1,
        question:"Define the term chemistry ?",
        answer:"is the study of structure,properties,compsition of matter and changes that matters undergoes",
        answerKeyWords:["study","structure","properties","compsition","matter","changes","undergoes"],
        TotalMarks:2

    }
    
];
const submit_btn = document.getElementById("submit_btn");
const score_btn = document.getElementById("score_btn");
var answer_textbox = document.getElementById("answer_textbox");
var question_paragraph = document.getElementById("question_paragraph");
var result_paragraph = document.getElementById("result_paragraph");
var Error_msg = document.getElementById("Error_msg");
var counter = 0;
let counter_para =0;
let scores =0;
let errMsg;
var Answer_array =[]; 
// var counter_array = AnswerConstainer[counter];
if(submit_btn.innerHTML == "START"){
    answer_textbox.setAttribute("disabled", "disabled");
    
}
submit_btn.addEventListener("click",function(e){
    submit_btn.innerHTML="SUBMIT";
    if(submit_btn.innerHTML == "SUBMIT"){
        answer_textbox.removeAttribute("disabled", "disabled");
        
        if(counter_para => 0){
            if(counter_para == AnswerConstainer.length){ 
            }else{
                let counter_array2= AnswerConstainer[counter_para];
                question_paragraph.innerHTML = counter_array2.question;
                counter_para++;
            } 
        }
        if(!answer_textbox.value == " "){
            Error_msg.innerHTML = " ";
            Quiz_Operation(answer_textbox.value);  
        }else{
            errMsg ="please answer the question by fill up the text box below"
            Error_msg.innerHTML = errMsg;
        }
    }
    // console.log("array length_con"+ " "+AnswerConstainer.length)
    // console.log(" counter_con"+" "+counter)
    if(counter == AnswerConstainer.length){
        submit_btn.setAttribute("disabled","disabled");
        score_btn.style.display = "block";
        errMsg ="You have came to the end of the quiz exam";
         Error_msg.innerHTML = errMsg;
        
}
});
score_btn.addEventListener("click",function(){
    score_btn_fun();
});
function score_btn_fun(){
    for (let i = 0; i < Answer_array.length; i++){
        let temp_store_question = Answer_array[i].question_numb;
        let temp_store_score = Answer_array[i].score;
        let question_temp_cont = AnswerConstainer[temp_store_question].question;
        let answer_temp_cont = AnswerConstainer[temp_store_question].answer;
        let CreatePara = document.createElement("p");
        let CreatePara1 = document.createElement("p");
        let CreatePara2 = document.createElement("p");
        let CreateText = document.createTextNode("QUESTION:"+" "+ question_temp_cont);
        let CreateText1 = document.createTextNode("ANSWER:"+" "+ answer_temp_cont);
        let CreateText2= document.createTextNode("SCORE:"+" "+ temp_store_score);
        CreatePara.appendChild(CreateText);
        result_paragraph.appendChild(CreatePara);
        CreatePara1.appendChild(CreateText1);
        result_paragraph.appendChild(CreatePara1);
        CreatePara2.appendChild(CreateText2);
        result_paragraph.appendChild(CreatePara2);
        // console.log(temp_store_question)
        // console.log(temp_store_score)
        // console.log(question_temp_cont)
        // console.log(answer_temp_cont)

    }
    

}
class StoreOjectsAnswer{
    constructor(quiz_numb,score_value){
        this.question = quiz_numb;
        this.score = score_value;
    }
    score_calc(){
        let temp_store = {"question_numb": this.question,
         "score": this.score};
        return temp_store;
    }

}
function score_computing(score_val,array_counter){
    let Temp_Array_counter = AnswerConstainer[array_counter];
    if(Temp_Array_counter.answerKeyWords.length == score_val){
        scores = Temp_Array_counter.TotalMarks;
        
    }else {
        if(score_val == 0){
            scores = 0;
        }
        scores = Math.floor((Temp_Array_counter.answerKeyWords.length)/(Temp_Array_counter.answerKeyWords.length - 1));

    }


}

function Quiz_Operation(answer_value){
    let counter_array = AnswerConstainer[counter];
    // question_paragraph.innerHTML = counter_array.question;
    //the loop below used to fetch keyWords from answer 
    //array and check if is any value in the input text are alike
        for(let i = 0; i < counter_array.answerKeyWords.length; i++){
        if(answer_value.includes(counter_array.answerKeyWords[i])){
            scores++;
            }
        
        }
    score_computing(scores,counter);
    let temp_store = new StoreOjectsAnswer(counter_array.id,scores);
    
    Answer_array.push(temp_store.score_calc());
    counter++;
    scores = 0;
    answer_textbox.value = " ";
    
    // console.log(Answer_array);
    
    //  console.log(counter)
    //  console.log(" scores"+" "+scores) 
    //  console.log(" answe_array"+" "+ Answer_array) 
}



