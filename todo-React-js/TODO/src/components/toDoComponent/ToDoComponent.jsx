import React, { useEffect, useState } from "react";
import ButtonComponent from "../shared/ButtonComponent";
import FileHeadingComponent from "../shared/FileHeadingComponent";
import TextFieldComponent from "../shared/TextFieldComponent";
import CheckBoxComponent from "../shared/CheckBoxComponent";
import { Box } from "@mui/material";
import { VerifiedIcon } from "@mui/icons-material";
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

  return (
    <>
      <FileHeadingComponent title={"TODO"} />

      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
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
        />
      </Box>

      <Box>
        {todo?.map((curTodo) => {
          return (
            <Box display={"flex"} justifyContent={"center"}>
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
                    size={"medium"}
                    sx={{ height: "100%" }}
                    onClick={handleAddButton}
                    startIcon={<VerifiedIcon />}
                  />
                  <ButtonComponent
                    variant={"contained"}
                    size={"medium"}
                    sx={{ height: "100%" }}
                    onClick={handleAddButton}
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
