function GoodsItem(props) {
  const {
    offerId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    addToBasket = Function.prototype,
  } = props;
  const fullBackground =
    displayAssets && displayAssets.length > 0 ? displayAssets[0].full_background : '';

  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: fullBackground ? `url(${fullBackground})` : 'none' }}>
        {!fullBackground && <p>No image available</p>}
      </div>

      <div className="card-content">
        <p className="card-title">{displayName}</p>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          onClick={() =>
            addToBasket({
              displayName,
              offerId,
              price,
            })
          }
          className="btn">
          Купить
        </button>
        <span>{price.regularPrice} тг.</span>
      </div>
    </div>
  );
}

export { GoodsItem };
