import "./ProductCard.css";

export const ProductCard = ({product}) => {
  const {name, price, image} = product;

return (
  <div className="productCard">
      <img src={image} alt={name} />
  
      <h1 className="name">{name}</h1>

      <div className="action">
        <p>${price}</p>
        
        <button>Add to Cart</button>
      </div>
    </div>
)
}
