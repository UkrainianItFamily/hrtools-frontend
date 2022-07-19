import { FlexContainer } from 'src/components';

const Loader = () => (
  <FlexContainer $justify="center">
    <svg
      width={100}
      version="1.1"
      id="L4"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 0 0"
      xmlSpace="preserve"
    >
      <circle fill="#82af13" stroke="none" cx="20" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"
        />
      </circle>
      <circle fill="#82af13" stroke="none" cx="50" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.2"
        />
      </circle>
      <circle fill="#82af13" stroke="none" cx="80" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.3"
        />
      </circle>
    </svg>
  </FlexContainer>
);

export default Loader;
