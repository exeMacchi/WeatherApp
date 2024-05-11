import "./ExtraInfo.css";

const MainExtraInfo = ({icon, info}) => {
    return (
        <div className="extra-info__container">
            <span className="material-symbols-outlined extra-info__icon">{icon}</span>
            <p className="extra-info__info">{info}</p>
        </div>
    );
}

export default MainExtraInfo;
