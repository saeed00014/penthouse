import { IoIosArrowBack } from "react-icons/io";

import { Link } from "react-router-dom";

const SeeAll = ({link}) => {
  return (
    <Link to={`/${link}`} className='relative border-[2px] border-bg-blue hover:bg-bg-blue-hover transition-all duration-200 px-5 py-2 pl-8 w-fit rounded-full'>
      <span className="absolute left-2 top-3"><IoIosArrowBack /></span>
      <span> مشاهده همه </span>
    </Link>
  )
}

export default SeeAll