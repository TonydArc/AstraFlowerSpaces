import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Điều hướng đến trang products với query parameter chứa giá trị tìm kiếm
    navigate(`/officelist?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <>
      <div
        className="container-fluid search-bar position-relative"
        style={{ top: '-50%', transform: 'translateY(-50%)' }}
      >
        <div className="container">
          <div
            className="position-relative rounded-pill w-100 mx-auto p-4"
            style={{ background: 'rgba(19, 53, 123, 0.8)' }}
          >
            <input
              className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tên văn phòng mà bạn muốn tìm kiếm"
            />
            <input type="button" onClick={handleSearch} style={{ top: '50%', right: '46px', transform: 'translateY(-50%)' }} className="btn btn-primary rounded-pill py-2 px-4 position-absolute me-2" value={'Tìm'}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
