import { renderHook } from "@testing-library/react";
import { todoReducer } from "./../../src/08-useReducer/todoReducer";

describe("Pruebas en el todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Recolectar la piedra del Alma",
      done: false,
    },
  ];

  test("Debe de retornar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("Debe de agregar un todo", () => {
    const action = {
      type: "[TODO] add todo",
      payload: {
        id: 2,
        description: "Recolectar la piedra del Alma",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState[0].description).toBe("Recolectar la piedra del Alma");
    expect(newState).toContain(action.payload);
  });

  test("Debe de eliminar un todo", () => {
    const action = {
      type: "[TODO] remove todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });

  test("Debe de toggle un todo", () => {
    const action = {
      type: "[TODO] toggle todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBeTruthy();
  });
});
