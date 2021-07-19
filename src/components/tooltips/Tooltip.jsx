import { cloneElement, useState, useRef } from 'react';
import styled from 'styled-components';

import { Portal } from './Portal';

// styled component
const StyledTooltip = styled.span`
  position: fixed;
  top: ${(p) => p.pointerRef.current.y}px;
  left: ${(p) => p.pointerRef.current.x}px;
  font-size: var(--fsize-1);
  font-weight: 700;
  letter-spacing: 0.2em;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  pointer-events: none;
  padding: 7px 10px;
  border-radius: 4px;
  z-index: 99999;
  display: inline-block;
  white-space: nowrap;
  // p is the props that would be sent to the component
  opacity: ${(p) => p.show};
`;

const getPointer = (el, tt, placement, offset) => {
  let pt = { x: 0, y: 0 };
  const elRect = el.getBoundingClientRect();

  switch (placement) {
    case 'top':
      pt.x = elRect.left + (el.offsetWidth - tt.offsetWidth) / 2;
      pt.y = elRect.top - (el.offsetHeight + offset);
      break;
    case 'right':
      pt.x = elRect.right + offset;
      pt.y = elRect.top + (el.offsetHeight - tt.offsetHeight) / 2;
      break;
    case 'left':
      pt.x = elRect.left - (tt.offsetWidth + offset);
      pt.y = elRect.top + (el.offsetHeight - tt.offsetHeight) / 2;
      break;
    default:
      pt.x = elRect.left + (el.offsetWidth - tt.offsetWidth) / 2;
      pt.y = elRect.bottom + offset;
  }

  return pt;
};

export function Tooltip({
  text,
  placement = 'bottom',
  offset = 15,
  children,
  ...props
}) {
  const [show, setShow] = useState(0);
  const pointerRef = useRef({ x: 0, y: 0 });
  const tooltipRef = useRef();

  const handleMouseOver = (e) => {
    setShow(1);
    pointerRef.current = getPointer(
      e.currentTarget,
      tooltipRef.current,
      placement,
      offset,
    );
  };
  const handleMouseOut = () => setShow(0);

  return (
    <>
      {/* render children */}
      {cloneElement(children, {
        onMouseOver: handleMouseOver,
        onMouseOut: handleMouseOut,
      })}
      <Portal>
        <StyledTooltip ref={tooltipRef} pointerRef={pointerRef} show={show}>
          {text}
        </StyledTooltip>
      </Portal>
    </>
  );
}
