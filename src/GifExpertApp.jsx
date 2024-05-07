import {useState} from 'react'
import {AddCategory, GifGrid} from './componets';

export default function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch'])
    const onAddCategory = (newCategory) => {
        // categories.push(newCategory)
        // console.log(newCategory)
        if (categories.includes(newCategory)) return
        return setCategories([newCategory, ...categories]);
    //     //return setCategories((categories)=> [...categories, 'Valorant']);
    }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
            onNewCategory = {event => onAddCategory(event)}
            // setCategories={(categories) => {
            //     setCategories(categories);
            // }}
        />
        {
            categories.map(category =>
                (
                    <GifGrid key={category} category={category}/>
                )
            )
        }
    </>
  )
}
