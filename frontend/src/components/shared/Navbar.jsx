import React from 'react';
import { Button } from '../ui/button';
import { NavLink } from 'react-router-dom';
import { ProfilePopover } from '../ProfilePopover';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { authUser } = useSelector(store => store.auth);

  // Tailwind classes for active and inactive links
  const linkClass = ({ isActive }) =>
    `hover:text-[#6A38C2] ${isActive ? 'border-b-2 border-[#6A38C2]' : ''} pb-1`;

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div>
          <NavLink to="/">
            <h1 className="text-2xl font-bold">
              Job<span className="text-[#F83002]">Hunt</span>
            </h1>
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-5 font-medium">
            {authUser?.role === 'recruiter' ? (
              <>
                <li>
                  <NavLink to="/admin/companies" className={linkClass}>
                    Companies
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/jobs" className={linkClass}>
                    Jobs
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/" className={linkClass}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/jobs" className={linkClass}>
                    Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/browse" className={linkClass}>
                    Browse
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          {/* Auth Buttons or Profile */}
          {authUser ? (
            <ProfilePopover />
          ) : (
            <div className="flex items-center gap-2">
              <NavLink to="/login">
                <Button variant="outline">Login</Button>
              </NavLink>
              <NavLink to="/signup">
                <Button className="bg-[#6A38C2] hover:bg-[#5f32ad] text-white">
                  Signup
                </Button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
