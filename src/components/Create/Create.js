import {useState,useEffect} from "react";
import Users from "../Users/Users";
export default function Create(){
    let [name, setName] = useState("");
    let [surname, setSurname] = useState("");
    let [age, setAge] = useState("");
    let [phone, setPhone] = useState("");
    let [citi, setCiti] = useState("");
    let [users, setUsers] = useState(JSON.parse(localStorage.getItem("arr"))||[]);
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    })
    const createName=(e)=>setName(name=e.target.value);
    const createSurname=(e)=>setSurname(surname=e.target.value);
    const createAge=(e)=>setAge(age=e.target.value);
    const createPhone=(e)=>setPhone(phone=e.target.value);
    const createCiti=(e)=>setCiti(citi=e.target.value);

    const create=(e)=>{
        e.preventDefault();
        setUsers([...users, {name, surname,age,phone,citi,id: Date.now()}])
    }
    return (
        <div>
            <div>
                <div>
                    <form>
                        <input
                            onChange={createName}
                            placeholder={"Name"}
                        />
                        <input
                            onChange={createSurname}
                            placeholder={"Surname"}
                        />
                        <input
                            onChange={createAge}
                            placeholder={"Surname"}
                        />
                        <input
                            onChange={createPhone}
                            placeholder={"Surname"}
                        />
                        <input
                            onChange={createCiti}
                            placeholder={"Surname"}
                        />
                        <button onClick={create}>Create</button>
                    </form>
                </div>
            </div>
            <div>
                {
                    users.map((value)=>
                        <Users
                        key={value.id}
                        {...value}
                        />
                    )
                }

            </div>
        </div>
    )
}