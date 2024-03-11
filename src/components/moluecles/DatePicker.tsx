import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MainDatePicker } from "@mui/x-date-pickers/DatePicker";
function DatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MainDatePicker />
    </LocalizationProvider>
  );
}

export default DatePicker;
