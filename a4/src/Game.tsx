import React, { useEffect, useState } from 'react';
import History from './History';

type Turn = {
    question: string,
    answer: string
}

const Game = () => {
    const ansOptions = [
        "As I see it, yes.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "It is certain.",
        "It is decidedly so.",
        "Most likely.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Outlook good.",
        "Reply hazy, try again.",
        "Signs point to yes.",
        "Very doubtful.",
        "Without a doubt.",
        "Yes.",
        "Yes - definitely.",
        "You may rely on it."
      ];

      const [turns, setTurns] = useState<Turn[]>([]);
      const [ansGiven, setAns] = useState("");

      useEffect(() => {
        document.title = `Number of questions asked: ${turns.length}`
    }, [turns]);

    
    const questionHandler = (event: any) => {
        event.preventDefault();

        if (event.currentTarget[0].value.length > 1 && event.currentTarget[0].value.includes('?')) {
            const ansIndex = Math.floor(Math.random() * (ansOptions.length - 1));
            setTurns([{
                question: event.currentTarget[0].value,
                answer: ansOptions[ansIndex]
            }, ...turns]);
            setAns(ansOptions[ansIndex]);
            event.currentTarget.reset();
        } else {
            alert("Invalid Question. Please input at least one character and a questionmark")
        }
    }
    return (
        <div>
            <h1>Magic 8 Ball</h1>
            <h3> {`Number of questions asked: ${turns.length}`} </h3>
         
                <div>
                    <form className = "question" onSubmit = {questionHandler}>
                        <input type = 'text' placeholder = "Ask a question"/>
                        <button type = "submit">Ask!</button>
                    </form>

                    <img src = "https://magic-8ball.com/assets/images/magicBallStart.png" />
                    <h2 className = "answer">{ansGiven}</h2>
                </div>
                <History questionAsked = {turns} />
           
        </div>
    );
}

export default Game;
