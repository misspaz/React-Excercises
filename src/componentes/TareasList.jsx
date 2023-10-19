export default function TareasList({array}){
    return <ul>
        {array.map((item, index )=> <li key={index}>{item.tarea}</li>)}
    </ul>
}