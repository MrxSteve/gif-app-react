import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('pruebas en useFetchGifs', () => { 
    
    test('should regresar el estado inicial', () => { 
        
        const { result } = renderHook( () => useFetchGifs('Goku'));
        const { images, isLoading } = result.current;
        
        expect(images.length).toBe(0);
        expect(images).toEqual([]);
        expect(isLoading).toBe(true);

     });

     test('should retornar un arreglo de imagenes y isLoading en false', async() => { 
        
        const { result } = renderHook( () => useFetchGifs('Goku'));
        await waitFor( 
            () => { expect(result.current.images.length).toBeGreaterThan(0) },
            { timeout: 1000 }
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

      })

 })