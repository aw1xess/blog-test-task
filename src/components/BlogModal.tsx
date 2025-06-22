import styled from "@emotion/styled";

interface BlogModelProps {
  post: {
    title: string;
    body: string;
  };
  onClose: () => void;
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const Modal = styled.div`
  background-color: #131516;
  padding: 2rem;
  border-radius: 12px;
  max-width: 60%;
  width: 90%;

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #444;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

const BlogModal = ({ post, onClose }: BlogModelProps) => {
  return (
    <Backdrop onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <button onClick={onClose}>Close</button>
      </Modal>
    </Backdrop>
  );
};

export default BlogModal;
