import swr from "swr";
import { Global } from "./styles/global";
import Bg from "./assets/bg.png";
import * as S from "./styles";
import { useState } from "react";
import { Service } from "./service";
import { Data } from "./types";

function App() {
  const [loading, setLoading] = useState(false);

  const { data } = swr<Data>(
    "list_bando_op",
    async () => {
      try {
        setLoading(true);
        const { data } = await Service.list();
        return data.data;
      } finally {
        setLoading(false);
      }
    },
    { revalidateOnFocus: false }
  );

  return (
    <>
      <Global />
      <S.Wrapper>
        <img alt="Imagem do bando" src={Bg} />
        <div>
          <h1>One Piece, Recompensas!</h1>
          <ol>
            {loading && (
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            )}
            {!loading &&
              data &&
              Object.keys(data).map((integrante, i) => {
                const [{ Bounty }] = data[integrante as keyof Data];
                return (
                  <li key={`${integrante}_${i}`}>
                    <strong>{integrante}</strong> - {Bounty}
                  </li>
                );
              })}
          </ol>
        </div>
      </S.Wrapper>
    </>
  );
}

export default App;
