// JS
const cart = {
  quantity: 2,
  total: 200,
}
// Bad
car.quantity = 3

// Good
const newCart = { ...cart, quantity: 3 }

// ReactJS
const [amount, setAmount] = useState(0)

// Bad
amount = 2

// Good
setAmount(2)
