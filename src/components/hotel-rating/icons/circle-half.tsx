import * as React from "react";

const CircleHalf = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    data-testid="circle-half"
    {...props}
  >
    <path d="M448 256c0-106-86-192-192-192v384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0z" />
  </svg>
);
export default CircleHalf;
