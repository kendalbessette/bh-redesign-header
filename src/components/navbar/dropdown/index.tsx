import React, {useCallback, useEffect, useRef, useState} from 'react';
import {NavBar, SubMenuContainer} from './style';

interface DropdownProps {
  label: string;
  children: {
    title: string;
    path: string;
  };
}

const Dropdown = ({label, children}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef();

  const onMouseDown = useCallback(
    e => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    },
    [containerRef, setIsOpen]
  );

  useEffect(() => {
    window.addEventListener('mousedown', onMouseDown);

    return () => window.removeEventListener('mousedown', onMouseDown);
  }, [onMouseDown]);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={containerRef} className="dropdown-container">
      <NavBar>
        <div className="dropdown-label" onClick={toggleIsOpen}>
          {label}
        </div>
      </NavBar>
      {isOpen && (
        <div className="dropdown-content">
          <SubMenuContainer>{children}</SubMenuContainer>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
