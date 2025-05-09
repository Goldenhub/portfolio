import { ComponentProps } from "react";

export function ArrowUp(props: ComponentProps<"svg">) {
  return (
    <svg {...props} width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_243_813)">
        <path d="M6.99989 21.6764V0.323486C6.99989 4.09799 5.70577 8.08819 0.529297 8.08819" stroke="white" />
        <path d="M7 21.6764V0.323486C7 4.09799 8.29412 8.08819 13.4706 8.08819" stroke="white" />
      </g>
      <defs>
        <clipPath id="clip0_243_813">
          <rect width="13.5882" height="22" fill="white" transform="translate(0.205078)" />
        </clipPath>
      </defs>
    </svg>
  );
}
