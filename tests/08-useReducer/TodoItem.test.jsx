import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer";

describe("Pruebas en <TodoItem />", () => {
    const todo = {
        id: 1,
        description: "Recolectar la piedra del Alma",
        done: false,
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("debe de mostrar el todo pendiente correctamente", () => {
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />);

        const liElement = screen.getByRole("listitem");
        expect(liElement.className).toBe("list-group-item d-flex justify-content-between");

        const spanElement = screen.getByText("Recolectar la piedra del Alma");
        expect(spanElement.className).toBe("align-self-center ");
        expect(spanElement.textContent).toBe(todo.description);

        const spanElement2 = screen.getByLabelText("span");
        expect(spanElement2.className).not.toContain("text-decoration-line-through");

        // screen.debug();
    });

    test("Debe de mostrar el todo completado", () => {
        todo.done = true;
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />);

        const spanElement = screen.getByLabelText("span");
        expect(spanElement.className).toContain("text-decoration-line-through");
    });

    test("span Debe de llamar el onToggleTodo", () => {
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />);

        const spanElement = screen.getByLabelText("span");
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test("El button debe de llamar al deleteTodo", () => {
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />);

        const buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
        // screen.debug();
    });
});
