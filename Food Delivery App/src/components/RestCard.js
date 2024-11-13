
const RestCard = (props) => {
    console.log(props)
    const { resData } = props
    const { cloudinaryImageId, name, avgRating, costForTwo, areaName, cuisines } = resData
    return (
        <div className="res-card">
            <div className="res-name">
                <img className="res-images"
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
                <h4>{name}</h4>
            </div>
            <div className="res-info">
                <div className="distance-rating spans">{avgRating + "_" + costForTwo}</div>
                <div className="cusines spans">{cuisines.join(",")}</div>
                <div className="adress spans">{areaName}</div>

            </div>
        </div>
    )
}
export default RestCard