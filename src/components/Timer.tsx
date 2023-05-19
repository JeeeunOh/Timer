import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Flex, Text } from "./Common";

export const Timer = () => {
  const [time, setTime] = useState(1800);

  const changeTime = (time: number) => {
    return String(time).length === 1 ? "0" + String(time) : time;
  };

  let countdown: any;

  useEffect(() => {
    countdown = setInterval(() => {
      setTime(time - 1);
    }, 1000);
  }, [time]);

  useEffect(() => {
    if (time === 0) {
      clearInterval(countdown);
      alert("카운트가 만료되었습니다.");
    }
  }, [time]);

  return (
    <Contaier>
      <Flex webGap={30} mobileGap={30}>
        <Text size={50}>{Math.floor(time / 60)}</Text>
        <Text size={50}>{" : "}</Text>
        <Text size={50}>{changeTime(time % 60)}</Text>
      </Flex>
    </Contaier>
  );
};

const Contaier = styled.div`
  width: 500px;
  height: 200px;
  border: 1px solid black;
  border-radius: 1rem;
`;
