import { Route, Routes } from 'react-router-dom';
import { images } from 'src/assets';
import { ExampleCommonComponent } from 'src/components';

const App = () => (
  <Routes>
    <Route path="/" element={<ExampleCommonComponent />} />
    <Route path="example" element={<img src={images.exampleJpg} alt="" />} />
  </Routes>
);

export default App;
