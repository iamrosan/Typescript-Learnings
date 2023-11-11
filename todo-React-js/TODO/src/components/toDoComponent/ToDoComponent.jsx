import React from "react";
import ButtonComponent from "../shared/ButtonComponent";
import FileHeadingComponent from "../shared/FileHeadingComponent";

const ToDoComponent = () => {
  return (
    <>
      <FileHeadingComponent title={"TODO"} variant={"h5"} />
      <ButtonComponent
        variant={"contained"}
        label={"Click me"}
        size={"small"}
      />
    </>
  );
};

export default ToDoComponent;
