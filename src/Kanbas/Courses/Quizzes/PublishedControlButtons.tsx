import { FaBan, FaCheckCircle, FaCircle, FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { deleteQuiz, updateQuizPublished } from "./reducer";
import { Link, useParams } from "react-router-dom";
import { BiPencil } from "react-icons/bi";
export default function PublishedControlButtons({ published, quizId }: {
    published: boolean;
    quizId: string;
}) {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const removeQuiz = async () => {
        await client.deleteQuiz(quizId);
        dispatch(deleteQuiz(quizId));
    };
    const updatePublished = async () => {
        const updatedQuiz = await client.updateQuiz(quizId, { published: !published });
        dispatch(updateQuizPublished(quizId));
    }
  return (
    <div className="float-end">
        {published ? (<span className="me-1 position-relative" style={{ cursor: "pointer" }} onClick={updatePublished}>
            <FaCheckCircle style={{ top: "2px" }}
                className="text-success me-1 position-absolute fs-5" />
            <FaCircle className="text-white me-1 fs-6" />
        </span>) : (
            <span className="me-1 position-relative" style={{ cursor: "pointer" }} onClick={updatePublished}>
                <FaBan style={{ top: "2px" }}
                className="text-danger me-1 position-absolute fs-5" />
                <FaCircle className="text-white me-1 fs-6" />
            </span>
        )
        }
      <Link to={`/Kanbas/Courses/${cid}/Quizzes/${quizId}/edit`}
              className="wd-quiz-link align-items-center text-reset text-decoration-none">
                    <BiPencil className="me-2 fs-3" />
        </Link>
      <FaTrash className="text-danger me-2 mb-1" style={{ cursor: "pointer" }} onClick={removeQuiz} />
    </div>
);}
