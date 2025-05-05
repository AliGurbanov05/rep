import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAdminDataThunk,
  getAdminDataThunk,
} from "../../../../redux/reducers/adminSlice";
import style from "./AdminCard.module.scss";

const AdminCard = () => {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin.admin) || [];

  const [text, setText] = useState("");
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    dispatch(getAdminDataThunk());
  }, [dispatch]);

  const deleteData = (id) => {
    dispatch(deleteAdminDataThunk(id));
  };

  const filteredData = admin
    .filter((product) =>
      product.title.toLowerCase().includes(text.toLocaleLowerCase())
    )
    .sort((a, b) => (sort === "asc" ? a.price - b.price : b.price - a.price));

  return (
    <div className={style.admin}>
      <div className={style.controls}>
        <input
          type="text"
          placeholder="AXTAR"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => setSort("asc")}>A-Z</button>
        <button onClick={() => setSort("desc")}>Z-A</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Şəkil</th>
            <th>Başlıq</th>
            <th>Qiymət</th>
            <th>Əməliyyat</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.thumbnail} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <button
                  className={style.btn}
                  onClick={() => deleteData(item.id)}
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCard;
