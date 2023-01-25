import React, { createContext, useContext, useEffect, useState } from "react";
import { useFilterStore, useStatusPaymentStore } from "../../store/filtered";
import { FilterTypes } from "../../Types/Components/Filters";
import {
  FilterComponentDiv,
  IconDiv,
  InputDiv,
  DateAndSelectDiv,
} from "../Filters/Filters.styles";
import { TextField } from "../TextField";

const Filters = (props: FilterTypes) => {
  const { title, icon, dateIcon, statusIcon } = props;
  const [type, setType] = useState("text");

  const {searchTerm, setSearchTerm} = useFilterStore(
    (state:any)=> ({searchTerm: state.searchTerm,
      setSearchTerm: state.setSearchTerm})
  )
  
  const {payment, setPayment} = useStatusPaymentStore((state:any)=> ({payment: state.payment, setPayment: state.setPayment}))

  const handleFocus = () => {
    if (type === "text") {
      setType("date");
    }
  };

  const handleBlur = () => {
    if (type === "date") {
      setType("text");
    }
  };
  return (
    <>
      <FilterComponentDiv>
        <label htmlFor="filter">Filters</label>

        {/*----for-----Search----box---date box----or-----status/payment----date&status----not----visible----for---stocks---*/}
        {`${title}` === "Stocks" ? (
          <>
            <InputDiv>
              <IconDiv>{icon}</IconDiv>
              <TextField
                type="text"
                placeholder={`Search any item or product...`}
                value = {searchTerm}
                onChange= {(e)=>{ setSearchTerm(e.target.value)}}
              />
            </InputDiv>
          </>
        ) : (
          <>
            <InputDiv>
              <IconDiv>{icon}</IconDiv>
              <TextField
                type="text"
                placeholder={`Search any item or product...`}
                value = {searchTerm}
                onChange= {(e)=>{ setSearchTerm(e.target.value)}}
              />
            </InputDiv>
            <DateAndSelectDiv>
              <IconDiv>{type === "text" ? <>{dateIcon}</> : null}</IconDiv>

              <TextField
                type={type}
                placeholder={`${title} Date`}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </DateAndSelectDiv>
            <DateAndSelectDiv>
              <IconDiv>{statusIcon}</IconDiv>

              {/*--------------if--title===purchase------shows-----status------else-----payment---------------*/}

              <select name="Status" id="status" onChange={(e)=> {setPayment(e.target.value)}}>
                {`${title}` === "Purchase" ? (
                  <>
                    <option selected disabled hidden>
                      Status
                    </option>
                    <option value="">Pending</option>
                    <option value="">Cancelled</option>
                    <option value="">Pre-order</option>
                  </>
                ) : (
                  <>
                    <option selected disabled hidden>
                      Payment
                    </option>
                    <option value="">Cash</option>
                    <option value="">Fonepay</option>
                    <option value="">Card</option>
                    <option value="">Due</option>
                  </>
                )}
              </select>
            </DateAndSelectDiv>
          </>
        )}
      </FilterComponentDiv>
    </>
  );
};

export default Filters;
