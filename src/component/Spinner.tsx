
import React, { useState, useEffect } from 'react';

interface SpinnerProps {
  delay: number; // Thời gian trì hoãn tính bằng mili giây
}

const Spinner: React.FC<SpinnerProps> = ({ delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Đặt thời gian trì hoãn để hiển thị component
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, delay);

    // Xóa bộ đếm thời gian khi component bị hủy
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div>
      {isVisible && (
         <div
         id="spinner"
         className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
       >
         <div
           className="spinner-border text-primary"
           style={{ width: '3rem', height: '3rem' }}
           role="status"
         >
           <span className="sr-only">Loading...</span>
         </div>
       </div>
      )}
    </div>
  );
};

export default Spinner;
