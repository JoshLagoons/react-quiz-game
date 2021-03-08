import "./social-post.css"

function SocialPost({message, userName, buts1, buts2, buts3})
 {
    return(
        <div className="social-message">
            <div>{message}</div>
            <span className="social-message__name">{userName}</span>
        <span>
        <button className="social-message__numLikes">{buts1}</button>
        <button className="social-message__numSparkles">{buts2}</button>
        <button className="social-message__numThumbsUp">{buts3}</button>
        </span>
        </div>


    )
};
export default SocialPost;
