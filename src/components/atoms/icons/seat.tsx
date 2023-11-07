export function Seat({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 15V5C3 3.89543 3.91518 3 5.01975 3C5.89231 3 6.67864 3.56568 6.94139 4.39774L9.05861 11.1023C9.32136 11.9343 10.0932 12.5 10.9658 12.5H18.25C20.0449 12.5 21.5 13.9551 21.5 15.75C21.5 17.5449 20.0449 19 18.25 19H7C4.79086 19 3 17.2091 3 15Z"
        stroke="#848484"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.5 9.5H17.5"
        stroke="#848484"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 22H17"
        stroke="#848484"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
