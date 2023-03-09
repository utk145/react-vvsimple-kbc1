import { useEffect, useState } from "react";
import useSound from "use-sound";
// import '../assets';
import correct from '../assets/correct.mp3';
import wrong from '../assets/wrong.mp3';
import play from '../assets/play.mp3';

const Trivia = ({ data, setTimeOut, setQuestionNumber, questionNumber }) => {

    const [question, setQuestion] = useState(null);
    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber])


    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");

    const [letsPlay] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);


    useEffect(() => {
        letsPlay();
    }, [letsPlay]);



    const clickHandler = (a) => {
        setSelectedAnswer(a);
        setClassName("answer active");
        setTimeout(() => {
            // console.log("checking");
            // Here we will check the correct answer and setClassName
            setClassName(a.correct ? "answer correct" : "answer wrong");
        }, 3000);
        setTimeout(() => {
            if (a.correct) {
                correctAnswer();
                setTimeout(() => {
                    setQuestionNumber(prev => prev + 1);
                    setSelectedAnswer(null);
                }, 1000);
                // setQuestionNumber(prev => prev + 1);
                // setSelectedAnswer(null);
            } else {
                wrongAnswer();
                setTimeout(() => {
                    setTimeOut(true); // this is to stop the game 
                }, 1000);
                // setTimeOut(true); // this is to stop the game 
            }
        }, 5000);
    }





    return (
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a) => (
                    <div className={selectedAnswer === a ? className : "answer"} onClick={() => clickHandler(a)}>{a.text}</div>
                ))}
            </div>

            {/* <div className="question">What does the acronym "URL" stand for?</div>
        <div className="answers">
            <div className="answer">Universal Resource Location</div>
            <div className="answer">Unique Resource Locator</div>
            <div className="answer">Unified Resource Locator</div>
            <div className="answer">Ultimate Resource Library</div>
        </div> */}
        </div>
    )
}

export default Trivia