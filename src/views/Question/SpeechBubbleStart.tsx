interface ISpeechBubbleStartProps {
  chatText: string;
}

function SpeechBubbleStart({chatText}: ISpeechBubbleStartProps) {
  return (
    <>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-header pb-2">
          달자씨
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble bg-white text-zinc-950">{chatText}</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </>
  );
}

export default SpeechBubbleStart;
