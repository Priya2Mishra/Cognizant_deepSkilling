import React,{createContext,useContext,useState}from'react';import{createRoot}from'react-dom/client';import'./styles.css';
const ThemeContext=createContext('light');
const employees=['Asha','Bharat','Charu'];
function EmployeeCard({name}){const theme=useContext(ThemeContext);return <article><b>{name}</b><button className={theme}>View profile</button></article>};
function EmployeesList(){return <section><h2>Employees</h2>{employees.map(name=><EmployeeCard key={name} name={name}/>)}</section>};
function App(){const[theme,setTheme]=useState('light');return <ThemeContext.Provider value={theme}><main><h1>Employee Management</h1><button onClick={()=>setTheme(theme==='light'?'dark':'light')}>Switch to {theme==='light'?'dark':'light'} theme</button><EmployeesList/></main></ThemeContext.Provider>}createRoot(document.getElementById('root')).render(<App/>);
