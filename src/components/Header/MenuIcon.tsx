const MenuIcon = () => (
  <svg
    className="menu-icon"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <g className="menu-brackets">
      <path
        className="bracket-left"
        d="M8 6 L4 6 L4 26 L8 26"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="bracket-right"
        d="M24 6 L28 6 L28 26 L24 26"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <g className="menu-lines">
      <line
        className="menu-line-1"
        x1="10"
        y1="10"
        x2="22"
        y2="10"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        className="menu-line-2"
        x1="10"
        y1="16"
        x2="22"
        y2="16"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        className="menu-line-3"
        x1="10"
        y1="22"
        x2="22"
        y2="22"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
    <g className="close-x">
      <line
        className="x-line-1"
        x1="10"
        y1="10"
        x2="22"
        y2="22"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        className="x-line-2"
        x1="22"
        y1="10"
        x2="10"
        y2="22"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export default MenuIcon;
