import useFetch from "../../hooks/useFetch";
import "../../styles/_featuredProperties.scss";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/properties?featured=true&limit=4"
  );

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fp__item" key={item._id}>
              <img src={item.photos[0]} alt="" className="fp__img" />
              <span className="fp__name">{item.name}</span>
              <span className="fp__city">{item.city}</span>
              <span className="fp__price">Starting from ${item.roomPrice}</span>
              {item.rating && (
                <div className="fp__rating">
                  <button className="fp__rating-button">{item.rating}</button>
                  <span className="fp__rating-text">Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
