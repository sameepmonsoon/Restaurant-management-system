// @ts-nocheck
import { forwardRef, useEffect, useState } from "react";
import { LabelDiv, MainDiv, Input, Button } from "./TextField.Style";

// import MediaQuery from 'react-responsive'

type TextFieldProps = {
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string | FormikErrors<any> | string[] | FormikErrors<any>[];
  prefix?: string | number | JSX.Element;
  suffix?: string | number | JSX.Element;
  icon?: JSX.Element;
  defaultValue?: any;
  type?: string;
  incrementIcon?: any;
  decrementIcon?: any;
  value?: string | number;
  min?: string | number;
  hideNumberChange?: boolean;
  onChange?: (e: any) => void;
  onBlur?: (e: FocusEvent) => void;
  onFocus?: (e: FocusEvent) => void;
  disabled?: boolean;
};
export function friendlyName(name: string) {
  if (name) {
    return name
      .trim()
      .replace("_id", "")
      .replace(/[\W_]+/g, " ")
      .split(" ")
      .map(
        (element) =>
          element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
      )
      .join(" ");
  }
  return "";
}
export const TextField = forwardRef(
  (
    {
      name,
      label,
      type,
      placeholder,
      error,
      prefix,
      suffix,
      icon,
      defaultValue,
      onChange,
      onBlur,
      onFocus,
      hideNumberChange,
      min,
      value,
      disabled = false,
      ...rest
    }: TextFieldProps,
    ref
  ) => {
    const [defaultValueState, setDefaultValue] = useState("");
    const input = document.querySelector(`#input-${name}`);
    const theme = "light";
    const inputPrototype = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    ).set;
    function labelText() {
      const text = label || friendlyName(name);
      if (error) {
        return `${text} ${error}.`;
      }
      // modifications
      return text;
    }
    function increment() {
      inputPrototype.call(input, +input.value + 1);
      input.dispatchEvent(new Event("change", { bubbles: true }));
    }

    function decrement() {
      inputPrototype.call(input, +input.value - 1);
      input.dispatchEvent(new Event("change", { bubbles: true }));
    }

    return (
      <MainDiv>
        <div>
          <LabelDiv error={error} theme={theme}>
            {labelText()}
          </LabelDiv>
        </div>

        <div style={{ display: "flex" }}>
          {prefix && <div theme={theme}></div>}
          <Input
            ref={ref}
            id={`input-${name}`}
            name={name}
            value={value}
            placeholder={placeholder || friendlyName(name)}
            defaultValue={defaultValueState}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            prefix={!!prefix}
            min={min || 0}
            type={type}
            theme={theme}
            disabled={disabled}
            {...rest}
          />
          {/* </Input> */}
          {icon && (
            <div
              suffix={!!suffix}
              type={!!type}
              hideNumberChange={!!hideNumberChange}>
              {icon}
            </div>
          )}

          {suffix && (
            <div type={!!type} hideNumberChange={!!hideNumberChange}></div>
          )}

          {/* {type === `number` && !hideNumberChange && (
            <>
              <IncrementBtn type="button" onClick={increment} theme={theme}>
                <MdKeyboardArrowUp />
              </IncrementBtn>

              <DecrementBtn type="button" onClick={decrement} theme={theme}>
                <MdKeyboardArrowDown />
              </DecrementBtn>
            </>
          )} */}
        </div>
      </MainDiv>
    );
  }
);
