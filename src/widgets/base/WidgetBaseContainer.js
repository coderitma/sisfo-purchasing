import "../../assets/styles/dashboard.css";
import WidgetBaseSidebar from "./WidgetBaseSidebar";
import WidgetBaseHeader from "./WidgetBaseHeader";

const WidgetBaseContainer = ({ children }) => {
  return (
    <>
      <WidgetBaseHeader />
      <div className="container-fluid">
        <div className="row">
          <WidgetBaseSidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-3">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default WidgetBaseContainer;
