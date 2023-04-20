import _ from "lodash";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { BiDetail, BiExit, BiSave, BiTrash } from "react-icons/bi";
import SchemaBarang from "../../schemas/SchemaBarang";

const WidgetBarangDetail = ({ item }) => {
  const [validated, setValidated] = useState(false);
  const [barang, setBarang] = useState(SchemaBarang);
  const [status, setStatus] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCapture = (event) => {
    const form = event.currentTarget;
    setValidated(!form.checkValidity());
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    let value = e.target.value;
    if (type === "number" && !_.isEmpty(value)) {
      value = parseInt(e.target.value);
      setBarang((values) => ({ ...values, [name]: value }));
    } else {
      setBarang((values) => ({ ...values, [name]: value }));
    }
  };

  const handleOpen = () => {
    setModalIsOpen(true);
  };

  const handleClose = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    setStatus(!_.isEmpty(item));
    if (!_.isEmpty(item)) {
      setBarang(item);
    }
  }, [item]);

  return (
    <>
      <Button onClick={handleOpen} variant="primary" disabled={!status}>
        <BiDetail />
      </Button>

      {status && (
        <Modal
          animation={false}
          backdrop="static"
          keyboard={false}
          show={modalIsOpen}
          onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{item.namaBarang}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              className="d-grid gap-2"
              validated={validated}
              onChangeCapture={handleCapture}>
              <Form.Group hasValidation>
                <Form.Label>Kode Barang</Form.Label>
                <Form.Control value={barang.kodeBarang} disabled />
              </Form.Group>
              <Form.Group hasValidation>
                <Form.Label>Nama Barang</Form.Label>
                <Form.Control
                  required
                  name="namaBarang"
                  value={barang.namaBarang}
                  onChange={handleInput}
                />
                <Form.Control.Feedback type="invalid">
                  Nama barang tidak valid.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group hasValidation>
                <Form.Label>Harga Beli</Form.Label>
                <Form.Control
                  required
                  max={barang.hargaJual - 1}
                  name="hargaBeli"
                  type="number"
                  value={barang.hargaBeli}
                  onChange={handleInput}
                />
                <Form.Control.Feedback type="invalid">
                  Harga beli wajib dan harus kurang dari harga jual
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group hasValidation>
                <Form.Label>Harga Jual</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="hargaJual"
                  feedbackType="valid"
                  min={barang.hargaBeli + 1}
                  value={barang.hargaJual}
                  onChange={handleInput}
                />
                <Form.Control.Feedback type="invalid">
                  Harga jual wajib dan minimal diatas harga beli
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group hasValidation>
                <Form.Label>Jumlah Barang</Form.Label>
                <Form.Control
                  required
                  name="jumlahBarang"
                  type="number"
                  min={2}
                  value={barang.jumlahBarang}
                  onChange={handleInput}
                />
                <Form.Control.Feedback type="invalid">
                  Jumlah stok barang harus di atas 1
                </Form.Control.Feedback>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button disabled={validated} variant="danger">
              <BiTrash /> Delete
            </Button>
            <Button disabled={validated} variant="primary">
              <BiSave /> Save Change
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default WidgetBarangDetail;
