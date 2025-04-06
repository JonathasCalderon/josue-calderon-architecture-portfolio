import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement);
        const cursor = computedStyle.cursor;
        
        // Check if the element is interactive
        const isInteractive = 
          hoveredElement.tagName === 'A' || 
          hoveredElement.tagName === 'BUTTON' || 
          hoveredElement.tagName === 'INPUT' || 
          hoveredElement.tagName === 'TEXTAREA' ||
          hoveredElement.closest('.services__scroll-button') ||
          hoveredElement.closest('.contact__form-button') ||
          hoveredElement.getAttribute('role') === 'button' ||
          cursor === 'pointer';
        
        setIsPointer(isInteractive);
      }
    };

    const showCursor = () => {
      setIsVisible(true);
    };

    const hideCursor = () => {
      setIsVisible(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', updateCursorType);
    document.addEventListener('mouseenter', showCursor);
    document.addEventListener('mouseleave', hideCursor);

    // Clean up
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', updateCursorType);
      document.removeEventListener('mouseenter', showCursor);
      document.removeEventListener('mouseleave', hideCursor);
    };
  }, [position.x, position.y]);

  return (
    <div 
      className={`custom-cursor ${isPointer ? 'custom-cursor--pointer' : ''} ${isVisible ? 'custom-cursor--visible' : ''}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px` 
      }}
    >
      <div className="custom-cursor__inner"></div>
      <div className="custom-cursor__outer"></div>
    </div>
  );
};

export default CustomCursor; 