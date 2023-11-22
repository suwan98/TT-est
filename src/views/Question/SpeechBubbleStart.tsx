import QuestionRobot from "@/assets/img/question-robot.jpg";
import useGetHoursAndMinutes from "@/hooks/useGetHoursAndMinutes";

interface ISpeechBubbleStartProps {
  chatText: string;
}

function SpeechBubbleStart({chatText}: ISpeechBubbleStartProps) {
  const time = useGetHoursAndMinutes();
  return (
    <>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-16 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={QuestionRobot} />
          </div>
        </div>
        <div className="chat-header pb-2">
          췍 GPT
          <time className="text-xs opacity-50 pl-2">{time}</time>
        </div>
        <div className="chat-bubble bg-white text-zinc-950">{chatText}</div>
      </div>
    </>
  );
}

export default SpeechBubbleStart;
