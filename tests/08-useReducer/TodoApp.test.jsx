import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer";
import { useTodo } from "./../../src/08-useReducer/useTodo";

jest.mock("./../../src/08-useReducer/useTodo");

describe("Pruebas en <TodoApp />", () => {
    useTodo.mockReturnValue({
        todos: [
            {
                id: 1,
                description: "Recolectar la piedra del Alma",
                done: false,
            },
            {
                id: 2,
                description: "Recolectar la piedra del Poder",
                done: true,
            },
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
    });

    // beforeEach(() => {
    //     jest.clearAllMocks();
    // });

    test("Debe de mostrar el TodoApp correctamente", () => {
        render(<TodoApp />);
        // screen.debug();
        expect(screen.getByText("Recolectar la piedra del Alma")).toBeTruthy();
        expect(screen.getByRole("textbox")).toBeTruthy(); // busca un input de tipo text
    });
});
