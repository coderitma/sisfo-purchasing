import { Link, NavLink } from "react-router-dom";
import { AiOutlineContainer, AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineDocumentReport } from "react-icons/hi";

const WidgetBaseSidebar = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse">
      <div className="position-sticky pt-3 sidebar-sticky">
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
          <span>Master</span>

          <Link className="link-secondary" to="#" aria-label="Add a new report">
            <AiOutlineContainer size={20} />
          </Link>
        </h6>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              to="/barang"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              aria-current="page">
              Barang
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/pemasok"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              aria-current="page">
              Pemasok
            </NavLink>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
          <span>Transaksi</span>
          <Link className="link-secondary" to="#" aria-label="Add a new report">
            <AiOutlineShoppingCart size={20} />
          </Link>
        </h6>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              to="/pembelian"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              aria-current="page">
              Pembelian
            </NavLink>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
          <span>Laporan</span>

          <Link className="link-secondary" to="#" aria-label="Add a new report">
            <HiOutlineDocumentReport size={20} />
          </Link>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <NavLink
              to="/reporting-penjualan"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              aria-current="page">
              Lap. Penjualan
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default WidgetBaseSidebar;
