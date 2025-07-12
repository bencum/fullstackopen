import {useState} from "react";

const Anecdote = ({heading, anecdote, votes}) => (
    <section>
        <h1>{heading}</h1>
        <p>
            <q>{anecdote}</q> has {votes} votes.
        </p>
    </section>
);

const Button = ({label, onClick}) => <button onClick={onClick}>{label}</button>;

export const App = () => {
    const anecdotes = [
        "If it hurts, do it more often.",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 90 percent of the development time... the remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimisation is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "The only way to go fast, is to go well."
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const [popularIndex, setPopularIndex] = useState(0);

    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

    return (
        <>
            <Anecdote heading="Random Anecdote" anecdote={anecdotes[currentIndex]} votes={votes[currentIndex]} />

            <Button label="Next Anecdote" onClick={() => setCurrentIndex(Math.floor(Math.random() * anecdotes.length))} />

            <Button label="Upvote" onClick={() => {
                const updatedVotes = [...votes];

                updatedVotes[currentIndex] += 1;

                setVotes(updatedVotes);

                if (updatedVotes[currentIndex] > updatedVotes[popularIndex])
                    setPopularIndex(currentIndex);
            }} />

            <Anecdote heading="Popular Anecdote" anecdote={anecdotes[popularIndex]} votes={votes[popularIndex]} />
        </>
    );
};
