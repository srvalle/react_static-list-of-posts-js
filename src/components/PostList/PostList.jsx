/* eslint-disable no-console */
import './PostList.scss';
import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => {
  // console.log(`meu teste: ${posts.length}`);

  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
