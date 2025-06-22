const Header = props => <h1>{props.course}</h1>;

const Content = props => <div>{props.parts.map(part => <Part name={part.name} exercises={part.exercises} />)}</div>;

const Part = props => <p>{props.name} {props.exercises}</p>;

const Total = props => <p>Number of exercises is {props.parts.reduce((runningTotal, currentPart) => runningTotal + currentPart.exercises, 0)}</p>;

export const App = () => {
    const course = {
        "name": "Half Stack Application Development",
        "parts": [
            {
                "name": "Fundamentals of React",
                "exercises": 10
            },
            {
                "name": "Using Props to Pass Data",
                "exercises": 7
            },
            {
                "name": "State of a Component",
                "exercises": 14
            }
        ]
    };

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};
