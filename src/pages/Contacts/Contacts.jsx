import { DecorRound, ImgDecor, ShadowDecor } from "./Contacts.styled";
import timeDecor from 'img/times-decor.png';
export const Contacts = () => {
    return (
      <div>
        <h1>Друга сторінка</h1>
        <DecorRound>
          <ImgDecor src={timeDecor} alt="timeDecor" />
          <ShadowDecor></ShadowDecor>
        </DecorRound>
      </div>
    );
}