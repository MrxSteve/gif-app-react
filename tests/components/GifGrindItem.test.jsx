import { render, screen } from '@testing-library/react';
import { GifGrindItem } from '../../src/components';

describe('Pruebas en GifGrindItem', () => { 
    
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';

    test('debe de hacer match con el snapshot', () => { 
        
        const {container} = render(<GifGrindItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();

     });  

     test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        
        render(<GifGrindItem title={title} url={url}/>);
        //screen.debug();

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);

      });

      test('debe de mostrar el titulo en el componente', () => { 
        
        render(<GifGrindItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();

       })

 });
