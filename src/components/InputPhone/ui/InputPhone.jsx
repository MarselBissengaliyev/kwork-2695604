import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "../styles/input-phone.scss";

const InputPhone = () => {
  const [phone, setPhone] = useState("");

  return (
    <PhoneInput
      country={"us"}
      value={phone}
      onChange={phone => setPhone(phone)}
      inputClass="phone-input"
      placeholder="Enter your phone number"
    />
  );
};

export default InputPhone;
