import React,{useState,  useRef}from 'react'
import "../App.css";
import questions from '../questions';


export default function QuestionBox() {
  
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [show, showScore] = useState(false)
  const focusQuestion = useRef();


  function highlight(){
      
    
      focusQuestion.current.style.color = 'red' 
      
    
  }

  function RemoveHighlight(){
    focusQuestion.current.style.color = "black";
  }

  const correctAnswer= (isCorrect) => {
    
      if (isCorrect === true) {
        setScore(score + 1);
      }
      
      if(currentQuestion<questions.length-1){
      const index = currentQuestion===questions.length-1?questions.length-1:currentQuestion+1;
    setCurrentQuestion(index)
      }
      else{
        showScore(true)
      }
  }

  const reset=()=>{
    window.location.reload()
  }
  
  let data = questions[currentQuestion];

    return (
       <div className='container'>
         {show?(
          <>
          <h1 id="res">Result</h1>
<div id='result-box'>
  <h2>{score<3?"You need Improvement!":score>=3 && score<5? "Nice Work !":"Good Job!" }</h2>
  <h1>You scored {score/questions.length *100}%</h1>
  <h3>Questions: {questions.length}</h3>
  <h3> Correct Answers: {score}</h3>
  <h3>Wrong Answers: {questions.length - score}</h3>

</div>
<button class="play-again" onClick={()=>reset()}>Play Again</button>
</>
)
:(
        <div id='quistion-container'>
         

            
            <><h2 id='ques-head'>Question</h2>
            <p id='question-number'>{currentQuestion+1} of 5</p>
            
            <p id='question'ref={focusQuestion}>{data.text}</p>
            <div className='option-div'>
              
                  {data.options.map((i)=>{
                    return (
                    <div onClick={()=>correctAnswer(i.isCorrect)} className='options'>
                      {i.text}
                    </div>
                    )
                  })}
                
            </div>
            <div className='button-div'>
                
            <button className='btn' onClick={()=>highlight()}>Highlight</button>
        <button className='btn' onClick={()=>RemoveHighlight()}>Remove Highlight</button>
               
            </div>
            </>
            
        </div>
)}

      </div>
      
    )
}


