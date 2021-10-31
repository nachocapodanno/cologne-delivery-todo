import DashboardRow from "../DashboardRow";

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
          items.map((value: any, key: any) => {
            return <DashboardRow key={key} item={value} />;
          })
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
