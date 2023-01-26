import { PostItem, Spinner } from "components";
import { IPost } from "types";
import { StyledArticles, ErrorWrapper } from "./styles";
import errorImg from "../../assets/img/error.gif";
import { getAllposts, useAppSelector } from "store";

interface IProps {
  posts: IPost[];
}

export const PostsResults = ({ posts }: IProps) => {
  const { isLoading, error } = useAppSelector(getAllposts);

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return (
      <ErrorWrapper>
        <img src={errorImg} alt="error" />
      </ErrorWrapper>
    );
  }
  return (
    <StyledArticles>
      {posts &&
        posts.length > 0 &&
        posts.map((post: IPost) => {
          return <PostItem post={post} key={post.id} />;
        })}
    </StyledArticles>
  );
};
