import { Route, Routes } from 'react-router-dom';
import { Browser } from './pages/Browser';
import { MovieTrailer } from './pages/MovieTrailer';

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Browser />} />
      <Route path="/movie/:id/:key" element={<MovieTrailer />} />
    </Routes>
  )
}