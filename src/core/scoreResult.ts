interface ResultParams {
  score: number;
  TResult: string;
  FResult: string;
}

export default function getScoreResult({
  score,
  TResult,
  FResult,
}: ResultParams) {
  if (score >= 4) {
    return {
      textResult: "축하드립니다 당신은 선택받은 순도 100% T입니다!!",
      text: "사람들이 혹시 로봇이냐고 묻지않나요? 자부심을 가지세요!",
      imageSrc: TResult,
    };
  } else if (score >= 2) {
    return {
      textResult: "당신은 T점수가 80점입니다!",
      text: "아주 훌륭해요! 고난과 역경이 가득한 세상에서 논리적으로 헤쳐나가보자구요!",
      imageSrc: TResult,
    };
  } else if (score >= 0) {
    return {
      textResult: "당신의 T점수는 60점입니다! ",
      text: "음.. 이정도면 나쁘지 않아요! 완벽한 T가 되기 위해 조금 더 노력해보는건 어떨까요?",
      imageSrc: TResult,
    };
  } else if (score >= -3) {
    return {
      textResult: "당신은 T점수는 40점입니다!",
      text: " 조금 더 T답게 행동하도록 노력해주세요!",
      imageSrc: FResult,
    };
  } else if (score >= -5) {
    return {
      textResult: "당신은 T점수가 30점이군요? ",
      text: "T답게 행동하도록 더더욱 노력하셔야합니다 이건 심각해요",
      imageSrc: FResult,
    };
  } else {
    return {
      textResult: "이럴수가..😱 당신은 완전히 순도 100% F입니다,,",
      text: " 당신은 정말 감성 충만한 사람이네요,, 그 감성에 매몰되지 않도록 주의하길.. ",
      imageSrc: FResult,
    };
  }
}
