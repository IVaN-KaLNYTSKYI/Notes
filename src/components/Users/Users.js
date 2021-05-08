import {useState,useEffect} from "react";
import User from "../User/User";
import Create from "../Create/Create";
import './Users.css'

export default function Users() {
    let [name, setName] = useState("");
    let [surname, setSurname] = useState("");
    let [age, setAge] = useState("");
    let [phone, setPhone] = useState("");
    let [citi, setCiti] = useState("");
    let [users, setUsers] = useState(JSON.parse(localStorage.getItem("users"))||[]);
    let [userDetail, setUserDetail] = useState(null);
    let [flag, setFlag] = useState(false);
    let [flagCreate, setFlagCreate] = useState(true);
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

    const create=()=>{
        setFlag(true);
        setFlagCreate(false)
    }
    const close=()=>{
        setFlag(false);
        setFlagCreate(true)
    }

    const add=(e)=>{
        e.preventDefault();
        if(name!==""&&phone.startsWith("+380")) {
            setUsers([...users, {name, surname, age, phone, citi, id: Date.now()}])
        }else {
            alert("Доброго дня)))" +
                "Ви забули ввести Name або номер телефону починається не на +380")
        }
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

                    userDetail&&(
                        <div className={"info_user"}>
                            <span className={"user_name"}>Name:{userDetail.name}</span>
                            <span className={"user_surname"}>Surname:{userDetail.surname}</span>
                            <span className={"user_age"}>Age:{userDetail.age}</span>
                            <span className={"user_phone"}>Phone:{userDetail.phone}</span>
                            <span className={"user_citi"}>City:{userDetail.citi}</span>
                            <button className={"btn-up"} onClick={update}>update</button>
                            <button className={"btn-del"} onClick={del}>del</button>
                        </div>)
                }
            </div>
            <div className={"box-form"}>
                {
                    flag&&
                    <Create
                            createName={createName}
                            createSurname={createSurname}
                            createAge={createAge}
                            createPhone={createPhone}
                            createCiti={createCiti}
                            add={add}
                            close={close}
                        />
                }
                {
                    flagCreate&& <button className={"create-btn"} onClick={create}>Create</button>
                }
            </div>
        </div>
    )
}