const CurrentDetail = ({icon, info}) => {
    return (
        <div className="current-detail__item">
            <span className="current-detail__icon material-symbols-outlined">{icon}</span>
            <span className="current-detail__info">{info}</span>
        </div>
    );
}

export default CurrentDetail;
