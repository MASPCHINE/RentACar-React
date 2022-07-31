import style from "./PriceCard.module.scss"

const PriceCard = (props) => {
  return (
    <div className={style.card}>
        <div className={style.card__priceCard}>{props.daily} <span>Daily</span> </div> 
        <div className={style.card__priceCard}>{props.weekly} <span>Weekly</span></div> 
    </div>
  )
}

export default PriceCard