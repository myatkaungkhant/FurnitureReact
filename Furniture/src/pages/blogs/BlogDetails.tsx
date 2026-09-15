import { useParams } from "react-router";

const BlogDetails = () => {
  const { postId } = useParams();

  return <div>BlogDetails : {postId}</div>;
};

export default BlogDetails;
