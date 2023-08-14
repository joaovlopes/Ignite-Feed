import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)
    
    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeCommment() {
        setLikeCount((likeState) => {
            return likeState + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                src="https://github.com/joaovlopes.png"
                hasBorder={false}
                alt=""
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>João Lopes</strong>

                            <time 
                                title="7 de outubro de 2002"
                                dateTime="2002-10-07 13:50:00"
                            >
                                Cerca de 1 hora atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeCommment}>
                        <ThumbsUp />
                        Aplaudir 
                        <span>{likeCount}</span>
                    </button>
                    
                </footer>

            </div>
        </div>
    )
}