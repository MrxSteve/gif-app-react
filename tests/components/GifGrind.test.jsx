import { render, screen } from "@testing-library/react"
import { GifGrind } from "../../src/components/GIfGrind";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('pruebasen gifgrind', () => { 
    
    const category = 'Goku';

    test('debe mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrind category={ category }/>);
        //screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

     });

     test('debe de mostrar items cuando se cargan las imagenes con useFetchGifs', () => { 
        
        const gifs =[
            {
                id: 'ABC',
                title: 'Cualquier cosa',
                url: 'https://localhost/cualquier/cosa.jpg'
            },
            {
                id: '123',
                title: 'Cualquier cosa 2',
                url: 'https://localhost/cualquier/cosa2.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render( <GifGrind category={ category }/>);
        expect(screen.getAllByRole('img').length).toBe(gifs.length);
        expect(screen.getAllByRole('img').length).toBe(2);

        //screen.debug();

      })

 })