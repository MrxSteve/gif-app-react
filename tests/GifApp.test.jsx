import { render, screen } from "@testing-library/react"
import { GifApp } from "../src/GifApp";

describe('Pruebas en GifApp', () => { 
    
    test('debe de hacer match con el snapshot', () => { 
        
        const { container } = render(<GifApp />);
        screen.debug();
        expect(container).toMatchSnapshot();

     });

     test('should mostrar una categoria', () => { 
        
        render(<GifApp />);
        const category = 'Dragon Ball';

        expect(screen.getByText(category)).toBeTruthy();
        

      })

 });