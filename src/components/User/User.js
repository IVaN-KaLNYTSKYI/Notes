import "./User.css"

export default function User(props) {
    const {name, surname,id,detail} = props
    return (
        <div className={"user_wrapper"}>
            <div className={"user_one"}>
                <span>{name} {surname}</span>
            </div>
            <div className={'box_btn'}>
                <button className={"btn_detail"} onClick={() => detail(id)}>detail</button>
            </div>
        </div>
    )
}