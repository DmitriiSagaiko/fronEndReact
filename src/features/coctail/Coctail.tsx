import React from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { loadCoctails } from "./CoctailAction"
import styles from "./Coctail.module.css"

function Coctail() {
  const { coctails, error, isLoading } = useAppSelector(
    (state) => state.coctail,
  )

  const dispatch = useAppDispatch()
  function getCoctail() {
    dispatch(loadCoctails())
  }
  return (
    <div className={styles.main}>
      <button type="button" onClick={getCoctail}>
        получить коктейль!
      </button>
      <div >

        {coctails?.drinks.map((el) => (
          <div className={styles.divCoctail}>
            <h4>{el.strDrink}</h4>
            <img src={el.strDrinkThumb} alt="photo of coctail" className={styles.allImage} />
            <ul>
              {el.strIngredient1 && <li>{el.strIngredient1}</li>}
              {el.strIngredient2 && <li>{el.strIngredient2}</li>}
              {el.strIngredient3 && <li>{el.strIngredient3}</li>}
              {el.strIngredient4 && <li>{el.strIngredient4}</li>}
              {el.strIngredient5 && <li>{el.strIngredient5}</li>}
            </ul>
            <p>{el.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Coctail
