import React from "react";
import "./Style.css";
import { Divider, Tag, Radio } from "antd";

export const TaskCard = () => {
  return (
    <div className="task-card">
      <h1 style={{ fontSize: 20 }}>Task Title</h1>
      <p>Task Para</p>
      <Tag color="red">red</Tag>
      <Tag color="orange">orange</Tag>
      <Tag color="green">green</Tag>
      <Tag color="cyan">cyan</Tag>
      <Tag color="geekblue">geekblue</Tag>
      <br />
      <Radio>Mark as Complete</Radio>
    </div>
  );
};

export const EmployeeCard = () => {
  return (
    <div className="employee-card">
      <h1 style={{ fontSize: 20 }}>Employee Title</h1>
      <p>Employee Designation</p>
      <p>Employee Expertise</p>
      <Tag color="magenta">magenta</Tag>
      <Tag color="red">red</Tag>
    </div>
  );
};
