import moment from "moment";
import css from "./css.module.scss";
import * as actions from "../../redux/actions/parcel";
import { useDispatch } from "react-redux";
import ParcelStatus from "../../utils/enums/parcelStatus";
import { Card, ListGroup } from "react-bootstrap";

const DashboardRow = ({ item }: any) => {
  const dispatch = useDispatch();
  const handleEdit = (value: any) => (e: any) => {
    value.status !== ParcelStatus.DELIVERED &&
      dispatch(actions.handleEdit(value));
  };

  return (
    <Card
      bg={"light"}
      className={css.cardNew}
      style={{ width: "18rem" }}
      onClick={handleEdit(item)}
    >
      <Card.Header>Parcel #{item.id}</Card.Header>
      <Card.Body>
        <Card.Title className="mb-2 text-muted">{item.description}</Card.Title>
        <Card.Subtitle>{item.weight} kg</Card.Subtitle>
        <Card.Text></Card.Text>
        <ListGroup variant="flush" className={css.listBox}>
          <span className={css.titleInfo}>PICKUP</span>
          <ListGroup.Item className={css.listValue}>
            <span className={css.itemKey}>Address:</span> {item.pickupAddress}
          </ListGroup.Item>
          <ListGroup.Item className={css.listValue}>
            <span className={css.itemKey}>Time:</span>{" "}
            {moment(item.pickupTime).format("lll")}
          </ListGroup.Item>
        </ListGroup>
        <ListGroup variant="flush" className={css.listBox}>
          <span className={css.titleInfo}>DELIVERY</span>
          <ListGroup.Item className={css.listValue}>
            <span className={css.itemKey}>Address:</span> {item.deliveryAddress}
          </ListGroup.Item>
          <ListGroup.Item className={css.listValue}>
            <span className={css.itemKey}>Time:</span>{" "}
            {moment(item.deliveryTime).format("lll")}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default DashboardRow;
