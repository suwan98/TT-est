import useGetHoursAndMinutes from "@/hooks/useGetHoursAndMinutes";

interface ISpeechBubbleEndProps {
  chatAnswer: string;
}

function SpeechBubbleEnd({chatAnswer}: ISpeechBubbleEndProps) {
  const getTime = useGetHoursAndMinutes();
  const getHours = getTime.split(":")[0];
  const getMinutes = getTime.split(":")[1];
  const answerTime = getHours + (parseInt(getMinutes) + 1);

  return (
    <>
      <div className="chat chat-end">
        <div className="chat-header pb-2">
          나<time className="text-xs opacity-50 pl-2">{answerTime}</time>
        </div>
        <div className="chat-bubble bg-[#ffeb33]  text-zinc-950">
          {chatAnswer}
        </div>
      </div>
    </>
  );
}

export default SpeechBubbleEnd;
