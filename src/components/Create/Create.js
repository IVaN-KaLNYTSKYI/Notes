import "./Create.css"
export default function Create (props){
    const {createName,createSurname,createAge,createPhone,createCiti,add,close}=props
    return(
        <div className={"form"}>
            <form>
                <input
                    onChange={(e)=>createName(e.target.value)}
                    placeholder={"Name"}
                />
                <input
                    onChange={(e)=>createSurname(e.target.value)}
                    placeholder={"Surname"}
                />
                <input
                    onChange={(e)=>createAge(e.target.value)}
                    placeholder={"Age"}
                />
                <input
                    onChange={(e)=>createPhone(e.target.value)}
                    placeholder={"Phone"}
                    defaultValue={"+380"}
                />
                <input
                    onChange={(e)=>createCiti(e.target.value)}
                    placeholder={"City"}
                />
                <button className={"green"} onClick={(e)=>add(e)}>add</button>
                <button className={"gold"}  onClick={()=>close()}>close</button>
            </form>
        </div>
    )
}