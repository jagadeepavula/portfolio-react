import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
} from "react";
import { FiArrowDown } from "react-icons/fi";

const AccordianContext = createContext();

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  return (
    <ul className="max-w-full" {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

export function AccordianItem({
  children,
  value,
  trigger,
  subText,
  dateText,
  additionalContent,
  ...props
}) {
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === value;

  const contentRef = useRef(null);

  useEffect(() => {
    // Update the ref height when content changes
    if (contentRef.current) {
      contentRef.current.style.height = open
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [open]);

  const handleHeaderClick = () => {
    setSelected(open ? null : value);
  };

  return (
    <ul
      className="rounded-3xl transition-colors duration-300 hover:bg-black w-11/12 sm:w-5/6 overflow-hidden"
      {...props}
    >
      <header
        role="button"
        onClick={handleHeaderClick}
        className="flex justify-between items-center p-7 sm:p-10"
      >
        <div className="grid text-customExperience">
          <div className="md:text-5xl sm:text-4xl text-3xl font-black">
            {trigger}
          </div>
          {subText && (
            <div className="sm:text-3xl text-2xl font-semibold">{subText}</div>
          )}
          {dateText && (
            <div className="sm:text-lg text-md font-medium">{dateText}</div>
          )}
        </div>

        <FiArrowDown size={30} className="text-white flex-shrink-0 ml-2" />
      </header>
      <div
        className="dropdown overflow-hidden text-customUl rounded-bl-3xl text-xl rounded-br-3xl transition-all"
        ref={contentRef}
      >
        <ul className="sm:pl-20 sm:pr-20 pl-10 pr-10 pb-5 font-small text-base break-words">
          {React.Children.map(children, (child, index) => (
            <li key={index} className="mb-2">
              {child}
            </li>
          ))}
        </ul>

        {additionalContent && (
          <div className="mb-5 text-xs sm:text-sm md:text-xl lg:text-2xl text-customExperience">
            {additionalContent}
          </div>
        )}
      </div>
    </ul>
  );
}
