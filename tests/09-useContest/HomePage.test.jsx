import { render, screen } from "@testing-library/react";
import { HomePage } from "./../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Pruebas en <HomePage />", () => {
    const user = {
        id: 1,
        name: "Franco",
        email: "Franco@google.com",
    };

    test("Debe de mostrar el componente sin el usuario", () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );
        // screen.debug();

        const preTag = screen.getByLabelText("pre"); // aria-label
        expect(preTag.innerHTML).toBe("null");
    });

    test("Debe de mostrar el componente con el usuario", () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );
        // screen.debug();

        const preTag = screen.getByLabelText("pre"); // aria-label
        expect(preTag.textContent).toContain(user.name);
        expect(preTag.textContent).toContain(user.email);
        expect(preTag.innerHTML).not.toBe("null");
    });
});
