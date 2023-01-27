import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event";
import Button from "./Button"

describe('Button', ()=> {

    test('renders correctly', () => {
        render(<Button></Button>)
        const buttonElement = screen.getByText('BUTTON');
        expect(buttonElement).toBeInTheDocument();
     })

     test('renders its children text node correctly', () => {
        let textNode = 'GUARDAR';
        render(<Button>{textNode}</Button>)
        const buttonElement = screen.getByText(textNode);
        expect(buttonElement).toBeInTheDocument();
     })

     test('triggers the function passed via props to onClick event', async () => {
        const anyFunction = jest.fn()
        render(<Button onClick={anyFunction}></Button>)
        const buttonElement = screen.getByRole('button');
        await user.click(buttonElement);
        expect(anyFunction).toHaveBeenCalled();
     })
})
