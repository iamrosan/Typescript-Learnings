import React, { useEffect, useState } from "react";
import ButtonComponent from "../shared/ButtonComponent";
import FileHeadingComponent from "../shared/FileHeadingComponent";
import TextFieldComponent from "../shared/TextFieldComponent";
import CheckBoxComponent from "../shared/CheckBoxComponent";
import { Box } from "@mui/material";
import { Verified, Delete, AddCircle } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";

const ToDoComponent = () => {
  const [todoText, setTodoText] = useState("");
  const [errors, setErrors] = useState(false);
  const [todo, setTodo] = useState([]);

  const handleTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const checkValidation = () => {
    let errors = [];
    if (todoText === "") {
      errors.push("TextValidation");
    }
    if (errors.length > 0) {
      setErrors(true);
      return true;
    }
    setErrors(false);
    return false;
  };
  const handleAddButton = () => {
    const flag = checkValidation();
    if (!flag) {
      const uniqueId = uuidv4();
      setTodo((prev) => [
        ...prev,
        { id: uniqueId, title: todoText, isComplete: false, checked: false },
      ]);
      setTodoText("");
    }
  };

  const handleCheckboxChange = (event, id) => {
    const changedTodo = todo.map((t) => {
      if (t.id === id) {
        return {
          ...t,
          checked: event.target.checked,
        };
      }
      return t;
    });

    setTodo(changedTodo);
  };

  const handleFinishBtn = (id) => {
    const updatedTodos = todo?.map((t) => {
      if (id === t.id) {
        return {
          ...t,
          isComplete: true,
          checked: true,
        };
      } else {
        return t;
      }
    });
    setTodo(updatedTodos);
  };

  const handleDeleteBtn = (id) => {
    const updatedTodo = todo?.filter((t) => t.id !== id);
    setTodo(updatedTodo);
  };

  return (
    <>
      <FileHeadingComponent title={"TODO"} />

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position="sticky"
        top={0}
        zIndex={1000}
        bgcolor="white" //
      >
        <TextFieldComponent
          label={"Enter TO DO"}
          variant={"outlined"}
          width={"80vw"}
          handlechange={handleTextChange}
          error={errors}
          helperText={errors ? "Required Fields" : null}
          value={todoText}
        />
        <ButtonComponent
          label={"Add"}
          variant={"contained"}
          size={"medium"}
          sx={{ height: "100%" }}
          onClick={handleAddButton}
          endIcon={<AddCircle />}
        />
      </Box>

      <Box>
        {todo?.map((curTodo) => {
          return (
            <Box display={"flex"} justifyContent={"center"} marginBottom={2}>
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                width={"70%"}
              >
                <CheckBoxComponent
                  label={curTodo.title}
                  disabled={curTodo.isComplete}
                  checked={curTodo.checked}
                  handleChange={(event) =>
                    handleCheckboxChange(event, curTodo.id)
                  }
                />

                <Box
                  display={"flex"}
                  widht={"30%"}
                  justifyContent={"flex-end"}
                  gap={2}
                >
                  <ButtonComponent
                    variant={"contained"}
                    label={"Complete"}
                    size={"medium"}
                    sx={{ height: "100%" }}
                    onClick={() => handleFinishBtn(curTodo.id)}
                    endIcon={<Verified />}
                  />
                  <ButtonComponent
                    variant={"contained"}
                    label={"delete"}
                    size={"medium"}
                    sx={{ height: "100%" }}
                    onClick={() => handleDeleteBtn(curTodo.id)}
                    endIcon={<Delete />}
                  />
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default ToDoComponent;
