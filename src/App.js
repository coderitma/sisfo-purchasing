import "react-loading-skeleton/dist/skeleton.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WidgetBaseOutlet from "./widgets/base/WidgetBaseOutlet";
import PageAuthLogin from "./pages/auth/PageAuthLogin";
import PageBarangList from "./pages/barang/PageBarangList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WidgetBaseOutlet />}>
          <Route index element={<PageAuthLogin />} />
          <Route path="barang" element={<PageBarangList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

