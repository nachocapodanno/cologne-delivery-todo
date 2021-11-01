import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const ParcelEditForm = ({ action, status }: any) => {
  const [parcelStatus, setParcelStatus] = useState(status);

  const submit = (e: any) => {
    e.preventDefault();
    action(parcelStatus);
  };

  const selectOptions = [
    { id: 1, value: "PUBLISHED" },
    { id: 2, value: "ASSIGNED" },
    { id: 3, value: "PICKED" },
    { id: 4, value: "DELIVERED" },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center container ">
      <Row>
        <Form onSubmit={submit}>
          <Row className="d-flex justify-content-center">
            <Col sm={12} xs={6} className="d-flex justify-content-center">
              <Form.Select
                value={parcelStatus}
                aria-label="Default select example"
                onChange={(e) => {
                  setParcelStatus(e.target.value);
                }}
                required
              >
                <option>Please select an option</option>
                {selectOptions
                  .filter((value) => value.id > status)
                  .map((item) => {
                    return <option key={item.id} value={item.id}>{item.value}</option>;
                  })}
              </Form.Select>
            </Col>
            <Col sm={2} className="d-flex justify-content-center">
              <Button className="mt-3" type="submit">Update</Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </div>
  );
};

export default ParcelEditForm;
