interface ISpeechBubbleEndProps {
  chatAnswer: string;
}

function SpeechBubbleEnd({chatAnswer}: ISpeechBubbleEndProps) {
  return (
    <>
      <div className="chat chat-end">
        <div className="chat-header pb-2">
          나<time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble bg-[#ffeb33] text-zinc-950">
          {chatAnswer}
        </div>
      </div>
    </>
  );
}

export default SpeechBubbleEnd;
