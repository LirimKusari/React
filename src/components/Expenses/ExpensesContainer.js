import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpensesContainer.css";

function ExpenseContainer(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.data[0].date}
        title={props.data[0].title}
        amount={props.data[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.data[1].date}
        title={props.data[1].title}
        amount={props.data[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.data[2].date}
        title={props.data[2].title}
        amount={props.data[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.data[3].date}
        title={props.data[3].title}
        amount={props.data[3].amount}
      ></ExpenseItem>
    </Card>
  );
}

// function ExpenseContainer(props) {
//   return (
//     <div className="expenses">
//       props.data.map( itemData => {
//         return ( <ExpenseItem
//           date={itemData.date}
//           title={itemData.title}
//           amount={itemData.amount}
//         ></ExpenseItem> )
//         }
//       )
//     </div>
//   );
// }

export default ExpenseContainer;
