const CurrentDetail = ({icon, info}) => {
    return (
        <div className="extra-info__container">
            <span className="material-symbols-outlined extra-info__icon">{icon}</span>
            <span className="extra-info__info">{info}</span>
        </div>
    );
}

export default CurrentDetail;
