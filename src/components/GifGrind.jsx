import { GifGrindItem } from './GifGrindItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrind = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);
    

    return (
    <>

        <h3>{category}</h3>   
        {
            isLoading && (<h2>Cargando...</h2>)
        } 
        <div className='card-grid'>
            {
                images.map( ( image ) => (
                    <GifGrindItem 
                        key={image.id}
                        { ...image }
                    />
                ))
            }  
        </div>    
    
    </>
  )
}
