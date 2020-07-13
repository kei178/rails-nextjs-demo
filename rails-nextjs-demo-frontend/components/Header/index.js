import Link from 'next/link';
import cookies from 'nookies';
import { isAuthenticated } from '../../utils/withAuthorization';
import { useEffect, useState } from 'react';

const Header = () => {
  const handleSignout = () => {
    cookies.destroy(null, 'token');
  };

  return (
    <div className="header">
      <p>Rails + Next.js Demo App</p>
      {isAuthenticated() && (
        <Link href="/signin" as="/signin">
          <a onClick={handleSignout}>Sign out</a>
        </Link>
      )}
      <style jsx>{`
        .header {
          padding: 20px;
          background-color: #333;
          color: #fff;
          text-align: center;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
        }
        .header :global(a) {
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Header;
