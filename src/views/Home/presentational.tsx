import { useEffect } from "react";
import {
  Col,
  Container,
  Nav,
  Offcanvas,
  Row,
  Tab,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Emoji from "../../components/Emoji";
import ParcelEditForm from "../../components/ParcelEditForm";
import TabList from "../../components/TabList";
import * as actions from "../../redux/actions/parcel";
import ParcelStatus from "../../utils/enums/parcelStatus";
import SessionManager from "../../utils/sessionManager";
import css from "./css.module.scss";

const Dashboard = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.auth.isLoading);
  const parcels = useSelector((state: any) => state.parcel.parcels);
  const parcelsBiker = useSelector((state: any) => state.parcel.parcelsBiker);
  const errorMessage = useSelector((state: any) => state.parcel.errorMessage);
  const showSideContainer = useSelector(
    (state: any) => state.parcel.showSideContainer
  );

  const editDataForm = useSelector((state: any) => state.parcel.editData);

  useEffect(() => {
    dispatch(actions.findAll());
  }, []);

  const hideSideContainer = () => dispatch(actions.hideSideContainer());

  const handleUpdate = (status: any) => {
    dispatch(
      actions.update({
        status,
        id: editDataForm.id,
      })
    );
  };

  const handleParcelsTab = (status: any) => {
    if (+status === ParcelStatus.PUBLISHED) {
      dispatch(actions.findAll());
    } else {
      const id = SessionManager.getSession()?.id;
      dispatch(
        actions.findAllByBikerId({
          id
        })
      );
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} id="page-content-wrapper">
            {isLoading && <em>Loading parcels...</em>}
            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
              <Col xs={12}>
                <Nav variant="pills" justify={true} onSelect={(selectedKey) => handleParcelsTab(selectedKey)}>
                  <Nav.Item>
                    <Nav.Link eventKey="1" className={css.navLink}>
                      <Emoji symbol="📦" />{" "}
                      <div className={css.tabText}>Published</div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="2" className={css.navLink}>
                      <Emoji symbol="🚲" />{" "}
                      <div className={css.tabText}>Assigned</div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="3" className={css.navLink}>
                      <Emoji symbol="🏠" />{" "}
                      <div className={css.tabText}>Picked</div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="4" className={css.navLink}>
                      <Emoji symbol="✅" />{" "}
                      <div className={css.tabText}>Delivered</div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col xs={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="1">
                    <TabList
                      items={parcels.filter(
                        (e: any) => e.status === ParcelStatus.PUBLISHED
                      )}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="2">
                    <TabList
                      items={parcelsBiker.filter(
                        (e: any) => e.status === ParcelStatus.ASSIGNED
                      )}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="3">
                    <TabList
                      items={parcelsBiker.filter(
                        (e: any) => e.status === ParcelStatus.PICKED
                      )}
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="4">
                    <TabList
                      items={parcelsBiker.filter(
                        (e: any) => e.status === ParcelStatus.DELIVERED
                      )}
                    />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <Offcanvas
        show={showSideContainer}
        onHide={hideSideContainer}
        placement={"bottom"}
        style={{ height: "35vh" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Update Parcel Status</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ParcelEditForm action={handleUpdate} status={editDataForm.status} />
          {errorMessage && <p className={css.errorMessage}>{errorMessage}</p>}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Dashboard;
