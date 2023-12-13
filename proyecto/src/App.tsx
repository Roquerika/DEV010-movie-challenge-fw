// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Main from './components/main';
// import Detail from './components/detail';
// import {AppProvider} from './context/AppProvider';
// const App = () => {
//   const url = import.meta.env.VITE_BASE_URL;
  
//   return (
//     <>
//       <AppProvider>
//         <BrowserRouter>
//           <Routes>
//             <Route path='/' element={<Main />} />
//             <Route path='/detail/:id' element={<Detail />} />
//           </Routes>
//         </BrowserRouter>
//       </AppProvider>
//     </>
//   )
// }

// export default App

// Aqui se organizan los componentes principales 

import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import './App.css'; // Importa App.css si tienes estilos globales aquí

function App() {
  return (
    <div>
      <Header />
      <MovieList />
    </div>
  );
}

export default App;

