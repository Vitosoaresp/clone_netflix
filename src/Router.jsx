import { Route, Routes } from 'react-router-dom';
import { Browser } from './pages/Browser';
import { MovieTrailer } from './pages/MovieTrailer';
import { Profile } from './pages/Profile';

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/browser" element={<Browser />} />
      <Route path="/movie/:id/:key" element={<MovieTrailer />} />
    </Routes>
  )
}