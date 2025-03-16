import UserIcon from "./assets/icons/user.svg";

export default function Panel(){
    return (
        <div className="panel flex FY-center F-space">
            <h3>Admin Panel</h3>
            <a href="/login" >
                <div className="user flex FY-center">
                    <div className="icon MR">
                        <img src={UserIcon} alt="user icon" />
                    </div>
                    <span>Admin</span>
                </div>
            </a>
        </div>
    )
}