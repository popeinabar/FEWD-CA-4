import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";



function App() {
  const [theme, setTheme] = useState(true)
  const [themeName, setThemeName] = useState("dark")
  const handleToggle = ()=>{
    setTheme(theme?false:true);
  }

  function backGroundColors(color){

    document.body.style.backgroundColor = color? "#6e6a6a":"white";
    return{
      backgroundColor : color? "#6e6a6a":"white",
    }
  }

  function textColor(color){
    return{
      color:color?"white":"#000000",
    }
  }

  useEffect(()=>{
    setThemeName(themeName==="light"?"dark":"light")
  },[theme])
  return (
    <div>
      <div className="header">
        <h2 style={textColor(theme)}>Kalvium</h2>
        <div className="btn toggle-button" onClick={handleToggle}>{themeName}</div>
      </div>
      
      <QuestionBox/>
      
    </div>
  );
}

export default App;
































// function QuizQuestion(props) {
//   const { question, handleAnswer, handleNextQuestion } = props;
//   const [selectedAnswer, setSelectedAnswer] = useState(null);

//   function handleChange(event) {
//     setSelectedAnswer(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     handleAnswer(selectedAnswer);
//     handleNextQuestion();
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>{question.question}</h2>
//       {question.answers.map(answer => (
//         <div key={answer}>
//           <input
//             type="radio"
//             name="answer"
//             value={answer}
//             onChange={handleChange}
//           />
//           {answer}
//         </div>
//       ))}
//       <button type="submit" disabled={!selectedAnswer}>
//         Submit
//       </button>
//     </form>
//   );
// }

// export default QuizQuestion;