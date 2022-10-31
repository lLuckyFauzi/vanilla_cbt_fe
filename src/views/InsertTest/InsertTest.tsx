import React from "react";
import Title from "./Partials/Title";
import InsertStyle from "./Partials/Style.module.scss";
import InputText from "../../components/Input/InputText";
import Text from "../../components/Typography/Text";
import InsertForm from "./Partials/InsertForm";

const InsertTest = () => {
  return (
    <div className={InsertStyle.formContainer}>
      <div>
        <Title />
      </div>
      <div>
        <InsertForm />
      </div>
    </div>
  );
};

export default InsertTest;
