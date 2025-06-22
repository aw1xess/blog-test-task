import styled from "@emotion/styled";

interface BlogItemProps {
  post: {
    title: string;
    body: string;
  };
  onClick: () => void;
}

const Card = styled.div`
  border: 2px solid #5f2600;
  padding: 1rem;
  border-radius: 8px;

  &:nth-child(even) {
    border-color: #013357;
  }
`;

const BlogItem = ({ post, onClick }: BlogItemProps) => {
  return (
    <Card onClick={onClick}>
      <h3>{post.title}</h3>
      <p>{post.body.slice(0, 80)}...</p>
    </Card>
  );
};

export default BlogItem;
