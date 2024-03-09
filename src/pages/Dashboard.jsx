import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <Row type="horizontal">
      <Heading as="h3">SIDEBAR</Heading>
      <Row>
        <Heading as="h3">HEADER</Heading>
        <Row type="horizontal">
          <Heading as="h1">Dashboard</Heading>
          <p>TEST</p>
        </Row>
      </Row>
    </Row>
  );
}

export default Dashboard;
