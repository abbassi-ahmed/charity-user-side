import React from "react";
import { Container, Row, Col, Badge, Button, Form } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";

const BlogDetailsMain = ({
  blog,
  comments,
  user,
  newComment,
  setNewComment,
  handleAddComment,
}) => {
  const { image, createdAt, admin, title, content } = blog;

  return (
    <Container className="blog-details__main">
      <Row className="align-items-center mb-4">
        <Col md={8} className="mb-3 mb-md-0">
          <h1 className="text-primary">{title}</h1>
          <Badge bg="secondary" className="mb-2">
            {`${admin.firstName} ${admin.lastName}`}
          </Badge>
        </Col>
        <Col md={4} className="text-md-end">
          <div className="d-flex align-items-center justify-content-md-end">
            <FaRegCalendarAlt className="me-2 text-muted" />
            <span className="text-muted small">
              <time dateTime={createdAt}>
                {new Date(createdAt).toLocaleDateString()}
              </time>
            </span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="blog-details__image mb-4">
            <Image
              src={image}
              alt="thumb"
              style={{ width: "100%", height: "400px", objectFit: "contain" }}
            />
          </div>
          <p style={{ textAlign: "justify" }}>{content}</p>
        </Col>
      </Row>
      <Row className="comments-section mt-5">
        <Col>
          <h4 className="mb-4">Comments</h4>
          {comments.length > 0 ? (
            <ul className="list-unstyled">
              {comments.map((comment) => (
                <li key={comment.id} className="mb-3 border-bottom pb-2">
                  <div className="d-flex align-items-start mb-2">
                    <Image
                      src={comment.user.avatar}
                      alt="User Avatar"
                      roundedCircle
                      style={{
                        width: "40px",
                        height: "40px",
                        marginRight: "10px",
                      }}
                    />
                    <div>
                      <strong>
                        {comment.user.firstName + " " + comment.user.lastName}
                      </strong>{" "}
                      <p>{comment.content}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">
              No comments yet. Be the first to comment!
            </p>
          )}
          <Form className="mt-3">
            <Form.Group controlId="commentTextarea" className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                className="comment-input"
              />
            </Form.Group>
            {user ? (
              <Button
                variant="primary"
                onClick={() => {
                  handleAddComment();
                }}
              >
                Add Comment
              </Button>
            ) : (
              <p className="text-muted">Please login to add a comment.</p>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetailsMain;
