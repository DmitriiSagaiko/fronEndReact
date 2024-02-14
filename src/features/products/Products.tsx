import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { deleteProduct, loadProducts } from "./productAction"
import MyButton from "../../component/myButton/MyButton"

function Products() {
  //через UseSelector достаем все данные по ключам деструктуризацией
  const { products, error, isLoading } = useAppSelector(
    (state) => state.products,
  )

  const dispatch = useAppDispatch()
  useEffect(() => {
    //это валидно только для асинхронных действий
    //передаем в диспатч нашу фичу по названию, в данном случае это loadProducts и ВЫЗЫВАЕМ ее как функцию
    dispatch(loadProducts())
  }, [])

  function deleteItem(id: any) {
    dispatch(deleteProduct(id))
  }

  return (
    //здесь не будет fetch Запросов. Они все в слайсе
    <div>
      <MyButton
        myClick={() => dispatch(loadProducts())}
        text={"обновить стейт"}
      />
      {isLoading && <h4>Loading...</h4>}
      {error && <h4>error</h4>}
      <div>
        {products.map((el) => (
          <div>
            <span key={el.id}>{el.title}</span>
            <button type="button" onClick={() => deleteItem(el.id)}>
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
