import { Button, Form, Input, Select, InputNumber } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useLocalAdd from "./localAdd";
const FormPage = () => {
  const { recipedetail, updateR } = useLocalAdd();
  const [alldetails, setAlldetails] = useState(recipedetail);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const params = useLocation();
  console.log(params?.state);
  const id = params?.state;
  console.log(id, "idsss ");
  const data = useRef();

  const datafromlocal = localStorage.getItem("Added item");
  console.log(datafromlocal, "datatatat");
  const displaydata = () => {};

  let selectObj = alldetails.filter((v) => v.id === id);

  if (selectObj.length == 0) {
    selectObj = [
      {
        dish: "",
        id: "",
        ingredient: "",
        qty: "",
        unit: "",
        text: "",
      },
    ];
  }

  console.log(id, "idsdsd");
  console.log(selectObj, "selectedfield");

  console.log(selectObj[0].dish, "dsisadsa");
  // const paramData = datafromlocal[id];
  // console.log(paramData, "paramdatat");

  const { setR } = useLocalAdd();
  const onFinish = (values) => {
    setR(values);
    console.log("value submitted");
    // form.setFieldsValue({
    //   dish: dish,
    // });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { TextArea } = Input;

  const back = () => {
    navigate("/");
  };

  const datas = [
    {
      id: 1,
      name: "Water",
    },
    {
      id: 2,
      name: "Oil",
    },
    {
      id: 3,
      name: "Salt",
    },
    {
      id: 4,
      name: "Sugar",
    },
    {
      id: 5,
      name: "milk",
    },
  ];
  const units = [
    {
      id: 1,
      name: "kg",
    },
    {
      id: 2,
      name: "Slice",
    },
    {
      id: 3,
      name: "Piece",
    },
  ];
  return (
    <FormPageComponent>
      <h1 className="details-topic">Fill the details</h1>
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name of the dish"
          name="dish"
          rules={[
            {
              required: true,
              message: "Please input your dish name!",
            },
          ]}
        >
          <Input
            onChange={(e) => {}}
            ref={data}
            // value={selectObj[0].dish}
            setFieldsValue={selectObj[0].dish}
            placeholder={selectObj[0].dish}
            style={{
              width: 300,
            }}
          />
        </Form.Item>
        <Form.Item label="Indregients"></Form.Item>
        <Form.Item
          label="Main Indregient "
          name="ingredient"
          rules={[
            {
              required: true,
              message: "Please input your ingridient!",
            },
          ]}
        >
          <Select
            placeholder={selectObj[0].ingredient}
            style={{
              width: 300,
            }}
            onSelect={(e) => {}}
          >
            {datas.map((item) => {
              return (
                <Option value={item.name} key={item.name}>
                  {item.name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          label="Ingredient quantity"
          name="qty"
          rules={[
            {
              required: true,
              message: "Please input your quantity!",
            },
          ]}
        >
          <InputNumber
            placeholder={selectObj[0].qty}
            ref={data}
            style={{
              width: 300,
            }}
            onChange={(e) => {}}
          />
        </Form.Item>
        <Form.Item
          label="Unit "
          name="unit"
          rules={[
            {
              required: true,
              message: "Please input your unit!",
            },
          ]}
        >
          <Select
            placeholder={selectObj[0].unit}
            style={{
              width: 300,
            }}
            onSelect={(e) => {}}
          >
            {units.map((item) => {
              return (
                <Option value={item.name} key={item.name}>
                  {item.name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name="text"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <TextArea
            placeholder={selectObj[0].text}
            // placeholder="Steps to Prepare Food"
            rows={4}
            style={{
              width: 300,
            }}
            onChange={(e) => {}}
            ref={data}
          />
        </Form.Item>

        <div className="upload-btn"></div>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            onChange={() =>
              form.setFieldsValue({
                dish: dish,
              })
            }
          >
            Submit
          </Button>
          <Button
            type="primary"
            className="back-btn"
            onClick={back}
            htmlType="submit"
          >
            Back
          </Button>
        </Form.Item>
      </Form>
      {/* <h2>{stringifiedPerson}</h2> */}
    </FormPageComponent>
  );
};
export default FormPage;
const FormPageComponent = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 20px;
  .upload-btn {
  }
  .details-topic {
    text-align: center;
  }
  h1 {
    font-weight: bold;
  }
  .back-btn {
    float: right;
  }
`;
