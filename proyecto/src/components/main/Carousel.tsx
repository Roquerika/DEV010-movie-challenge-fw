// import { useEffect, useState } from 'react';
// import { Container } from '../styled.components';
// import {Movie, Item} from '../../interfaces/interfaces';

// const Carousel = (): JSX.Element => {

//     const [data, setData] = useState<Movie[]>([]);

//     const getData = async() : Promise<void> => {
//         const url = import.meta.env.VITE_BASE_URL;
//         const items = await fetch(url);
//         const response = await items.json();
//         // console.log(response.results);
//         // setData(response.results);
//         const aItems = response.results.map((item: Item) => {
//             const obj: Movie = {
//                 poster_path: item.poster_path,
//                 original_title: item.original_title,
//                 release_date: item.release_date,
//                 genre_ids: item.genre_ids,
//                 vote_average: item.vote_average,
//                 vote_count: item.vote_count,
//                 overview: item.overview,
//         //thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`
//             };
//             return obj;
//         })
//         console.log(aItems);
//         setData(aItems);
//     }

//     useEffect(() => {
//         getData();
//     }, []);
//     return (<>
//         {data.length > 0 ? <>
//             <Container height={50}>
//             {data.map((movie) => (
//     <div key={movie.original_title}>
//       <img src={movie.poster_path} alt={movie.original_title} />
//       <p>{movie.original_title}</p>
//       <p>Release Date: {movie.release_date}</p>
//       <p>Genre IDs: {movie.genre_ids.join(', ')}</p>
//       <p>Vote Average: {movie.vote_average}</p>
//       <p>Vote Count: {movie.vote_count}</p>
//       <p>Overview: {movie.overview}</p></div>))}
      
//       </Container>

//         </> : <section className='loading'>Cargando...</section>
//         }
//     </>)
// };

// export default Carousel;