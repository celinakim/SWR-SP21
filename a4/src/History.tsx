import React from 'react';

type Props = {
    questionAsked: { readonly question: string, readonly answer: string }[]
}

const History = ({questionAsked} :Props) => {
    return(
        <div className = "history">
            <h4>Q/A History</h4>
            {questionAsked.map((questionAsked,i) =>
            <div key = {i}>
                <p>Q: {questionAsked.question}</p>
                <p>A: {questionAsked.answer}</p>
                </div>
                )}
        </div>
            )
    };

export default History;