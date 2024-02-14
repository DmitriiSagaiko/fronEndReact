import React, { FormEvent, useState } from "react"
import styles from "./ProductForm.module.css"
import MyButton from "../../../component/myButton/MyButton"
import { useAppDispatch } from "../../../app/hooks"
import { addProductToServer } from "../productAction"
import IProduct from "../types/Products"

function ProductForm() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState<string>("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [error, setError] = useState("")
  const dispatch = useAppDispatch()

  function valideateInputs(): boolean {
    const linkPattern = /^(https?:\/\/)?([\w.-]+\.\w{2,})(\/\S*)?$/;
    if (title.trim() === '') {
      setError('title is not valid')
      return false
    }
    if (description.trim() === '') {
      setError('description is not valid')
      return false
    }
    if (category.trim() === '') {
      setError('category is not valid')
      return false
    }
    if (price.trim() === '' || (Number.isNaN(Number(price)))) {

      setError('price is not valid')
      return false
    }
    if (!linkPattern.test(image)) {
      setError('url is not valid')
      return false
    }
    return true
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    const data: IProduct = {
      title,
      description,
      category,
      price: Number(price),
      image,
    }
    if(valideateInputs()) {
        dispatch(addProductToServer(data))
    }
    console.log(data)
  }
  return (
    <div className={styles.formContainer}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <label>Добавить новый продукт</label>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">добавить товар</button>
        {/* <MyButton text={"добавить товар"} myClick={()=>handleSubmit} /> */}
      </form>
      <div>
        {error && <span> {error}</span>}
      </div>
    </div>
  )
}

export default ProductForm
