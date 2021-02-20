function DivNotification(props) {
  return <div>{props.children}</div>
}


export default function Page404() {
  return <DivNotification>Página 404! :(</DivNotification>
}