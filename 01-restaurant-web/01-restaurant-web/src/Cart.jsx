import './Cart.css'

export function Cart({meals}){
    // const meals = [
    //     {
    //         'name': 'Milanesa con pure',
    //         'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWr_Gf6aQgf1YDlocWP5beeHswUvlqTLgLQ&s',
    //         'prize': '6000',
    //         'quantity': 2
    //     },
    //     {
    //         'name': 'Lomito simple',
    //         'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWr_Gf6aQgf1YDlocWP5beeHswUvlqTLgLQ&s',
    //         'prize': '8000',
    //         'quantity': 1
    //     }
    // ]
    let total = 0
    return (
        <div className="cart">
            <h3>Tu carrito</h3>
            {
                meals.map((_,index) => {
                    {total += (Number(meals[index].prize)*meals[index].quantity)}
                    return (
                    <div className="meal" key={index}>
                        <img className='ct-img' src={meals[index].image}/>
                        <strong>{meals[index].name}</strong>
                        <strong>${meals[index].prize}</strong>
                        <span>{meals[index].quantity}</span>
                    </div>
                    )
                }
                )
            }
            <strong>Total: ${total}</strong>
        </div>
    )
}