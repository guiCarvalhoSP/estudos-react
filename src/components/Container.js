
const Container = ({children, value}) => {
  return (
    <div>
        <h2>Container</h2>
        <p>Value: {value}</p>
        {children}
    </div>
  )
}

export default Container