export default function TodoList({data}){
    return <ul>
        {data.map((item, index )=> <li key={index}>{item}</li>)}
    </ul>
}