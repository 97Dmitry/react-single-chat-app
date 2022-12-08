import "./appStyles.module.css";
import "custom.scss";

import { ChatInput, ChatMessageList, Login } from "components";
import { useAuth } from "hooks/useAuth";
import { useMessages } from "hooks/useMessages";
import { MutableRefObject, useRef } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  const messageListRef = useRef<HTMLDivElement>();
  const { messages, addMessage } = useMessages(messageListRef as MutableRefObject<HTMLDivElement>);
  const { user, login } = useAuth();

  if (!user) {
    return <Login login={login} />;
  }

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100 overflow-hidden p-0 p-md-3">
      <div className="card d-flex flex-column align-items-center p-3 w-100 h-100 ">
        <Row className="flex-grow-1 w-100 ">
          <Col className="mb-4 position-relative p-0">
            <ChatMessageList
              messages={messages}
              user={user}
              className="position-absolute top-0 start-0 end-0 bottom-0"
              messageListRef={messageListRef as MutableRefObject<HTMLDivElement>}
            />
          </Col>
        </Row>
        <Row className="mb-1 w-100">
          <Col className="p-0">
            <ChatInput userId={user.id} userName={user.name} addMessage={addMessage} />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
