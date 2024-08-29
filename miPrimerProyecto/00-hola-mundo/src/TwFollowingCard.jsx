import { useState } from "react"

export function TwFollowingCard({children,userName, initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? "Siguiendo" : "Seguir"
    const buttonClassName = isFollowing 
    ? 'tw-button isFollowing'
    : 'tw-button'

    const onHandle = ()=>{
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-article">
            <header className="tw-header">
                <img className="tw-img" src={`https://unavatar.io/${userName}`}/>
            </header>

            <aside className="tw-aside">
                <strong>{children}</strong>
                <span>@{userName}</span>
            </aside>

            <div>
                <button className={buttonClassName} onClick={onHandle}>
                    <span className="tw-following">{text}</span>
                    <span className="tw-stopFollow">Dejar de seguir</span>
                </button>
            </div>
        </article>
    )
}