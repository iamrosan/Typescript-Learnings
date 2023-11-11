import React from "react";
import ButtonComponent from "../shared/ButtonComponent";
import FileHeadingComponent from "../shared/FileHeadingComponent";
import TextFieldComponent from "../shared/TextFieldComponent";
import CheckBoxComponent from "../shared/CheckBoxComponent";

const ToDoComponent = () => {
  return (
    <>
      <FileHeadingComponent title={"TODO"} variant={"h5"} />
      <TextFieldComponent label={"Todo"} />
      <ButtonComponent
        variant={"contained"}
        label={"Click me"}
        size={"small"}
      />
      <ButtonComponent
        variant={"contained"}
        label={"Click you"}
        size={"small"}
      />
      <CheckBoxComponent label={"hello"} />
    </>
  );
};

export default ToDoComponent;
