import React from "react";
import { useSelector } from "react-redux";

function Course(props) {
  const valute = useSelector((state) => state.valute);
  const valuteLoad = useSelector((state) => state.valuteLoad);
  return (
    <div>
      {valuteLoad ? (
        <div className="loading">Загрузка...</div>
      ) : (
        <div className="course_content">
          {valute.map((item) => {
            return (
              <div className="course_valute" key={item[0]}>
                <div className="CharCode">{item[0]}</div>
                <div className="Previous">{item[1]}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Course;
