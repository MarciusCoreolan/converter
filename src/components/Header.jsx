import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { baseValuteSelect, baseValuteWindow } from "../redux/actions";

function Header(props) {
  const dispatch = useDispatch();
  const baseValute = useSelector((state) => state.baseValute);
  const valute = useSelector((state) => state.valute);
  const baseValuteSelected = useSelector((state) => state.baseValuteSelected);

  const handleClick = () => {
    dispatch(baseValuteWindow());
  };
  const handleSelect = (charcode) => {
    dispatch(baseValuteSelect(charcode));
  };
  return (
    <div className="header">
      <div>
        <div className="header_base_valute">
          <button className="base_valute" onClick={handleClick}>
            {baseValute}
          </button>
          <div className="header_base_valute_title">Базовая валюта</div>
        </div>
        {baseValuteSelected ? (
          <div className="base_valute_window">
            {valute.map((item) => {
              return (
                <div
                  className="base_valute_window_charcode"
                  onClick={() => handleSelect(item[0])}
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
      <Link to="/converter">
        <button>Конвертировать</button>
      </Link>
    </div>
  );
}

export default Header;
