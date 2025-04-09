const imageUrl = ''

const ChannelAvater = ({url}) => {
    return(
        <div className="channels-avart-container">
            <img src={url || imageUrl} width='100%' height='100%' alt="Default avatar" />
        </div>
    )
}

export const ChannelCard = ({
    title,
    id,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler
}) => {
    const handleNavigate = () => {
        navigateToChannelHandler(id)
    }

    return(
        <div className="channels-card" onClick={handleNavigate}>
            <ChannelAvater url={avatarUrl}/>
            <span className="channels-card-title">{title}</span>
            <span className="channels-card-title">{title}</span>
            <span className="channels-card-title">{title}</span>
            <span className="channels-card-title">{title}</span>
        </div>
    )
}