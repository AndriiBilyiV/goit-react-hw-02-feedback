export const Statistics = ({props, countTotal, goodPercent}) => {
    const total = countTotal(props);
    const percent = goodPercent(props)
    const { good, neutral, bad } = props;
    return (
        <div>
            <h2>Statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback {percent}%</p>
        </div>
    )
}