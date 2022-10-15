import React from "react";

const NavbarAdmin = () => {
  return (
    <div className="admin-navbar" style={{paddingTop: 100}} >
      <a href="/admin/kegiatan">HOMEPAGE</a>
      <a href="/admin/FAQ">POJOK IMG</a>
      <a href="/admin/internal">INTERNAL</a>
      <a href="/admin/parwis">PARWIS</a>
      <a href="/admin/kesenatoran">KESENATORAN</a>
      <a href="/admin/signup">Sign Up</a>
      <a href="/admin/signupuserlevel9">Super Admin</a>
    </div>
  );
};

export default NavbarAdmin;
