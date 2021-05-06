import {useState,useEffect} from "react";
import User from "../User/User";
import Create from "../Create/Create";
import './Users.css'

export default function Users(props) {
    let [name, setName] = useState("");
    let [surname, setSurname] = useState("");
    let [age, setAge] = useState("");
    let [phone, setPhone] = useState("");
    let [citi, setCiti] = useState("");
    let [users, setUsers] = useState(JSON.parse(localStorage.getItem("users"))||[]);
    let [userDetail, setUserDetail] = useState(null);
    let [flag, setFlag] = useState(false);
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    })
    const createName=(valueName)=>setName(name=valueName);
    const createSurname=(valueSurname)=>setSurname(surname=valueSurname);
    const createAge=(valueAge)=>setAge(age=valueAge);
    const createPhone=(valuePhone)=>setPhone(phone=valuePhone);
    const createCiti=(valueCiti)=>setCiti(citi=valueCiti);

    const del = () => {
        setUsers(users.filter((value => value.id !== userDetail.id)))
        setUserDetail("")
    }
    const update = () => {
    }
    const detail = (id) => {
        const detailUser=users.find(value => value.id===id);
        setUserDetail(detailUser)
    }

    const create=()=>setFlag(true);
    const close=()=>setFlag(false);

    const add=(e)=>{
        e.preventDefault();
        setUsers([...users, {name, surname,age,phone,citi,id: Date.now()}])
    };


    return (
        <div className={"wrapper"}>
            <div className={"box-user"}>
                {
                    users.map((value)=>
                        <User
                            key={value.id}
                            {...value}
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
                {
                    flag?
                        <Create
                            createName={createName}
                            createSurname={createSurname}
                            createAge={createAge}
                            createPhone={createPhone}
                            createCiti={createCiti}
                            add={add}
                            close={close}
                        />
                    /*<form>
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
                        <button onClick={add}>add</button>
                        <button onClick={close}>close</button>
                    </form>*/
                        :<span></span>
                }
                <button onClick={create}>Create</button>
            </div>
        </div>
    )
}