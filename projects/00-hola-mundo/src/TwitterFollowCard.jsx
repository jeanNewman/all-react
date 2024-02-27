import { useState } from "react";

export function TwitterFollowCard({formatUserName, userName = "unknow", name, initialFollowing}) {

    const [isFollowing, setFollowing] = useState(initialFollowing)

    const avatar = `https://unavatar.io/${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClass = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
   
    const handleFollowClick = () => {
        setFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    src={avatar} 
                    alt="sample logo" />
                <div className='tw-followCard-div'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-span'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside >
                <button className={buttonClass} onClick={handleFollowClick}>
                  <span className='tw-followCard-text'> {text}</span> 
                  <span className='tw-followCard-stopFollow'> Dejar de seguir</span> 
                </button>
            </aside>
        </article>
    );
}