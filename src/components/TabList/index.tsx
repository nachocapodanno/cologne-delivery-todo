import { Col, Container, Row } from "react-bootstrap";
import DashboardRow from "../TabCard";

const TabList = (props: any) => {
  const items = props.items;
  return (
    <>
      {items ? (
        items.length === 0 ? (
          <div className="container py-5">
            <div className="alert alert-secondary mt-sm-5 ms-sm-5" role="alert">
              No parcels loaded yet.
            </div>{" "}
          </div>
        ) : (
          <Container fluid>
            <Row xs={12} className="d-flex justify-content-center mt-3">
              <Col xs={12} md="auto">
                {items.map((value: any, key: any) => {
                  return <DashboardRow key={key} item={value} />;
                })}
              </Col>
            </Row>
          </Container>
        )
      ) : (
        <div className="container py-5">
          <div className="alert alert-secondary mt-sm-5 ms-sm-5" role="alert">
            No parcels loaded yet.
          </div>{" "}
        </div>
      )}
    </>
  );
};

export default TabList;
