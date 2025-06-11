import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";
import { FiSearch } from "react-icons/fi"; 
import styles from "../InputTag/InputTag.module.css";

interface Props {
  options: any;
  activeId: number | string | null | boolean;
  name: string;
  handleDropdownChange: (
    name: string,
    value: number | string | null
  ) => void;
  isDisabled?: boolean;
  clearable?: boolean;
  label?: string;
  placeHolder?: string;
  isRequired?: boolean;
}

const Dropdown = ({
  options,
  activeId,
  name,
  handleDropdownChange,
  isDisabled,
  clearable,
  label,
  placeHolder = "Search...",
  isRequired,
}: Props) => {
  const [defaultVal, setDefaultValue] = useState();

  useEffect(() => {
    const defaultOption = options.find(
      (option: any) => option.value === activeId
    );
    setDefaultValue(defaultOption);
  }, [options, activeId]);


  const customStyles = {
 control: (provided: any, state: any) => ({
  ...provided,
  border: "1px solid #ccc",
  borderRadius: "9999px",
  boxShadow: state.isFocused ? "0 0 0 2px #2159ade6" : "none",
  backgroundColor: "#fff",
  height: "42px",
  fontSize: 14,
  minHeight: "42px",
}),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: "0 8px",
    }),
    input: (provided: any) => ({
      ...provided,
      margin: 0,
      padding: 0,
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "#333",
    }),
    indicatorsContainer: (provided: any) => ({
      ...provided,
      display: "none",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      fontSize: 14,
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected
        ? "#2159ade6"
        : state.isFocused
        ? "#e6f7ff"
        : "white",
    }),
    menu: (provided: any) => ({
      ...provided,
      zIndex: 9999,
    }),
  };

  const CustomMenu = (props: any) => (
    <components.Menu {...props} className="custom-menu" />
  );

  const CustomMenuList = (props: any) => (
    <components.MenuList {...props} className="custom-menu-list" />
  );

const CustomControl = ({ children, ...props }: any) => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      const preventScroll = (e: any) => {
        e.preventDefault();
      };
      document.addEventListener("touchmove", preventScroll, { passive: false });

      return () => {
        document.removeEventListener("touchmove", preventScroll);
      };
    }
  }, []);

  return (
    <components.Control {...props}>
      <FiSearch
        size={16}
        style={{
          marginLeft: 8,
          marginRight: 8,
          color: "#999",
        }}
      />
      {children}
    </components.Control>
  );
};



  return (
    <div className={`${styles.inputGroup}`}>
      {label && (
        <label
          className="text-xs text-[#1E1E1E] font-alata font-normal leading-4"
          htmlFor={name}
        >
          {label}
          {isRequired && <span className="text-red-900">*</span>}
        </label>
      )}
      <Select
        className="basic-single"
        classNamePrefix="select"
        isDisabled={isDisabled}
        isClearable={clearable}
        value={defaultVal}
        isSearchable={true}
        options={options}
        placeholder={placeHolder}
        onChange={(e: any) => {
          handleDropdownChange(name, e !== null ? e.value : null);
        }}
        components={{
          Control: CustomControl,
          Menu: CustomMenu,
          MenuList: CustomMenuList,
        }}
        styles={customStyles}
      />
    </div>
  );
};

export default Dropdown;
