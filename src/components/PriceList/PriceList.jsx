import './PriceList.scss';

function PriceList({ translations }) {
  return (
    <section className="price-list" id="priceList">
      <div className="price-list__container">
        <div className="price-list__header">
          <h2 className="price-list__title">{translations.priceList.title}</h2>
        </div>

        <div className="price-list__content">
          {translations.priceList.categories.map((category, index) => (
            <div className="price-list__category" key={index}>
              <h3 className="price-list__category-title">{category.title}</h3>
              <ul className="price-list__items">
                {category.items.map((item, itemIndex) => (
                  <li className="price-list__item" key={itemIndex}>
                    <span className="price-list__item-name">{item.name}</span>
                    <span className="price-list__item-price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PriceList;
