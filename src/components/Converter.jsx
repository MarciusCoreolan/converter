import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  converterValuteWindow,
  convertingValuteSelect,
} from "../redux/actions";

function Converter(props) {
  const dispatch = useDispatch();
  const valute = useSelector((state) => state.valute);
  const baseValute = useSelector((state) => state.baseValute);
  const convertingValute = useSelector((state) => state.convertingValute);
  const converterValuteWindowOPENCLOSE = useSelector(
    (state) => state.converterValuteWindow
  );
  const [inputIn, setInputIn] = useState("");

  const handleSelectValute = (charcode) => {
    dispatch(convertingValuteSelect(charcode));
  };
  const handleClick = () => {
    dispatch(converterValuteWindow());
  };
  const handleChangeIn = (event) => {
    setInputIn(event.target.value);
  };

  return (
    <div className="converter">
      <div>
        <input
          type="number"
          placeholder="введите количество которое хотите конвертировать"
          value={inputIn}
          onChange={(event) => handleChangeIn(event)}
        />
        <div className="converting_valute">
          <button className="base_valute" onClick={handleClick}>
            {convertingValute[0] ? convertingValute[0][0] : baseValute}
          </button>
          <div className="converting_valute_rezult">{convertingValute[0] ? convertingValute[0][1] * inputIn : 0}</div>
        </div>
        {converterValuteWindowOPENCLOSE ? (
          <div className="base_valute_window">
            {valute.map((item) => {
              return (
                <div
                  className="base_valute_window_charcode"
                  onClick={() => handleSelectValute(item[0])}
                  key={item[0]}
                >
                  {item[0]}
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Converter;
