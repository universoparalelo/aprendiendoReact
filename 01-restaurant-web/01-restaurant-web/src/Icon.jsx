import './Icon.css'

export function Icon({children, link_icon, link="#"}){
    
    return (
        <>
        <div className="ic-div">
            <button className='bt-icon'>
                <img className="ic-img" src={`${link_icon}`} alt={children} />
            </button>
        </div>
        </>
    )
}