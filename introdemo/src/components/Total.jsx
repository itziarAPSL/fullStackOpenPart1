import Part from "./Part"

const Total = ({total})=>{
    const text="Number of exercises";
    return (<Part text={text} exercises={total} />)
}

export default Total