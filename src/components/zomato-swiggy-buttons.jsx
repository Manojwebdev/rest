import '../../src/App.css'

import OrderNOwButton from './order-nowButton';

export default function SwiggyZomatoButtons() {
  return (
    <div className="swiggy-zomato-buttons-con flex-center">
      <button className="swiggyButton button">
        <a
          href="https://www.swiggy.com/city/bangalore/sai-aruna-marathahalli-rest437749"
          target="_blank"
        >
          order on swiggy
        </a>
      </button>
      <button className="zomatoButton button">
        <a
          href="https://www.zomato.com/bangalore/sai-aruna-brookefield-bangalore"
          target="_blank"
        >
          order on zomato
        </a>
      </button>
      <OrderNOwButton />
    </div>
  );
}
