import {useState} from 'react';    
import {AddCategory, GifGrind} from './components';

export const GifApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball']); 
  
  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }
  
  return (
    <>

      <h1>GifApp</h1>

      <AddCategory 
        onNewCategory={ onAddCategory }
      />

      
      {categories.map(category => (
          <GifGrind 
            key={category}
            category={category}
          />
          ))
      }

    </>
  )
}

