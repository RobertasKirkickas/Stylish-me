import { useState } from 'react';

const InterestCalculator = () => {
  const [shoppingTotal, setShoppingTotal] = useState(0);
  const [months, setMonths] = useState();
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPaid, setTotalPaid] = useState(0);

  const handleChange = (event) => {
    if (event.target.name === 'shoppingTotal') {
      setShoppingTotal(event.target.value);
    } else {
      setMonths(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const interestRate = 0.2;
    const monthlyPayment = (shoppingTotal * (1 + interestRate)) / months;
    const totalPaid = monthlyPayment * months;
    setMonthlyPayment(monthlyPayment);
    setTotalPaid(totalPaid);
  };

  return (
    <div>
      <br />
      <h1>Interest Calculator</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Shopping Total:
          <input
            type="number"
            name="shoppingTotal"
            value={shoppingTotal}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Number of Months:
          <input
            type="number"
            name="months"
            value={months}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <button type="submit">Calculate</button>
      </form>
      {monthlyPayment > 0 && (
        <div>
          <p>
            <br />
            Monthly Payment: £{monthlyPayment.toFixed(2)} (20% non-compounding
            interest)
          </p>
          <p>Total Paid: £{totalPaid.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};


export default InterestCalculator;