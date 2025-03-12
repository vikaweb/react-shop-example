import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import { Alert } from './Alert';
import { BasketList } from './BasketList';
import { Cart } from './Cart';
import { GoodsList } from './GoodsList';
import { Preloader } from './Preloader';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const handBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  useEffect(() => {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Ошибка при фетче данных:', err);
      });
  }, []);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.offerId === item.offerId);
    console.log(itemIndex, 'itemIndex');
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else return orderItem;
      });
      setOrder(newOrder);
    }
    setAlertName(item.displayName);
  };
  const deleteFromBasket = (item) => {
    console.log('delete');
    const updatedOrder = order.filter((good) => good.offerId !== item);
    setOrder(updatedOrder);
  };

  const incQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.offerId === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };
  const decQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.offerId === itemId) {
        const newQuantity = el.quantity - 1;

        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const closeAlert = () => {
    setAlertName('');
  };

  return (
    <main className="container content">
      <Cart handBasketShow={handBasketShow} quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList addToBasket={addToBasket} goods={goods} />}
      {isBasketShow && (
        <BasketList
          deleteFromBasket={deleteFromBasket}
          handBasketShow={handBasketShow}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
          order={order}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}
export { Shop };
