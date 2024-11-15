import React, {useState} from "react";

export const Comments = ({eventId}) =>{
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleCommentChange = (e) =>{
        setNewComment(e.target.value);
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };
    return(
        <>
            <div className='comments'>
                <h3>Komentarze</h3>
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={newComment}
                        onChange={handleCommentChange}
                        placeholder='Dodaj komentarz'
                        required
                    />
                    <button type='submit'>Wyślij komentarz</button>

                </form>
                <div className='comment-list'>
                    {comments.map((comment, index)=>(
                        <div key={index} className='comment'>
                            <p>{comment}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}