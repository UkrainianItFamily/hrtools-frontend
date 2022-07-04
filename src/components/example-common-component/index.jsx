import { PartOne, PartTree, PartTwo } from './components';

const ExampleCommonComponent = () => {
  const text = 'example';

  return (
    <>
      <PartOne />
      <PartTwo />
      <PartTree {...{ text }} />
    </>
  );
};

export default ExampleCommonComponent;
