import React from "react";

const iconMap = {
  SquarePlus: ({ ...rest }) => (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.5 20H6.5C5.395 20 4.5 19.105 4.5 18V6C4.5 4.895 5.395 4 6.5 4H18.5C19.605 4 20.5 4.895 20.5 6V18C20.5 19.105 19.605 20 18.5 20Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 8V16"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5 12H8.5"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Tick: ({ ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="30px"
      height="30px"
      {...rest}
    >
      <path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z" />
    </svg>
  ),
  Close: ({ ...rest }) => (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M10.6666 11.1666L21.3333 21.8333"
        stroke="#323232"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.3333 11.1666L10.6666 21.8333"
        stroke="#323232"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Restore: ({ ...rest }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12.125 18.0585C15.7 17.1168 18.3333 13.8668 18.3333 10.0001C18.3333 5.40014 14.6333 1.66681 10 1.66681C4.44167 1.66681 1.66667 6.30014 1.66667 6.30014M1.66667 6.30014V2.50014M1.66667 6.30014H3.34167H5.36667"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.66667 10.0001C1.66667 14.6001 5.4 18.3335 10 18.3335"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="3 3"
      />
    </svg>
  ),
  Filter: ({ ...rest }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8.12132 4.8788C9.29289 6.05037 9.29289 7.94987 8.12132 9.12144C6.94975 10.293 5.05025 10.293 3.87868 9.12144C2.70711 7.94987 2.70711 6.05037 3.87868 4.8788C5.05025 3.70723 6.94975 3.70723 8.12132 4.8788"
        stroke="#323232"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 7.00012H9"
        stroke="#323232"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.1213 14.8788C21.2929 16.0504 21.2929 17.9499 20.1213 19.1214C18.9497 20.293 17.0502 20.293 15.8787 19.1214C14.7071 17.9499 14.7071 16.0504 15.8787 14.8788C17.0502 13.7072 18.9497 13.7072 20.1213 14.8788"
        stroke="#323232"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 17.0001H15"
        stroke="#323232"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Search: ({ ...rest }) => (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle
        cx="11.0586"
        cy="11.5588"
        r="7.06194"
        stroke="#323232"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.0033 20.5034L16.0516 16.5518"
        stroke="#323232"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  More: ({ ...rest }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M15.4189 10.0002C15.4189 10.2304 15.2323 10.4171 15.002 10.4171C14.7718 10.4171 14.5852 10.2304 14.5852 10.0002C14.5852 9.77 14.7718 9.58337 15.002 9.58337C15.2323 9.58337 15.4189 9.77 15.4189 10.0002"
        stroke="#323232"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.4168 10.0002C10.4168 10.2304 10.2302 10.4171 9.99997 10.4171C9.76976 10.4171 9.58313 10.2304 9.58313 10.0002C9.58313 9.77 9.76976 9.58337 9.99997 9.58337C10.2302 9.58337 10.4168 9.77 10.4168 10.0002"
        stroke="#323232"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.4148 10.0002C5.4148 10.2304 5.22817 10.4171 4.99796 10.4171C4.76774 10.4171 4.58112 10.2304 4.58112 10.0002C4.58112 9.77 4.76774 9.58337 4.99796 9.58337C5.22817 9.58337 5.4148 9.77 5.4148 10.0002"
        stroke="#323232"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  CircleTicked: ({ ...rest }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M6.85667 9.35191L10.0042 12.5002L16.4 6.10441C15.0833 3.94608 12.7133 2.50024 10 2.50024C5.8575 2.50024 2.5 5.85774 2.5 10.0002C2.5 14.1427 5.8575 17.5002 10 17.5002C13.86 17.5002 17.0358 14.5836 17.4508 10.8336"
        stroke="#323232"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  CheckBox: ({ ...rest }) => (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1373 7.24158L7.46793 9.90935L5.86313 8.30936"
        stroke="#BDC0C6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="1.99789"
        y="2.49768"
        width="12.005"
        height="12.005"
        rx="3.33333"
        stroke="#BDC0C6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Description: ({ ...rest }) => (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M1.99899 2.49901H10.0023"
        stroke="#BDC0C6"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.49936 4.49998H10.0021"
        stroke="#BDC0C6"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.49936 6.50059H10.0021"
        stroke="#BDC0C6"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.99899 8.50157H10.0023"
        stroke="#BDC0C6"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.00058 10.5022H10.0022"
        stroke="#BDC0C6"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Flag: ({ ...rest }) => (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M3.33333 14.5002V3.12024"
        stroke="#FA5252"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6666 9.84687V3.16687"
        stroke="#FA5252"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33331 9.83354C3.33331 9.83354 3.91665 9.34888 5.66665 9.34888C7.41665 9.34888 8.58331 10.5002 10.3333 10.5002C12.0833 10.5002 12.6666 9.84888 12.6666 9.84888"
        stroke="#FA5252"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33331 3.12158C3.33331 3.12158 3.91665 2.50024 5.66665 2.50024C7.41665 2.50024 8.58331 3.65158 10.3333 3.65158C12.0833 3.65158 12.6666 3.16691 12.6666 3.16691"
        stroke="#FA5252"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Edit: ({ ...rest }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M17.5818 9.19398V15.6424C17.5818 16.533 16.8604 17.2544 15.9697 17.2544H4.68503C3.79435 17.2544 3.07294 16.533 3.07294 15.6424V4.3577C3.07294 3.46702 3.79435 2.74561 4.68503 2.74561H10.3274"
        stroke="#323232"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.90924 12.4182L10.4483 12.1047C10.6264 12.0829 10.7925 12.0015 10.9198 11.8749L17.0708 5.72399C17.7519 5.04288 17.7519 3.9386 17.0708 3.25668V3.25668C16.3897 2.57557 15.2854 2.57557 14.6035 3.25668L8.50975 9.3504C8.38642 9.47372 8.30662 9.63332 8.28163 9.80662L7.90924 12.4182Z"
        stroke="#323232"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Add: ({ ...rest }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M10.2094 5.90771V13.7043"
        stroke="#323232"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.3773 9.80613H6.04401"
        stroke="#323232"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Remove: ({ ...rest }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.6627 17.2544H6.98868C6.14475 17.2544 5.44349 16.6031 5.38062 15.7608L4.65759 5.96973H15.9697L15.2708 15.7567C15.2104 16.6007 14.5083 17.2544 13.6627 17.2544V17.2544Z"
        stroke="#323232"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.3273 9.19385V14.0301"
        stroke="#323232"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.87897 5.96967H16.7757"
        stroke="#323232"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.3576 5.96979L13.5411 3.79185C13.3049 3.16233 12.7036 2.74561 12.0313 2.74561H8.62337C7.95113 2.74561 7.34982 3.16233 7.11364 3.79185L6.29712 5.96979"
        stroke="#323232"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.0921 9.19385L12.7455 14.0301"
        stroke="#323232"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.56261 9.19385L7.90921 14.0301"
        stroke="#323232"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Archive: ({ ...rest }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M10.3273 9.19355V3.00171"
        stroke="#323232"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.3273 9.19356L12.7465 6.77441L10.3273 9.19356Z"
        stroke="#323232"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.06989 12.4189H6.60345C6.90862 12.4189 7.18764 12.5912 7.32436 12.8641L7.68481 13.5858C7.82143 13.8592 8.10089 14.0319 8.40653 14.0317H12.2473C12.553 14.0319 12.8324 13.8592 12.969 13.5858L13.3295 12.8649C13.4661 12.5915 13.7456 12.4188 14.0512 12.4189H17.5848"
        stroke="#323232"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.7465 2.74243H15.1656C16.5017 2.74243 17.5848 3.82552 17.5848 5.16158V14.8382C17.5848 16.1742 16.5017 17.2573 15.1656 17.2573H5.48903C4.15297 17.2573 3.06989 16.1742 3.06989 14.8382V5.16158C3.06989 3.82552 4.15297 2.74243 5.48903 2.74243H7.90818"
        stroke="#323232"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.9082 6.77441L10.3274 9.19356L7.9082 6.77441Z"
        stroke="#323232"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconName: keyof typeof iconMap;
}

const Icon: React.FC<IconProps> = ({ iconName, ...rest }) => {
  const IconComponent = iconMap[iconName];
  if (!IconComponent) return null;
  return <IconComponent {...rest} />;
};

export default Icon;
