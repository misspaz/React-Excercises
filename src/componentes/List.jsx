export default function List({info}){

    return <ul>
        {info.map((item, index) => <li key={index}>{item.nombre}</li>)}
    </ul>
}