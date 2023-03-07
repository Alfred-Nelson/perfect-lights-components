export type IconProp = { color?: string }

function HeartIcon({ color }: IconProp) {
    return (
        <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14.2933 3.07333C13.9528 2.73267 13.5485 2.46243 13.1036 2.27805C12.6586 2.09368 12.1817 1.99878 11.7 1.99878C11.2183 1.99878 10.7414 2.09368 10.2964 2.27805C9.85145 2.46243 9.44716 2.73267 9.10666 3.07333L8.39999 3.78L7.69332 3.07333C7.00553 2.38553 6.07268 1.99914 5.09999 1.99914C4.1273 1.99914 3.19445 2.38553 2.50666 3.07333C1.81886 3.76112 1.43246 4.69397 1.43246 5.66666C1.43246 6.63935 1.81886 7.5722 2.50666 8.26L3.21332 8.96666L8.39999 14.1533L13.5867 8.96666L14.2933 8.26C14.634 7.91949 14.9042 7.5152 15.0886 7.07023C15.273 6.62526 15.3679 6.14832 15.3679 5.66666C15.3679 5.185 15.273 4.70807 15.0886 4.26309C14.9042 3.81812 14.634 3.41383 14.2933 3.07333V3.07333Z"
                stroke={ color || "inherit"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default HeartIcon
