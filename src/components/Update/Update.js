import {useState} from "react";

export default function Update ({userDetail,addUpdate,closeUpdate}) {
    const {id}=userDetail
    let [name, setNameUpdate] = useState(userDetail.name);
    let [surname, setSurnameUpdate] = useState(userDetail.surname);
    let [age, setAgeUpdate] = useState(userDetail.age);
    let [phone, setPhoneUpdate] = useState(userDetail.phone);
    let [city, setCityUpdate] = useState(userDetail.city);
  return(
      <div>
          <div>
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
              <button className={"green"} onClick={()=>addUpdate({
                  name,
                  surname,
                  age,
                  phone,
                  city, id
              })}>addUpdate</button>
              <button className={"gold"}  onClick={()=>closeUpdate()}>closeUpdate</button>
          </div>
      </div>
  )
}
