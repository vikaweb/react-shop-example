import { BasketItem } from './BasketItem';
function BasketList(props) {
  const {
    order = [],
    handBasketShow = Function.prototype,
    deleteFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((acc, item) => {
    return acc + item.price.regularPrice * item.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">
        Корзина{' '}
        <button onClick={handBasketShow} className="btn basket-btn right">
          <i className="material-icons">close</i>
        </button>
      </li>
      {console.log(order, 'order')}
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.offerId}
            {...item}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
            deleteFromBasket={deleteFromBasket}
          />
        ))
      ) : (
        <li className="collection-item ">корзина пуста</li>
      )}

      <li className="collection-item active">
        Общая стоимость: {totalPrice} тенге
        <button className="secondary-contetn right">Оформить</button>
      </li>
    </ul>
  );
}

export { BasketList };
