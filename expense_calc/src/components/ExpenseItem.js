import "./ExpenseItem.css"

function ExpenseItem(props){
    const {date, item, price} = props
    return(
        <div className="expense-item">
        <h3>{date.toString()}</h3>
        <section className="expense-item__description">
            <h2>{item}</h2>
            <p className="expense-item__price">€{price}</p>
        </section>
        </div>
    )
}


export default ExpenseItem