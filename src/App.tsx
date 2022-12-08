import { ChatInput, ChatMessageList } from "components";
import { useMessages } from "hooks/useMessages";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  const { messages, addMessage } = useMessages();

  return (
    <Container className="d-flex flex-column min-vh-100">
      <Row className="flex-grow-1">
        <Col>
          <ChatMessageList messages={messages} />
        </Col>
      </Row>
      <Row className="pb-4">
        <Col>
          <ChatInput userId="1" userName="Name" addMessage={addMessage} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
