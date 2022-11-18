import React, { useEffect, useState } from "react";
import { Col, Input, Row } from "antd";
import task from "../assets/task.jpg";
import styled from "styled-components";
import useLocalAdd from "./localAdd";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const { recipedetail } = useLocalAdd();
  const { removeR, updateR } = useLocalAdd();
  const navigate = useNavigate();

  const [alldata, setAllData] = useState(recipedetail);
  // const [entertext, setEnteredText] = useState("");
  // const [serachitem, setSearchItem] = useState("");
  const { Search } = Input;
  const onSearch = (value) => {
    let a = value.toLowerCase() || value.toUpperCase();
    // setEnteredText(a);
    console.log(a);
    const selectObj = alldata.filter(
      (v) =>
        v.dish.includes(a) || v.ingredient.includes(a) || v.text.includes(a)
    );
    setAllData(selectObj);
    console.log(a);
  };
  const removeElement = (id) => {
    const selectObj = alldata.filter((v) => v.id !== id);
    setAllData(selectObj);
    removeR(selectObj);
  };
  const editsect = (id) => {
    navigate(`/form/?q=${id}`, {
      state: id,
    });

    const filtrateobj = alldata.filter((x) => x.id === id);

    console.log(filtrateobj);
  };

  return (
    <HomepageSection>
      <Row justify="space-evenly">
        {/* <Col span={2}>
          <img src={task}></img>
        </Col> */}
        <Col span={18}>
          <h1 className="data-enter">Data Entered by users</h1>
          <div className="search-section">
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{
                width: 200,
              }}
            />
          </div>
          <table>
            <thead>
              <tr>
                <th>SN</th>
                <th>Recipe Name</th>
                <th>Ingridients Name</th>
                <th>Ingridients Quantity</th>
                <th>Unit </th>
                <th>Recipe Steps </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {alldata !== null &&
                alldata.length > 0 &&
                alldata.map((res, index) => (
                  <tr>
                    <td key={index}>{index + 1}</td>
                    <td>{res.dish}</td>
                    <td>{res.ingredient}</td>
                    <td>{res.qty}</td>
                    <td>{res.unit}</td>
                    <td>{res.text}</td>
                    <td>
                      {/* <button
                        onClick={(e) => {
                          editsect(res.id);
                        }}
                      >
                        Edit
                      </button> */}
                      <button
                        className="delete-btn"
                        onClick={(e) => {
                          // console.log(res.id);
                          removeElement(res.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </HomepageSection>
  );
};

export default HomePage;
const HomepageSection = styled.div`
  img {
    width: 500px;
    height: 100%;
    margin-left: 20px;
    padding: 20px;
  }
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
  .search-section {
    display: grid;
    justify-content: flex-end;
    margin: 10px;
  }
  .delete-btn {
    margin-left: 10px;
  }
  .data-enter {
    text-align: center;
    font-weight: bold;
  }
`;
