function BasketItem(props) {
  const {
    offerId,
    displayName,
    price,
    quantity,
    incQuantity = Function.prototype,
    deleteFromBasket = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      <table>
        <tbody>
          <tr>
            <td className="width_40">{displayName}</td>
            <td className="flex">
              {' '}
              <button
                onClick={() => {
                  incQuantity(offerId);
                }}>
                <i className="material-icons">add</i>
              </button>
              {quantity}
              <button
                onClick={() => {
                  decQuantity(offerId);
                }}>
                {' '}
                <i className="material-icons">remove</i>
              </button>
            </td>
            <td>{price.regularPrice} тенге</td>
            <td>
              {' '}
              <span onClick={() => deleteFromBasket(offerId)} className="secondary-content">
                <i className="material-icons">close</i>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </li>
  );
}

export { BasketItem };
