import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import Start from './components/Start';
import Timer from './components/Timer';
import Trivia from './components/Trivia';




const App = () => {

    const [questionNumber, setQuestionNumber] = useState(1);
    const [timeOut, setTimeOut] = useState(false);
    const [earned, setEarned] = useState("₹ 0");
    const [username, setUsername] = useState(null);


    const data = [
        {
            id: 1,
            question: "What is the largest organ in the human body?",
            answers: [
                {
                    text: "Heart",
                    correct: false,
                },
                {
                    text: "Liver",
                    correct: false,
                },
                {
                    text: "Skin",
                    correct: true,
                },
                {
                    text: "Kidneys",
                    correct: false,
                },
            ],
        },
        {
            id: 2,
            question: "Which planet is known as the \"Red Planet\"?",
            answers: [
                {
                    text: "Venus",
                    correct: false,
                },
                {
                    text: "Jupiter",
                    correct: false,
                },
                {
                    text: "Mars",
                    correct: true,
                },
                {
                    text: "Saturn",
                    correct: false,
                },
            ],
        },
        {
            id: 3,
            question: "Who played the character of harry potter in movie?",
            answers: [
                {
                    text: "Johnny Deep",
                    correct: false,
                },
                {
                    text: "Leonardo Di Caprio",
                    correct: false,
                },
                {
                    text: "Denzel Washington",
                    correct: false,
                },
                {
                    text: "Daniel Red Cliff",
                    correct: true,
                },
            ],
        },
        {
            id: 4,
            question: "Who painted the famous artwork \"The Mona Lisa\"?",
            answers: [
                {
                    text: "Michelangelo",
                    correct: false,
                },
                {
                    text: "Pablo Picasso",
                    correct: false,
                },
                {
                    text: "Vincent van Gogh",
                    correct: false,
                },
                {
                    text: "Leonardo da Vinci",
                    correct: true,
                },
            ],
        },
        {
            id: 5,
            question: "What is the capital city of Australia?",
            answers: [
                {
                    text: "Sydney",
                    correct: false,
                },
                {
                    text: "Melbourne",
                    correct: false,
                },
                {
                    text: "Brisbane",
                    correct: false,
                },
                {
                    text: "Canberra",
                    correct: true,
                },
            ],
        },
        {
            id: 6,
            question: "Which famous scientist came up with the theory of relativity?",
            answers: [
                {
                    text: "Isaac Newton",
                    correct: false,
                },
                {
                    text: "Albert Einstein",
                    correct: true,
                },
                {
                    text: "Charles Darwin",
                    correct: false,
                },
                {
                    text: "Stephen Hawking",
                    correct: false,
                },
            ],
        },
        {
            id: 7,
            question: "What is the smallest country in the world by land area?",
            answers: [
                {
                    text: "Monaco",
                    correct: false,
                },
                {
                    text: "San Marino",
                    correct: false,
                },
                {
                    text: "Vatican City",
                    correct: true,
                },
                {
                    text: "Liechtenstein",
                    correct: false,
                },
            ],
        },
        {
            id: 8,
            question: "Which actor played the character \"Forrest Gump\" in the 1994 film of the same name?",
            answers: [
                {
                    text: "Tom Hanks",
                    correct: true,
                },
                {
                    text: "Brad Pitt",
                    correct: false,
                },
                {
                    text: "Johnny Depp",
                    correct: false,
                },
                {
                    text: "Will Smith",
                    correct: false,
                },
            ],
        },
        {
            id: 9,
            question: "Who wrote the novel \"To Kill a Mockingbird\"?",
            answers: [
                {
                    text: "Harper Lee",
                    correct: true,
                },
                {
                    text: "J.K. Rowling",
                    correct: false,
                },
                {
                    text: "Ernest Hemingway",
                    correct: false,
                },
                {
                    text: "F. Scott Fitzgerald",
                    correct: false,
                },
            ],
        },
        {
            id: 10,
            question: "In what year did the first iPhone release?",
            answers: [
                {
                    text: "2006",
                    correct: false,
                },
                {
                    text: "2007",
                    correct: true,
                },
                {
                    text: "2008",
                    correct: false,
                },
                {
                    text: "2009",
                    correct: false,
                },
            ],
        },
        {
            id: 11,
            question: "What is the chemical symbol for gold?",
            answers: [
                {
                    text: "Go",
                    correct: false,
                },
                {
                    text: "Gd",
                    correct: false,
                },
                {
                    text: "Au",
                    correct: true,
                },
                {
                    text: "Ag",
                    correct: false,
                },
            ],
        },
        {
            id: 12,
            question: "Which river is the longest in the world?",
            answers: [
                {
                    text: "Nile",
                    correct: true,
                },
                {
                    text: "Amazon",
                    correct: false,
                },
                {
                    text: "Yangtze",
                    correct: false,
                },
                {
                    text: "Mississippi",
                    correct: false,
                },
            ],
        },
        {
            id: 13,
            question: "What is the name of the world's tallest mountain?",
            answers: [
                {
                    text: "Mount Everest",
                    correct: true,
                },
                {
                    text: "Mount Kilimanjaro",
                    correct: false,
                },
                {
                    text: "Mount Denali",
                    correct: false,
                },
                {
                    text: "Mount Fuji",
                    correct: false,
                },
            ],
        },
        {
            id: 14,
            question: "Who is the lead singer of the band Coldplay?",
            answers: [
                {
                    text: "Brandon Flowers",
                    correct: false,
                },
                {
                    text: "Chris Martin",
                    correct: true,
                },
                {
                    text: "Thom Yorke",
                    correct: false,
                },
                {
                    text: "Eddie Vedder",
                    correct: false,
                },
            ],
        },
        {
            id: 15,
            question: "What is the largest known prime number, as of September 2021?",
            answers: [
                {
                    text: "2^77,232,917-1",
                    correct: false,
                },
                {
                    text: "2^82,589,933-1",
                    correct: false,
                },
                {
                    text: "2^86,243,257-1",
                    correct: false,
                },
                {
                    text: "2^94,207,281-1",
                    correct: true,
                },
            ],
        },
    ];


    const moneyPyramid = useMemo(() =>
        [
            { id: 1, amount: "₹ 100" },
            { id: 2, amount: "₹ 200" },
            { id: 3, amount: "₹ 300" },
            { id: 4, amount: "₹ 500" },
            { id: 5, amount: "₹ 1,000" },
            { id: 6, amount: "₹ 2,000" },
            { id: 7, amount: "₹ 4,000" },
            { id: 8, amount: "₹ 8,000" },
            { id: 9, amount: "₹ 16,000" },
            { id: 10, amount: "₹ 32,000" },
            { id: 11, amount: "₹ 64,000" },
            { id: 12, amount: "₹ 125,000" },
            { id: 13, amount: "₹ 250,000" },
            { id: 14, amount: "₹ 500,000" },
            { id: 15, amount: "₹ 1,000,000" },
        ].reverse()
        , []);

    /*
            useMemo is a hook provided by React that allows you to optimize the performance of your components by memoizing the results of expensive calculations.
            The basic idea behind useMemo is that it allows you to memoize the result of a function call, so that the function only gets re-evaluated when its dependencies change. This can be especially useful for computationally expensive functions or for functions that rely on expensive API calls, because it can help reduce unnecessary re-renders of your component.
    */

    useEffect(() => {
        questionNumber > 1 && setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
    }, [questionNumber, moneyPyramid]);

    // function shuffleArray(array) {
    //     // Create a copy of the original array to avoid modifying it directly
    //     const shuffledArray = [...array];

    //     // Shuffle the array using the Fisher-Yates shuffle algorithm
    //     for (let i = shuffledArray.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    //     }

    //     return shuffledArray;
    // }

    // data = shuffleArray(data);


    return (
        <div className="app">
            {!username ? (<Start setUsername={setUsername} />) : (
                <>
                    <div className="main">
                        {/* This condition for the game to stop if wrong answer */}
                        {timeOut ?
                            <h1 className='finalText'>{username}, you earned: {earned}</h1> :
                            (
                                <>
                                    <div className="top">
                                        <div className="timer"><Timer questionNumber={questionNumber} setTimeOut={setTimeOut} /></div>
                                    </div>
                                    <div className="bottom"><Trivia data={data} setTimeOut={setTimeOut} setQuestionNumber={setQuestionNumber} questionNumber={questionNumber} /></div>
                                </>
                            )
                        }

                        {/* <div className="top">
                    <div className="timer">30</div>
                </div>
                <div className="bottom"><Trivia data={data} setTimeOut={setTimeOut} setQuestionNumber={setQuestionNumber} questionNumber={questionNumber} /></div> */}
                    </div>
                    <div className="pyramid">
                        <ul className="moneyList">
                            {moneyPyramid.map((m) => (
                                <li className={questionNumber === m.id ? 'moneyListItem active' : 'moneyListItem'}>
                                    <span className="moneyListItem__Number">{m.id}</span>
                                    <span className="moneyListItem__Amount">{m.amount}</span>
                                </li>
                            ))}
                            {/* <li className='moneyListItem active'>
                        <span className="moneyListItem__Number">4</span>
                        <span className="moneyListItem__Amount">$ 400</span>
                    </li>
                    <li className='moneyListItem'>
                        <span className="moneyListItem__Number">4</span>
                        <span className="moneyListItem__Amount">$ 300</span>
                    </li>
                    <li className='moneyListItem'>
                        <span className="moneyListItem__Number">4</span>
                        <span className="moneyListItem__Amount">$ 200</span>
                    </li>
                    <li className='moneyListItem'>
                        <span className="moneyListItem__Number">4</span>
                        <span className="moneyListItem__Amount">$ 100</span>
                    </li> */}
                        </ul>
                    </div>
                </>)}
        </div>
    )
}

export default App