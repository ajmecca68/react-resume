import React from 'react';

function Footer() {
  return (
    <footer className="flex-row space-between px-1">
      <p>&copy; {new Date().getFullYear()} Your Website Name</p>
      {/* Add any additional content or links here */}
    </footer>
  );
}

export default Footer;