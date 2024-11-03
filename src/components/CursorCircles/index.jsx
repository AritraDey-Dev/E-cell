import React, { useEffect, useRef, useState } from 'react';

const CursorCircles = () => {
  const circlesRef = useRef([]);
  const coords = useRef({ x: 0, y: 0 });
  const isMoving = useRef(false);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef(null); // Ref to handle the disappearing timeout

  useEffect(() => {
    // Check if the device is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500); // Adjust breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return; // Exit if on mobile

    const circles = circlesRef.current;

    // Initialize circles' positions
    circles.forEach((circle) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = 'black'; // Set color to black
      circle.style.opacity = 1; // Make sure they are visible initially
    });

    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
      isMoving.current = true;

      // Clear any previous timeout to prevent hiding the circles too soon
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Make sure the circles are visible when moving
      circles.forEach(circle => {
        circle.style.opacity = 1;
      });

      // Set a new timeout to hide circles after 1 second of inactivity
      timeoutRef.current = setTimeout(() => {
        circles.forEach(circle => {
          circle.style.opacity = 0; // Hide the circles by setting opacity to 0
        });
      }, 500);
    };

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach((circle, index) => {
        circle.style.left = `${x - 12}px`; // Center the circle
        circle.style.top = `${y - 12}px`;

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animateCircles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isMobile]);

  if (isMobile) return null; // Prevent rendering on mobile

  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => (circlesRef.current[index] = el)}
          className="h-6 w-6 rounded-full fixed pointer-events-none z-[99999999]"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            backgroundColor: 'black',
            opacity: 1, // Ensure circles start visible
            transition: 'transform 0.1s ease, opacity 0.3s ease', // Smooth scaling and fading
          }}
        />
      ))}
    </>
  );
};

export default CursorCircles;
