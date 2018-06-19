function curryedAdd(num1) {
  return (num2) => {
    return num2 + num1
  }
}

console.log(curryedAdd(3)(4))
