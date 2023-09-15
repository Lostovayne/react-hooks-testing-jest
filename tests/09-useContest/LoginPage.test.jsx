import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe("Pruebas en <LoginPage />", () => {
    const setUser = jest.fn();

    test("Debe de mostrar el componente correctamente", () => {
        render(
            <UserContext.Provider value={{ user: null, setUser }}>
                <LoginPage />
            </UserContext.Provider>
        );

        // screen.debug();

        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toBe("null");
    });

    test("Debe llamarse el setUser", () => {
        render(
            <UserContext.Provider value={{ user: null, setUser }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const ButtonElement = screen.getByRole("button");

        fireEvent.click(ButtonElement);
        expect(setUser).toHaveBeenCalledWith({ id: 1, name: "Franco", email: "Franco@google.com" });
    });
});
