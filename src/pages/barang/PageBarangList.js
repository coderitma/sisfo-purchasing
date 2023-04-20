import { Button, Table } from "react-bootstrap";
import WidgetBaseContainer from "../../widgets/base/WidgetBaseContainer";
import WidgetBaseTitleActions from "../../widgets/base/WidgetBaseTitleActions";
import { useState } from "react";
import { MockBarangList } from "../../mocks/MockBarang";
import _ from "lodash";
import WidgetBarangDetail from "../../widgets/barang/WidgetBarangDetail";
import { BiPlusCircle } from "react-icons/bi";
import WidgetBarangAdd from "../../widgets/barang/WidgetBarangAdd";

const PageBarangList = () => {
  const [daftarBarang] = useState(MockBarangList);
  const [barang, setBarang] = useState({});

  const handleSelected = (item) => {
    if (_.isEmpty(barang) || barang.kodeBarang !== item.kodeBarang) {
      setBarang(item);
    } else if (barang.kodeBarang === item.kodeBarang) {
      setBarang({});
    }
  };

  return (
    <WidgetBaseContainer>
      <div className="d-grid gap-3">
        <WidgetBaseTitleActions
          title="Daftar Barang"
          buttonActions={
            <>
              <WidgetBarangDetail item={barang} />
              <WidgetBarangAdd />
            </>
          }
        />
        <Table responsive bordered>
          <thead>
            <tr>
              <th>Kode Barang</th>
              <th>Nama Barang</th>
              <th>Harga Jual</th>
              <th>Harga Beli</th>
              <th>Jumlah Barang</th>
            </tr>
          </thead>
          <tbody>
            {daftarBarang.map((item, index) => (
              <tr
                style={{ cursor: "pointer" }}
                className={
                  item.kodeBarang === barang.kodeBarang ? "table-active " : ""
                }
                key={index}
                onClick={() => handleSelected(item)}>
                <td>{item.kodeBarang}</td>
                <td>{item.namaBarang}</td>
                <td>{item.hargaJual}</td>
                <td>{item.hargaBeli}</td>
                <td>{item.jumlahBarang}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </WidgetBaseContainer>
  );
};

export default PageBarangList;
