import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 5rem auto 0;
  width: min(80rem, 100%);
  margin-inline: auto;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 2.4rem;
  padding: 2.4rem 0;
  background-color: #f6f6f6;
  box-shadow: 0.1rem 0.1rem 0.4rem #c1c1c1;
  border-radius: 0.4rem;

  & > img {
    max-width: 100%;
  }

  ul,
  ol {
    list-style: none;
  }

  ul > li {
    width: 20rem;
    height: 2rem;
    border-radius: 0.4rem;
    background-color: #dee2e6;
    background-image: linear-gradient(
      to right,
      #dee2e6 0%,
      #ced4da 20%,
      #dee2e6 40%,
      #dee2e6 100%
    );
    background-size: 80rem 10.4rem;
    background-repeat: no-repeat;
    animation: Shimmer 1s linear infinite forwards;

    @keyframes Shimmer {
      0% {
        background-position: -46.8rem 0;
      }
      100% {
        background-position: 46.8rem 0;
      }
    }
  }

  ol {
    li {
      font-size: 1.4rem;
      line-height: 1.8rem;
      margin-top: 0.8rem;

      strong {
        font-size: 1.6rem;
        line-height: 2rem;
      }

      &:first-child {
        margin-top: 1.6rem;
      }
    }
  }
`;
