const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ListItem({product}){
    let styles = {
        color: product.isFruit ? 'magenta' : 'darkgreen'
    }
    return <li key={product.id} style={styles} className="bordered">
        {product.title}
    </li>
}

export default function MyApp() {
  return (
        <h1>
            {
                products.map(product =>
                    <ListItem product={product} />
                )
            }
        </h1>
  );
}