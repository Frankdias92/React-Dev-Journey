import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css';
import { getProfileFromStorage } from '../storage/storageutil';

const { name: storeName, profileImage: storeImage, role: storeRole } = getProfileFromStorage();

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'text' | 'link' | string;
  content: React.ReactNode;
}

interface CommentType {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: string[];
  publishedAt: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState<CommentType[]>([
    {
      id: 1,
      author: {
        avatarUrl: '/src/assets/user1.jpg',
        name: 'Albert M. McGee',
        role: 'Front-End',
      },
      content: [
        "Reading is such a wonderful way to escape and broaden our horizons. What was the book? I'm always looking for new recommendations!"
      ],
      publishedAt: new Date('2023-11-24 18:30:00').toISOString(),
    },
    {
      id: 2,
      author: {
        avatarUrl: '/src/assets/user2.jpg',
        name: 'Melissa Costa',
        role: 'Front-End',
      },
      content: [
        "That sounds wonderful! Family time is so precious, and those moments of togetherness are truly special. Enjoy every moment!"
      ],
      publishedAt: new Date('2023-11-22 11:30:00').toISOString(),
    },
    {
      id: 3,
      author: {
        avatarUrl: ('/src/assets/user3.jpg'),
        name: 'Melissa Costa',
        role: 'Front-End',
      },
      content: [
        "Sounds like an amazing adventure! Traveling and experiencing new cultures is so enriching. Wishing you a fantastic trip and lots of unforgettable memories!"
      ],
      publishedAt: new Date('2023-11-22 18:31:00').toISOString(),
    }
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, { locale: ptBR, addSuffix: true });

  function handleNewComment(event: FormEvent) {
    event.preventDefault();

    const newComment = {
      id: comments.length + 1,
      author: {
        avatarUrl: `https://github.com/${storeImage}.png`,
        name: storeName,
        role: storeRole
      },
      content: [newCommentText],
      publishedAt: new Date().toISOString(),
    };

    setComments([newComment, ...comments]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Invalid Comment, please enter a valid comment');
  }

  function deleteComment(commentToDeleteId: number) {
    const commentsWithoutDeletedOne = comments.filter(comment => comment.id !== commentToDeleteId);
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} alt={post.author.name} />
          <div className={styles.authorInfo} >
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line, index) => {
          if (line.type === 'text') {
            return <p key={index}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={index}><a href="#">{line.content}</a></p>
          }
          return null;
        })}
      </div>

      <form onSubmit={handleNewComment} className={styles.commentForm}>
        <strong>Leave a comment</strong>

        <textarea
          name='comment'
          placeholder='Leave a comment here'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Enviar Comentário</button>
        </footer>
      </form>

      <div className={styles.commentList} >
        {comments.map(comment => (
          <Comment 
            key={comment.id}
            avatarUrl={comment.author.avatarUrl}
            name={comment.author.name}
            content={comment.content}
            publishedAt={comment.publishedAt}
            onDeleteComment={() => deleteComment(comment.id)}
          />
        ))}
      </div>
    </article>
  )
}
