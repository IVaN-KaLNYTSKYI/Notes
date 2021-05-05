
export default function Users(props) {
    const {name, surname, age,phone,citi} = props
    return (
        <div>
            <span>{name}</span>
            <span>{surname}</span>
            <span>{age}</span>
            <span>{phone}</span>
            <span>{citi}</span>
        </div>
    )
}