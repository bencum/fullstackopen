import {useState} from "react";

const Button = ({label, onClick}) => <button onClick={onClick}>{label}</button>;

const StatisticLine = ({label, statistic}) => <tr><td>{label}</td><td>{statistic}</td></tr>;

const Statistics = ({good, neutral, bad}) => {
    return (
        <>
            <h1>Statistics</h1>
            {good + neutral + bad ? (
                <table>
                    <StatisticLine label="Good" statistic={good} />
                    <StatisticLine label="Neutral" statistic={neutral} />
                    <StatisticLine label="Bad" statistic={bad} />
                    <StatisticLine label="All" statistic={good + neutral + bad} />
                    <StatisticLine label="Average" statistic={(good * 1 + bad * -1) / (good + neutral + bad)} />
                    <StatisticLine label="Positive" statistic={`${good / (good + neutral + bad) * 100}%`} />
                </table>
            ) : (
                <p>No feedback provided.</p>
            )}
        </>
    );
};

export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <>
            <h1>Give Feedback</h1>
            <Button label="Good" onClick={() => setGood(good + 1)} />
            <Button label="Neutral" onClick={() => setNeutral(neutral + 1)} />
            <Button label="Bad" onClick={() => setBad(bad + 1)} />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </>
    );
};
