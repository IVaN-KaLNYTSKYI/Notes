import {useState} from "react";

export default function Update ({userDetail,addUpdate,closeUpdate}) {
    const {id}=userDetail
    let [nameUpdate, setNameUpdate] = useState("");
    let [surnameUpdate, setSurnameUpdate] = useState("");
    let [ageUpdate, setAgeUpdate] = useState("");
    let [phoneUpdate, setPhoneUpdate] = useState("");
    let [cityUpdate, setCityUpdate] = useState("");
  return(
      <div>
          <form>
              <input
                  onChange={(e)=>setNameUpdate(e.target.value)}
                  placeholder={"NameUpdate"}
                  defaultValue={userDetail.name}
              />
              <input
                  onChange={(e)=>setSurnameUpdate(e.target.value)}
                  placeholder={"SurnameUpdate"}
                  defaultValue={userDetail.surname}
              />
              <input
                  onChange={(e)=>setAgeUpdate(e.target.value)}
                  placeholder={"AgeUpdate"}
                  defaultValue={userDetail.age}

              />
              <input
                  onChange={(e)=>setPhoneUpdate(e.target.value)}
                  placeholder={"PhoneUpdate"}
                  defaultValue={userDetail.phone}
              />
              <input
                  onChange={(e)=>setCityUpdate(e.target.value)}
                  placeholder={"CityUpdate"}
                  defaultValue={userDetail.city}
              />
              <button className={"green"} onClick={()=>addUpdate(nameUpdate,
                  surnameUpdate,
                 ageUpdate,
                  phoneUpdate,
                  cityUpdate,id)}>addUpdate</button>
              <button className={"gold"}  onClick={()=>closeUpdate()}>closeUpdate</button>
          </form>
      </div>
  )
}