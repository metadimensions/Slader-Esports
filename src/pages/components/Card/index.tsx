import { CardType } from "../../Types";
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText
} from "./CardStyles";
import Tilt from "react-parallax-tilt";

export const Card = ({ title, date, imgUrl }: CardType) => {
  return (
    <Tilt>
      <CardWrapper>
        <CardImage background={imgUrl} />
        <CardTextWrapper>
          <CardTextDate> Live Now</CardTextDate>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
           Play to win 5 lakhs
          </CardTextBody>
        </CardTextWrapper>
        <CardStatWrapper>
          {/* <CardStats>
            <div>
              1<sup>m</sup>
            </div>
            <div>read</div>
          </CardStats> */}
          <CardStats>
            <LinkText href="#">Play Now</LinkText>
          </CardStats>
          <CardStats>
            {/* <LinkText href="#">github</LinkText> */}
          </CardStats>
        </CardStatWrapper>
      </CardWrapper>
    </Tilt>
  );
};
