import {useNavigate, useParams} from "react-router-dom";

function Question() {
  const navigate = useNavigate();
  const params = useParams();
  const handleMoveNextQuestion = (id: number) => {
    navigate(`/question/${id}`);
  };

  return <></>;
}

export default Question;
