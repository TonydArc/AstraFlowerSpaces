import React from 'react';

interface HeaderProps {
  title: string;
  path: string;
}

const Header: React.FC<HeaderProps> = ({ title, path }) => {
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-3 mb-4">{title}</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active text-white">{path}</li>
          </ol>
        </div>
      </div>
      {/* Header End */}
    </>
  );
}

export default Header;
