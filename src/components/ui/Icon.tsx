import React from "react";

const iconMap = {
  ChevronRight: ({ ...rest }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#7D828C"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M10 16L14 12L10 8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  ChevronLeft: ({ ...rest }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#7D828C"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M14 8L10 12L14 16"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  ChevronDown: ({ ...rest }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#323232"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8 10L12 14L16 10"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Unavailable: ({ ...rest }) => (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      stroke="black"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="7.5" cy="8" r="7" />
      <line x1="12.3536" y1="2.85355" x2="2.35355" y2="12.8536" />
    </svg>
  ),
  At: ({ ...rest }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C9CBDA"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M16 12C16 14.209 14.209 16 12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8V8C14.209 8 16 9.791 16 12V13.5C16 14.881 17.119 16 18.5 16C19.881 16 21 14.881 21 13.5V12C21 7.029 16.971 3 12 3C7.029 3 3 7.029 3 12C3 16.971 7.029 21 12 21C13.149 21 14.317 20.782 15.444 20.315C16.052 20.063 16.614 19.747 17.133 19.386"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  File: ({ ...rest }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C9CBDA"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.414 6.414L15.586 3.586C15.211 3.211 14.702 3 14.172 3H7C5.895 3 5 3.895 5 5V19C5 20.105 5.895 21 7 21H17C18.105 21 19 20.105 19 19V7.828C19 7.298 18.789 6.789 18.414 6.414V6.414Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19 8H15C14.448 8 14 7.552 14 7V3"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Sticker: ({ ...rest }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C9CBDA"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M21 12C21 7.038 16.962 3 12 3C7.037 3 3 7.037 3 12"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 12C3 16.963 7.037 21 12 21C16.963 21 21 16.962 21 12"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.328 9.5C15.19 9.5 15.078 9.612 15.079 9.75C15.079 9.888 15.191 10 15.329 10C15.467 10 15.579 9.888 15.579 9.75C15.579 9.612 15.467 9.5 15.328 9.5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.63902 9.5C8.50102 9.5 8.38902 9.612 8.39002 9.75C8.39002 9.888 8.50202 10 8.64002 10C8.77802 10 8.89002 9.888 8.89002 9.75C8.89002 9.612 8.77802 9.5 8.63902 9.5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 17C13.667 17 15 15.667 15 14H9C9 15.667 10.333 17 12 17V17Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Settings: ({ ...rest }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#323232"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M14.1213 9.87868C15.2929 11.0502 15.2929 12.9497 14.1213 14.1213C12.9497 15.2929 11.0502 15.2929 9.87868 14.1213C8.70711 12.9497 8.70711 11.0502 9.87868 9.87868C11.0502 8.70711 12.9497 8.70711 14.1213 9.87868"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.18 18.725V18.725C16.683 19.228 17.5 19.228 18.003 18.725L18.725 18.003C19.228 17.5 19.228 16.683 18.725 16.18V16.18C18.343 15.798 18.231 15.225 18.441 14.727C18.463 14.674 18.485 14.621 18.506 14.567C18.689 14.101 19.143 13.801 19.643 13.801H19.71C20.422 13.801 20.999 13.224 20.999 12.512V11.491C20.999 10.779 20.422 10.202 19.71 10.202H19.643C19.143 10.202 18.689 9.901 18.506 9.436C18.485 9.382 18.463 9.329 18.441 9.276C18.231 8.778 18.343 8.205 18.725 7.823V7.823C19.228 7.32 19.228 6.503 18.725 6L18.003 5.278C17.5 4.775 16.683 4.775 16.18 5.278V5.278C15.798 5.66 15.225 5.772 14.727 5.562C14.674 5.54 14.621 5.518 14.567 5.497C14.101 5.311 13.8 4.856 13.8 4.356V4.289C13.8 3.577 13.223 3 12.511 3H11.49C10.777 3 10.2 3.577 10.2 4.289V4.356C10.2 4.856 9.899 5.31 9.434 5.493C9.38 5.515 9.327 5.536 9.274 5.559C8.776 5.769 8.203 5.657 7.821 5.275V5.275C7.318 4.772 6.501 4.772 5.998 5.275L5.275 5.997C4.772 6.5 4.772 7.317 5.275 7.82V7.82C5.657 8.202 5.769 8.775 5.559 9.273C5.536 9.327 5.515 9.38 5.494 9.434C5.311 9.899 4.856 10.2 4.356 10.2H4.289C3.577 10.2 3 10.777 3 11.489V12.51C3 13.223 3.577 13.8 4.289 13.8H4.356C4.856 13.8 5.31 14.101 5.493 14.566C5.514 14.62 5.536 14.673 5.558 14.726C5.768 15.224 5.656 15.797 5.274 16.179V16.179C4.771 16.682 4.771 17.499 5.274 18.002L5.996 18.724C6.499 19.227 7.316 19.227 7.819 18.724V18.724C8.201 18.342 8.774 18.23 9.272 18.44C9.325 18.462 9.378 18.484 9.432 18.505C9.898 18.688 10.198 19.142 10.198 19.642V19.709C10.198 20.421 10.775 20.998 11.487 20.998H12.508C13.22 20.998 13.797 20.421 13.797 19.709V19.642C13.797 19.142 14.098 18.688 14.563 18.505C14.617 18.484 14.67 18.462 14.723 18.44C15.224 18.231 15.797 18.343 16.18 18.725V18.725Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  UserTick: ({ ...rest }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#323232"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle
        cx="12.0001"
        cy="8.24884"
        r="4.25177"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.9967 20.0038C3.9967 17.5178 6.01254 15.502 8.49858 15.502H11.0827"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.0029 16.9404L16.0017 19.9417L14.2019 18.1409"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  UserEdit: ({ ...rest }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#323232"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M15 5.2C16.7 6.9 16.7 9.6 15 11.2C13.3 12.8 10.6 12.9 8.99999 11.2C7.39999 9.5 7.29999 6.8 8.99999 5.2C10.7 3.6 13.3 3.6 15 5.2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 20C4 17.5 6 15.5 8.5 15.5H11.1"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14 21H16.3L19.7 17.6C20.1 17.2 20.1 16.6 19.7 16.2L18.8 15.3C18.4 14.9 17.8 14.9 17.4 15.3L14 18.7V21V21H14Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Comment: ({ ...rest }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#AEAEAE"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 3.99658C7.02793 3.99658 2.99625 7.35666 2.99625 11.4968C3.0714 13.9951 4.44925 16.2717 6.62776 17.497C6.41136 18.085 6.11046 18.6384 5.73453 19.1398C5.52703 19.4427 5.53217 19.8433 5.74735 20.1409C5.96254 20.4384 6.3414 20.5687 6.69409 20.4665C7.89692 20.1163 9.02907 19.558 10.0392 18.817C10.6857 18.9382 11.3422 18.9985 12 18.997C16.9721 18.997 21.0037 15.6369 21.0037 11.4968C21.0037 7.35667 16.9721 3.99658 12 3.99658Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.99875 9.99923H15.0012"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.99875 13.0007H12"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  DashedAddMember: ({ ...rest }) => (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      stroke="#C1C1C1"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect
        x="0.53125"
        y="0.53125"
        width="32.9375"
        height="32.9375"
        rx="16.4688"
        stroke-width="1.0625"
        stroke-dasharray="2.12 2.12"
      />
      <path
        d="M19.5 11.3335C20.9167 12.7502 20.9167 15.0002 19.5 16.3335C18.0833 17.6668 15.8333 17.7502 14.5 16.3335C13.1667 14.9168 13.0833 12.6668 14.5 11.3335C15.9167 10.0002 18.0833 10.0002 19.5 11.3335"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.3333 23.6665C10.3333 21.5832 12 19.9165 14.0833 19.9165H16.25"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.5834 24.0832V19.9165"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.5 22.0002H23.6667"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  DashedFlag: ({ ...rest }) => (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      stroke="#C1C1C1"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect
        x="0.694444"
        y="0.694444"
        width="48.6111"
        height="48.6111"
        rx="24.3056"
        stroke-width="1.38889"
        stroke-dasharray="2.78 2.78"
      />
      <path
        d="M16.4215 36.0289V15.1099"
        stroke-width="2.3897"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M33.5787 27.4752V15.1958"
        stroke-width="2.3897"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.4217 27.4505C16.4217 27.4505 17.494 26.5596 20.7109 26.5596C23.9278 26.5596 26.0724 28.676 29.2893 28.676C32.5062 28.676 33.5785 27.4787 33.5785 27.4787"
        stroke-width="2.3897"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.4217 15.1124C16.4217 15.1124 17.494 13.9702 20.7109 13.9702C23.9278 13.9702 26.0724 16.0866 29.2893 16.0866C32.5062 16.0866 33.5785 15.1957 33.5785 15.1957"
        stroke-width="2.3897"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  DashedCalendar: ({ ...rest }) => (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      stroke="#BDC0C6"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect
        x="0.694444"
        y="0.694444"
        width="48.6111"
        height="48.6111"
        rx="24.3056"
        stroke-width="1.38889"
        stroke-dasharray="2.78 2.78"
      />
      <path
        d="M30 12.5V17.5"
        stroke-width="1.875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 12.5V17.5"
        stroke-width="1.875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.75 21.25H36.25"
        stroke-width="1.875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33.75 15H16.25C14.8687 15 13.75 16.1187 13.75 17.5V33.75C13.75 35.1313 14.8687 36.25 16.25 36.25H33.75C35.1313 36.25 36.25 35.1313 36.25 33.75V17.5C36.25 16.1187 35.1313 15 33.75 15Z"
        stroke-width="1.875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.7663 25.9111C18.5938 25.9111 18.4538 26.0511 18.4551 26.2236C18.4551 26.3961 18.5951 26.5361 18.7676 26.5361C18.9401 26.5361 19.0801 26.3961 19.0801 26.2236C19.0801 26.0511 18.9401 25.9111 18.7663 25.9111"
        stroke-width="1.875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.0163 25.9111C24.8438 25.9111 24.7038 26.0511 24.7051 26.2236C24.7051 26.3961 24.8451 26.5361 25.0176 26.5361C25.1901 26.5361 25.3301 26.3961 25.3301 26.2236C25.3301 26.0511 25.1901 25.9111 25.0163 25.9111"
        stroke-width="1.875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31.2663 25.9111C31.0938 25.9111 30.9538 26.0511 30.9551 26.2236C30.9551 26.3961 31.0951 26.5361 31.2676 26.5361C31.4401 26.5361 31.5801 26.3961 31.5801 26.2236C31.5801 26.0511 31.4401 25.9111 31.2663 25.9111"
        stroke-width="1.875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.7663 30.9111C18.5938 30.9111 18.4538 31.0511 18.4551 31.2236C18.4551 31.3961 18.5951 31.5361 18.7676 31.5361C18.9401 31.5361 19.0801 31.3961 19.0801 31.2236C19.0801 31.0511 18.9401 30.9111 18.7663 30.9111"
        stroke-width="1.875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.0163 30.9111C24.8438 30.9111 24.7038 31.0511 24.7051 31.2236C24.7051 31.3961 24.8451 31.5361 25.0176 31.5361C25.1901 31.5361 25.3301 31.3961 25.3301 31.2236C25.3301 31.0511 25.1901 30.9111 25.0163 30.9111"
        stroke-width="1.875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  DashedTag: ({ ...rest }) => (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      stroke="#C1C1C1"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect
        x="0.694444"
        y="0.694444"
        width="48.6111"
        height="48.6111"
        rx="24.3056"
        stroke-width="1.38889"
        stroke-dasharray="2.78 2.78"
      />
      <path
        d="M21.5252 22.7273C21.7008 22.903 21.7008 23.1877 21.5252 23.3634C21.3496 23.539 21.0648 23.539 20.8891 23.3634C20.7135 23.1877 20.7135 22.903 20.8891 22.7273C21.0648 22.5517 21.3496 22.5517 21.5252 22.7273"
        stroke-width="1.83824"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.6446 18.0024L33.4804 26.8381C34.4265 27.7842 34.4265 29.3185 33.4804 30.2646L28.4265 35.3185C27.4804 36.2646 25.9461 36.2646 25 35.3185L16.1642 26.4828C15.9375 26.256 15.8088 25.9472 15.8088 25.6261V18.859C15.8088 18.1899 16.3517 17.647 17.0208 17.647H23.7892C24.1103 17.647 24.4179 17.7744 24.6446 18.0024V18.0024Z"
        stroke-width="1.83824"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M34.1912 22.5486L26.2181 14.6773C25.7586 14.2239 25.1409 13.9702 24.4963 13.9702H19.4853"
        stroke-width="1.83824"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  RightArrow: ({ ...rest }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M4.47998 11.9805H19.47"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.483 5.98828L19.52 12.0003L13.483 18.0123"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  LeftArrow: ({ ...rest }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#323232"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M4.00999 11.98H19"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.013 5.98804L4.002 12L10.013 18.012"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Link: ({ ...rest }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="#323232"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M9.02434 10.9158C8.76432 10.6888 8.36949 10.7155 8.14248 10.9755C7.91547 11.2356 7.94223 11.6304 8.20226 11.8574L9.02434 10.9158ZM14.1626 11.3866L14.5736 11.8574C14.5842 11.8481 14.5945 11.8385 14.6045 11.8285L14.1626 11.3866ZM9.56271 4.00409C9.31606 4.24557 9.31187 4.64128 9.55335 4.88793C9.79483 5.13458 10.1905 5.13877 10.4372 4.89729L9.56271 4.00409ZM10.9755 9.08407C11.2356 9.31108 11.6304 9.28432 11.8574 9.02429C12.0844 8.76427 12.0577 8.36944 11.7976 8.14243L10.9755 9.08407ZM5.83734 8.61325L5.42629 8.14243C5.41567 8.15171 5.40536 8.16134 5.39539 8.17131L5.83734 8.61325ZM10.4372 15.9958C10.6838 15.7543 10.688 15.3586 10.4465 15.1119C10.2051 14.8653 9.80935 14.8611 9.56271 15.1026L10.4372 15.9958ZM8.20226 11.8574C10.0272 13.4507 12.7486 13.4507 14.5736 11.8574L13.7515 10.9158C12.3975 12.0979 10.3784 12.0979 9.02434 10.9158L8.20226 11.8574ZM14.6045 11.8285L15.9911 10.4419L15.1073 9.558L13.7206 10.9446L14.6045 11.8285ZM15.9958 10.4372C17.7403 8.65535 17.7252 5.80124 15.9619 4.03798L15.078 4.92186C16.3568 6.20062 16.3677 8.27048 15.1026 9.56271L15.9958 10.4372ZM15.9619 4.03798C14.1987 2.27472 11.3445 2.25961 9.56271 4.00409L10.4372 4.89729C11.7294 3.63215 13.7993 3.64311 15.078 4.92186L15.9619 4.03798ZM11.7976 8.14243C9.97267 6.54917 7.25126 6.54917 5.42629 8.14243L6.24838 9.08407C7.6024 7.90196 9.62153 7.90196 10.9755 9.08407L11.7976 8.14243ZM5.39539 8.17131L4.00874 9.558L4.89264 10.4419L6.27928 9.05518L5.39539 8.17131ZM4.00409 9.5627C2.25961 11.3445 2.27472 14.1986 4.03798 15.9619L4.92186 15.078C3.64311 13.7993 3.63215 11.7294 4.89729 10.4372L4.00409 9.5627ZM4.03798 15.9619C5.80124 17.7252 8.65535 17.7403 10.4372 15.9958L9.56271 15.1026C8.27048 16.3677 6.20062 16.3568 4.92186 15.078L4.03798 15.9619Z" />
    </svg>
  ),
  ColorPalette: ({ ...rest }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="#323232"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M9.99924 5.3125C9.87257 5.3125 9.77007 5.415 9.77174 5.54166C9.77174 5.66833 9.87424 5.77083 10.0009 5.77083C10.1276 5.77083 10.2301 5.66833 10.2301 5.54166C10.2284 5.415 10.1267 5.3125 9.99924 5.3125"
        stroke-width="1.24999"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.77017 9.99899C5.77017 9.87233 5.66767 9.76983 5.54184 9.77149C5.41517 9.77149 5.31267 9.87399 5.31267 10.0007C5.31267 10.1273 5.41517 10.2298 5.54184 10.2298C5.6685 10.2298 5.77017 10.1265 5.77017 9.99899"
        stroke-width="1.24999"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.3144 6.68495C13.2252 6.59578 13.0802 6.59578 12.9919 6.68578C12.9027 6.77495 12.9027 6.91995 12.9919 7.00911C13.081 7.09828 13.226 7.09828 13.3152 7.00911C13.4044 6.91911 13.4044 6.77495 13.3144 6.68495"
        stroke-width="1.24999"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.00846 12.9909C6.91929 12.9017 6.77429 12.9017 6.68596 12.9917C6.59679 13.0809 6.59679 13.2259 6.68596 13.315C6.77512 13.4042 6.92012 13.4042 7.00929 13.315C7.09846 13.2259 7.09846 13.0809 7.00846 12.9909"
        stroke-width="1.24999"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.00946 7.00821C7.09863 6.91905 7.09863 6.77405 7.00863 6.68571C6.91946 6.59655 6.77446 6.59655 6.6853 6.68571C6.59613 6.77488 6.59613 6.91988 6.6853 7.00905C6.77446 7.09821 6.91946 7.09821 7.00946 7.00821"
        stroke-width="1.24999"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.0001 17.4998C5.78759 17.4998 2.38594 14.0265 2.50344 9.78732C2.61178 5.87401 5.87425 2.61153 9.78756 2.5032C14.0267 2.3857 17.5 5.78734 17.5 9.99981V10.8331C17.5 11.754 16.7542 12.4998 15.8334 12.4998H14.1142C13.0067 12.4998 12.2075 13.5598 12.5117 14.6239L12.7259 15.3748C13.0309 16.4398 12.2309 17.4998 11.1242 17.4998H10.0001Z"
        stroke-width="1.24999"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  LightMode: ({ ...rest }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1E1E1E"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Logout: ({ ...reset }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#818181"
      xmlns="http://www.w3.org/2000/svg"
      {...reset}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 3H18C19.105 3 20 3.895 20 5V19C20 20.105 19.105 21 18 21H6C4.895 21 4 20.105 4 19V5C4 3.895 4.895 3 6 3Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 11V13"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 5.00302V18.998C4 20.485 5.565 21.452 6.894 20.787L10.894 18.787C11.572 18.447 12 17.755 12 16.997V7.00302C12 6.24502 11.572 5.55302 10.894 5.21402L6.894 3.21402C5.565 2.54902 4 3.51602 4 5.00302Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  CircledTick: ({ ...rest }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#323232"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21V21C7.029 21 3 16.971 3 12Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 11L12 14L9 11"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Share: ({ ...rest }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#323232"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M13.53 7.52002L9.46997 10.56"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.4048 4.64216C17.1983 5.4357 17.1983 6.7223 16.4048 7.51584C15.6112 8.30938 14.3246 8.30938 13.5311 7.51584C12.7375 6.72229 12.7375 5.4357 13.5311 4.64216C14.3246 3.84861 15.6112 3.84861 16.4048 4.64216"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.53 16.48L9.46997 13.44"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.4048 16.4842C17.1983 17.2777 17.1983 18.5643 16.4048 19.3579C15.6112 20.1514 14.3246 20.1514 13.5311 19.3579C12.7375 18.5643 12.7375 17.2777 13.5311 16.4842C14.3246 15.6907 15.6112 15.6907 16.4048 16.4842"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.46542 10.5646C10.2582 11.3574 10.2582 12.6427 9.46542 13.4355C8.67266 14.2282 7.38733 14.2282 6.59457 13.4355C5.80181 12.6427 5.80181 11.3574 6.59457 10.5646C7.38734 9.77184 8.67266 9.77184 9.46542 10.5646"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  ListView: ({ ...rest }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#323232"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M11 12H21"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.41399 10.586C7.19499 11.367 7.19499 12.633 6.41399 13.414C5.63299 14.195 4.36699 14.195 3.58599 13.414C2.80499 12.633 2.80499 11.367 3.58599 10.586C4.36699 9.80499 5.63299 9.80499 6.41399 10.586"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 5H21"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.02002 4.508L4.67302 5.996L8.00002 3"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 19H21"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.41399 17.586C7.19499 18.367 7.19499 19.633 6.41399 20.414C5.63299 21.195 4.36699 21.195 3.58599 20.414C2.80499 19.633 2.80499 18.367 3.58599 17.586C4.36699 16.805 5.63299 16.805 6.41399 17.586"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  ColumnView: ({ ...rest }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#323232"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 21V9.06"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 9.06H11C9.89543 9.06 9 9.95543 9 11.06V21"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 15.06H9"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  DatePickerCalendar: ({ ...rest }) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="#BDBDBD"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M21.3307 2.66699V8.00032"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6654 2.66699V8.00032"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.9989 12.0007H27.9989"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.3322 5.33398H6.66557C5.19223 5.33398 3.9989 6.52732 3.9989 8.00065V25.334C3.9989 26.8073 5.19223 28.0007 6.66557 28.0007H25.3322C26.8056 28.0007 27.9989 26.8073 27.9989 25.334V8.00065C27.9989 6.52732 26.8056 5.33398 25.3322 5.33398Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.66522 22.8333C8.48122 22.8333 8.33188 22.9827 8.33322 23.1667C8.33322 23.3507 8.48255 23.5 8.66655 23.5C8.85055 23.5 8.99988 23.3507 8.99988 23.1667C8.99988 22.9827 8.85055 22.8333 8.66522 22.8333"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Calendar: ({ ...reset }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#323232"
      xmlns="http://www.w3.org/2000/svg"
      {...reset}
    >
      <path
        d="M16 2V6"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 2V6"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 9H21"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 4H5C3.895 4 3 4.895 3 6V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V6C21 4.895 20.105 4 19 4Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.01301 12.729C6.87501 12.729 6.76301 12.841 6.76401 12.979C6.76401 13.117 6.87601 13.229 7.01401 13.229C7.15201 13.229 7.26401 13.117 7.26401 12.979C7.26401 12.841 7.15201 12.729 7.01301 12.729"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.013 12.729C11.875 12.729 11.763 12.841 11.764 12.979C11.764 13.117 11.876 13.229 12.014 13.229C12.152 13.229 12.264 13.117 12.264 12.979C12.264 12.841 12.152 12.729 12.013 12.729"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.013 12.729C16.875 12.729 16.763 12.841 16.764 12.979C16.764 13.117 16.876 13.229 17.014 13.229C17.152 13.229 17.264 13.117 17.264 12.979C17.264 12.841 17.152 12.729 17.013 12.729"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.01301 16.729C6.87501 16.729 6.76301 16.841 6.76401 16.979C6.76401 17.117 6.87601 17.229 7.01401 17.229C7.15201 17.229 7.26401 17.117 7.26401 16.979C7.26401 16.841 7.15201 16.729 7.01301 16.729"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.013 16.729C11.875 16.729 11.763 16.841 11.764 16.979C11.764 17.117 11.876 17.229 12.014 17.229C12.152 17.229 12.264 17.117 12.264 16.979C12.264 16.841 12.152 16.729 12.013 16.729"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  SquarePlus: ({ ...rest }) => (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      stroke="black"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.5 20H6.5C5.395 20 4.5 19.105 4.5 18V6C4.5 4.895 5.395 4 6.5 4H18.5C19.605 4 20.5 4.895 20.5 6V18C20.5 19.105 19.605 20 18.5 20Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 8V16"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5 12H8.5"
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
      stroke="#323232"
      {...rest}
    >
      <path
        d="M10.6666 11.1666L21.3333 21.8333"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.3333 11.1666L10.6666 21.8333"
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
      stroke="#292D32"
      {...rest}
    >
      <path
        d="M12.125 18.0585C15.7 17.1168 18.3333 13.8668 18.3333 10.0001C18.3333 5.40014 14.6333 1.66681 10 1.66681C4.44167 1.66681 1.66667 6.30014 1.66667 6.30014M1.66667 6.30014V2.50014M1.66667 6.30014H3.34167H5.36667"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.66667 10.0001C1.66667 14.6001 5.4 18.3335 10 18.3335"
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
      stroke="#323232"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8.12132 4.8788C9.29289 6.05037 9.29289 7.94987 8.12132 9.12144C6.94975 10.293 5.05025 10.293 3.87868 9.12144C2.70711 7.94987 2.70711 6.05037 3.87868 4.8788C5.05025 3.70723 6.94975 3.70723 8.12132 4.8788"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 7.00012H9"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.1213 14.8788C21.2929 16.0504 21.2929 17.9499 20.1213 19.1214C18.9497 20.293 17.0502 20.293 15.8787 19.1214C14.7071 17.9499 14.7071 16.0504 15.8787 14.8788C17.0502 13.7072 18.9497 13.7072 20.1213 14.8788"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 17.0001H15"
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
      stroke="#323232"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle
        cx="11.0586"
        cy="11.5588"
        r="7.06194"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.0033 20.5034L16.0516 16.5518"
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
      stroke="#323232"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M15.4189 10.0002C15.4189 10.2304 15.2323 10.4171 15.002 10.4171C14.7718 10.4171 14.5852 10.2304 14.5852 10.0002C14.5852 9.77 14.7718 9.58337 15.002 9.58337C15.2323 9.58337 15.4189 9.77 15.4189 10.0002"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.4168 10.0002C10.4168 10.2304 10.2302 10.4171 9.99997 10.4171C9.76976 10.4171 9.58313 10.2304 9.58313 10.0002C9.58313 9.77 9.76976 9.58337 9.99997 9.58337C10.2302 9.58337 10.4168 9.77 10.4168 10.0002"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.4148 10.0002C5.4148 10.2304 5.22817 10.4171 4.99796 10.4171C4.76774 10.4171 4.58112 10.2304 4.58112 10.0002C4.58112 9.77 4.76774 9.58337 4.99796 9.58337C5.22817 9.58337 5.4148 9.77 5.4148 10.0002"
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
      stroke="#323232"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M6.85667 9.35191L10.0042 12.5002L16.4 6.10441C15.0833 3.94608 12.7133 2.50024 10 2.50024C5.8575 2.50024 2.5 5.85774 2.5 10.0002C2.5 14.1427 5.8575 17.5002 10 17.5002C13.86 17.5002 17.0358 14.5836 17.4508 10.8336"
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
      stroke="#BDC0C6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1373 7.24158L7.46793 9.90935L5.86313 8.30936"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="1.99789"
        y="2.49768"
        width="12.005"
        height="12.005"
        rx="3.33333"
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
      stroke="#BDC0C6"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M1.99899 2.49901H10.0023"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.49936 4.49998H10.0021"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.49936 6.50059H10.0021"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.99899 8.50157H10.0023"
        stroke-width="0.75"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.00058 10.5022H10.0022"
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
      stroke="#FA5252"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M3.33333 14.5002V3.12024"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6666 9.84687V3.16687"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33331 9.83354C3.33331 9.83354 3.91665 9.34888 5.66665 9.34888C7.41665 9.34888 8.58331 10.5002 10.3333 10.5002C12.0833 10.5002 12.6666 9.84888 12.6666 9.84888"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33331 3.12158C3.33331 3.12158 3.91665 2.50024 5.66665 2.50024C7.41665 2.50024 8.58331 3.65158 10.3333 3.65158C12.0833 3.65158 12.6666 3.16691 12.6666 3.16691"
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
      stroke="#323232"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M10.2094 5.90771V13.7043"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.3773 9.80613H6.04401"
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
      stroke="#323232"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.6627 17.2544H6.98868C6.14475 17.2544 5.44349 16.6031 5.38062 15.7608L4.65759 5.96973H15.9697L15.2708 15.7567C15.2104 16.6007 14.5083 17.2544 13.6627 17.2544V17.2544Z"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.3273 9.19385V14.0301"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.87897 5.96967H16.7757"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.3576 5.96979L13.5411 3.79185C13.3049 3.16233 12.7036 2.74561 12.0313 2.74561H8.62337C7.95113 2.74561 7.34982 3.16233 7.11364 3.79185L6.29712 5.96979"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.0921 9.19385L12.7455 14.0301"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.56261 9.19385L7.90921 14.0301"
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
      stroke="#323232"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M10.3273 9.19355V3.00171"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.3273 9.19356L12.7465 6.77441L10.3273 9.19356Z"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.06989 12.4189H6.60345C6.90862 12.4189 7.18764 12.5912 7.32436 12.8641L7.68481 13.5858C7.82143 13.8592 8.10089 14.0319 8.40653 14.0317H12.2473C12.553 14.0319 12.8324 13.8592 12.969 13.5858L13.3295 12.8649C13.4661 12.5915 13.7456 12.4188 14.0512 12.4189H17.5848"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.7465 2.74243H15.1656C16.5017 2.74243 17.5848 3.82552 17.5848 5.16158V14.8382C17.5848 16.1742 16.5017 17.2573 15.1656 17.2573H5.48903C4.15297 17.2573 3.06989 16.1742 3.06989 14.8382V5.16158C3.06989 3.82552 4.15297 2.74243 5.48903 2.74243H7.90818"
        stroke-width="1.20907"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.9082 6.77441L10.3274 9.19356L7.9082 6.77441Z"
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
