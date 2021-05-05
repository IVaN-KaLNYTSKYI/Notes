/*import {useState,useEffect} from "react";*/
import "./User.css"

export default function User(props) {
    const {name, surname,id, age,del,update,detail} = props
    return (
        <div className={"user_wrapper"}>
            <div className={"user_one"}>
                <span>Name:{name}</span>
                <span>Surname:{surname}</span>
                <span>Age:{age}</span>
            </div>
            <div className={'box_btn'}>
                <button className={"btn_up"} onClick={() => update(id)}>update</button>
                <button className={"btn_del"} onClick={() => del(id)}>del</button>
                <button className={"btn_detail"} onClick={() => detail(id)}>detail</button>
            </div>
        </div>
    )
}