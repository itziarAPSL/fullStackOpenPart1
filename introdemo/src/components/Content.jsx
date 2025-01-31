import Part from "./Part"

const Content = ({text1,exercises1, text2,exercises2,text3,exercises3}) =>{
return(
    <div>
        <Part text={text1} exercises={exercises1} />
        <Part text={text2} exercises={exercises2} />
        <Part text={text3} exercises={exercises3} />
    </div>)
}

export default Content