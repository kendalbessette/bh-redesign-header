import React, {useCallback, useEffect, useState} from 'react';
import {NavBar, SubMenuContainer} from './style';

interface DropdownProps {
  label: string;
  children?: React.ReactChild;
}

const Dropdown = ({label, children}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const onMouseDown = useCallback(
    (e: any) => {
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
