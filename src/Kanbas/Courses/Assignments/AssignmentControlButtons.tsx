import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <h5 className="rounded-2 p-1 border border-black float-start">40% of Total</h5>
      <BsPlus />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
