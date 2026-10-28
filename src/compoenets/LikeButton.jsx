

const LikeButton = () =>{
    return (
        <div>
            <h2>좋아요 </h2>
            
            <button onClick={() => dispatch({type: 'INCREMENT'})}>버튼</button>
            
        </div>

    )
}
export default LikeButton