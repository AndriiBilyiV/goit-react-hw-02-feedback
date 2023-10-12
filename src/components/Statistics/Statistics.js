export const Statistics = ({props, total}) => {
    console.log(props)
    const { good, neutral, bad } = props;
    return (
        <div>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total:{total}</p>
        </div>
    )
}