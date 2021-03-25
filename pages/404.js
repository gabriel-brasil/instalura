import React from 'react';

function DivNotification({ ...children }) {
  return <div>{children}</div>;
}

export default function Page404() {
  return <DivNotification>Página 404! :(</DivNotification>;
}
