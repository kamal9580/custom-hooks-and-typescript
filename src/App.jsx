//Converting the data fetching bit to a custom hook
 

// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function useTodos() {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//       })
//   }, [])

//   return todos;
// }

// function App() {
//   const todos = useTodos();

//   return (
//     <>
//       {todos.map(todo => <Track todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

// export default App

// Cleaning the hook to include a loading parameter
// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function useTodos() {
//   const [loading, setLoading] = useState(true);
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading(false);
//       })
//   }, [])

//   return {
//     todos: todos,
//     loading: loading
//   };
// }

// function App() {
//   const { todos, loading } = useTodos();

//   if (loading) {
//     return <div>
//       Loading...
//     </div>
//   }

//   return (
//     <>
//       {todos.map(todo => <Track todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

// export default App


// Auto refreshing hook
// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function useTodos(n) {
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const value = setInterval(() => {
//       axios.get("https://sum-server.100xdevs.com/todos")
//         .then(res => {
//           setTodos(res.data.todos);
//           setLoading(false);
//         })
//     }, n * 1000)
  
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading(false);
//       })

//     return () => {
//       clearInterval(value)
//     }
//   }, [n])

//   return {todos, loading};
// }

// function App() {
//   const {todos, loading} = useTodos(10);

//   if (loading) {
//     return <div> loading... </div>
//   }

//   return (
//     <>
//       {todos.map(todo => <Track todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }

// export default App


// swr - React Hooks for Data Fetching

// import useSWR from 'swr'

// // const fetcher = (url) => fetch(url).then((res) => res.json());
// const fetcher = async function(url) {
//   const data = await fetch(url);
//   const json = await data.json();
//   return json;
// };

// function Profile() {
//   const { data, error, isLoading } = useSWR('https://sum-server.100xdevs.com/todos', fetcher)
 
//   if (error) return <div>failed to load</div>
//   if (isLoading) return <div>loading...</div>
//   return <div>hello, you have {data.todos.length} todos!</div>

import React from 'react';
import { useIsOnline } from './Useisonline';
import {useMousePointer} from `./Usemousehook`;
import {useInterval} from `./Useinterval`;

function App() {
  const mousePointer = useMousePointer();
  const isOnline = useIsOnline(5);
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000)


  return (
    <>
      Your mouse position is {mousePointer.x} {mousePointer.y}
      {isOnline ? "You are online yay!" : "You are not online"}
      Timer is at {count}
    </>
  )
}

export default App