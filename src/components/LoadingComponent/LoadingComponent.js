import styled from "styled-components";

const StyledLoadingComponent = styled.section`
  .spinner-container {
    background-color: #000;
    opacity: 0.9;
    z-index: 99;
    position: fixed;
    width: 100vw;
    height: 100vh;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    border-radius: 0.5rem;
  }

  #upper {
    animation: rotate;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    transform-origin: center;
  }

  @keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
`;

const LoadingComponent = (props) => {
  return (
    <StyledLoadingComponent data-testid="custom-element">
      <div className="spinner-container">
        <svg
          width="100%"
          viewBox="0 0 276 276"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="spinner">
            <circle
              id="bottom"
              cx="138"
              cy="138"
              r="60"
              stroke="#DBDBDB"
              strokeWidth="10"
            />
            <circle
              id="upper"
              cx="138"
              cy="138"
              r="69"
              stroke="#111"
              strokeWidth="15"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="373 100"
              style={{ animationDuration: props.speed + "s" }}
            />
          </g>
        </svg>
      </div>
    </StyledLoadingComponent>
  );
};

export default LoadingComponent;
