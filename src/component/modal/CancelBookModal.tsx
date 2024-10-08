import React, { useState } from "react";
import SuccessToast from "../toast/SuccessToast";
import ErrorToast from "../toast/ErrorToast";
import { cancelbook } from "../../services/OfficeService";

interface CancelBook {
  BookingID: number;
  onClose: () => void;
  onReload: () => void;
}

const CancelModal: React.FC<CancelBook> = ({
  BookingID,
  onReload,
  onClose,
}) => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  const handleCancel = async () => {
    try {
      await cancelbook(BookingID);
      setShowToast(true);

      setTimeout(() => {
        onReload();
        onClose();
      }, 1000);
    } catch (err) {
      console.error(err);
      setShowError(true);
    }
  };


  return (
    <>
      <div
        className="modal fade"
        id={`CancelModal-${BookingID}`}
        tabIndex={-1}
        aria-labelledby={`CancelModalLabel-${BookingID}`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`CancelModalLabel-${BookingID}`}>
                Yêu cầu xác nhận
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Bạn có chắc là muốn hủy phiếu book này không?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button
                onClick={handleCancel}
                data-bs-dismiss="modal"
                type="button"
                className="btn btn-primary bg-danger"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      </div>

      <SuccessToast
        message="Hủy thành công"
        show={showToast}
        onClose={() => setShowToast(false)}
      />
      <ErrorToast
        message="Hủy thất bại"
        show={showError}
        onClose={() => setShowError(false)}
      />
    </>
  );
};

export default CancelModal;
