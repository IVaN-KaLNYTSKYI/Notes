import {useState,useEffect} from "react";
import User from "../User/User";
import './Users.css'


export default function Users(props) {
    let [name, setName] = useState("");
    let [surname, setSurname] = useState("");
    let [age, setAge] = useState("");
    let [phone, setPhone] = useState("");
    let [citi, setCiti] = useState("");
    let [users, setUsers] = useState(JSON.parse(localStorage.getItem("users"))||[]);
    let [userDetail, setUserDetail] = useState(null);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    })
    const createName=(e)=>setName(name=e.target.value);
    const createSurname=(e)=>setSurname(surname=e.target.value);
    const createAge=(e)=>setAge(age=e.target.value);
    const createPhone=(e)=>setPhone(phone=e.target.value);
    const createCiti=(e)=>setCiti(citi=e.target.value);

    const del = (id) => {
        setUsers(users.filter((value => value.id !== userDetail.id)))
        setUserDetail("")
    }
    const update = (id) => {

    }
    const detail = (id) => {
        const detailUser=users.find(value => value.id===id);
        setUserDetail(detailUser)
    }
    const create=(e)=>{
        e.preventDefault();
        setUsers([...users, {name, surname,age,phone,citi,id: Date.now()}])
    }
    return (
        <div className={"wrapper"}>
            <div className={"box-user"}>
                {
                    users.map((value)=>
                        <User
                            key={value.id}
                            {...value}
                           /* del={del}
                            update={update}*/
                            detail={detail}
                        />
                    )
                }

            </div>
            <div className={"detail_user"}>
                {

                    userDetail?(
                        <div className={"info_user"}>
                            <span className={"user_phone"}>Phone:{userDetail.phone}</span>
                            <span className={"user_citi"}>Citi:{userDetail.citi}</span>
                            <button className={"btn_up"} onClick={update}>update</button>
                            <button className={"btn_del"} onClick={del}>del</button>
                        </div>
                    ):(
                        <span></span>
                    )
                }
            </div>
            <div className={"box-form"}>
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
                            placeholder={"Age"}
                        />
                        <input
                            onChange={createPhone}
                            placeholder={"Phone"}
                        />
                        <input
                            onChange={createCiti}
                            placeholder={"Citi"}
                        />
                        <button onClick={create}>Create</button>
                    </form>
            </div>
        </div>
    )
}