function Card(props) {
  console.log(props);
  const classes = 'card ' + props.className;
  // any classname value set in the component will set on this component
  return (

    <div className={classes}>{props.children}</div>
    // value of children prop is the content b/w opening and closing tag of the component
  )
}

export default Card;