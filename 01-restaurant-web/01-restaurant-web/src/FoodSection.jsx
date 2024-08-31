import { useState } from 'react'
import './FoodSection.css'
import { Icon } from './Icon'
import { Cart } from './Cart'

export function FoodSection({title}){
    const [cart, setCart] = useState(false)

    const cartClass = cart
    ? 'cart-overlay'
    : 'cart-hidden'

    const showCart = () => {
        setCart(!cart)
    }

    console.log(cart)

    return (
        <div className="fs-section">
            <h2>{title}</h2>
            <div className="fs-container">
                <FoodCard link_food="https://www.indega.com.py/primicia/wp-content/uploads/2022/04/pure-de-papa-con-pollo-broaster-large-qlJiPE4lyS.jpeg" description="Milanesa de carne y una guarnicion de pure de papas" prize="5000">Milanesa con Pure</FoodCard>

                <FoodCard link_food="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiKKUl8LhUc041taOwSB8duenk8vOoWWbABQ&s" description="Pan, lomito doble, huevo, jamon y queso" prize="5000">Lomito simple</FoodCard>

                <FoodCard link_food="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcbm2Rbwl5-gat3kcvoywPgSww6cnOLx1w_g&s" description="Sorrentinos de jamon y queso con salsa blanca" prize="5000">Sorrentinos</FoodCard>

                <FoodCard link_food="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWr_Gf6aQgf1YDlocWP5beeHswUvlqTLgLQ&s" description="Hamburguesa, pepino, huevo, panceta y queso" prize="5000">Hamburguesa Simple</FoodCard>
            </div>

            <div className="icon-cart" onClick={showCart}>
                <Icon link_icon="https://unavatar.io/universoparalelo">Icon Cart</Icon>
            </div>
            {/* <div  className={cartClass}>
                <Cart/>
            </div> */}
        </div>
    )
}


function FoodCard({children, link_food, description, prize}){
    const [added, setAdded] = useState(false)
    const [popup, setPopUp] = useState(false)
    const [count, changeCount] = useState(0)
    const [meals, addMeals] = useState([])

    const text_button = added 
    ? "Añadido" 
    : "Agregar"
    const buttonClass = added 
    ? 'fc-button is-added'
    : 'fc-button'

    const update_card = () => {
        setAdded(!added)
        if (added){
            addMeals(meals.push(
                {
                    'name':children,
                    'image':link_food,
                    'prize':prize,
                    'quantity':count
                }
            ))
        }
    } 
    const showPopUp = () => {
        setPopUp(!popup)
    }
    const add_count = () => {
        changeCount(count+1)
    }
    const rest_count = () => {
        if (count > 0){
            changeCount(count-1)
        }
    }
    const hidePopUp = () => {
        setPopUp(!popup)
    }

    console.log(meals)

    return(
        <div>
            <div className="fc-div" onClick={showPopUp}>
                <img className="fc-img" src={`${link_food}`} alt={children} />
                <strong>{children}</strong>
                <strong>${prize}</strong>
                <button className={buttonClass} onClick={update_card}>
                    {text_button}
                </button>
            </div>

            <div className={popup == true ? 'modal-overlay' : 'pop-up-hidden'}>
                <div className="fc-div popup-card">
                    <button className='fcp-close-button' onClick={hidePopUp}>x</button>
                    <img className="fcp-img" src={`${link_food}`} alt={children} />
                    <strong>{children}</strong>
                    <span className="fc-span">{description}</span>
                    <strong>${prize}</strong>
                    <div className="fcp-add-cart">
                        <button className="fcp-button-m" onClick={rest_count}>-</button>
                        <span className='fcp-span'>{count}</span>
                        <button className="fcp-button-m" onClick={add_count}>+</button>
                        <button className={buttonClass} onClick={update_card}>
                            {text_button}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}