const Header = props => <h1>{props.course}</h1>;

const Content = props => <div>{props.parts.map(part => <Part name={part.name} exerciseCount={part.exerciseCount} />)}</div>;

const Part = props => <p>{props.name} {props.exerciseCount}</p>;

const Total = props => <p>Number of exercises is {props.parts.reduce((runningTotal, currentPart) => runningTotal + currentPart.exerciseCount, 0)}</p>;

export const App = () => {
    const course = "Half Stack Application Development";

    const parts = [
        {
            "name": "Fundamentals of React",
            "exerciseCount": 10
        },
        {
            "name": "Using Props to Pass Data",
            "exerciseCount": 7
        },
        {
            "name": "State of a Component",
            "exerciseCount": 14
        }
    ];

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    );
};
