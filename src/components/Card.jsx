import PropTypes from "prop-types";
import Rating from "./Rating";
import shortlist from "../utils/shortList";
import IconButton from "./IconButton";
import {
  ArrowRightShort,
  BookmarkHeart,
  BookmarkHeartFill,
  ExclamationCircle,
  EyeSlash,
} from "react-bootstrap-icons";
import Price from "./Price";
import { useState } from "react";

const Card = ({
  id,
  name,
  rating,
  description,
  projects,
  prices,
  experience,
  contacts,
  isShortlisted,
  isEven,
}) => {
  const [shortListState, ShortListState] = useState(isShortlisted);
  return (
    <div
      className={`flex flex-row p-6 w-full justify-between ${
        !isEven ? "bg-white" : `bg-[#FFFCF2]`
      }`}
    >
      <div className="w-full flex flex-col justify-between">
        <h3 className="text-xl font-extrabold">{name}</h3>
        <Rating value={Number(rating)} />
        <p className="text-xs">{description}</p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-extrabold">{projects}</div>
            <div className="text-xs">Projects</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-extrabold">{experience}</div>
            <div className="text-xs">Experience</div>
          </div>
          <div className="flex flex-col items-center pr-12">
            <div className="text-3xl font-extrabold flex ">
              <Price price={prices} />
            </div>
            <div className="text-xs">Price</div>
          </div>
        </div>
        <div>
          {contacts.map((c) => (
            <p className="text-lg" key={c}>
              {c}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-row ">
        <div className="border-solid border-[#D0D0D0] border-l h mr-5" />
        <div>
          <div className="p-3">
            <IconButton
              icon={<ArrowRightShort size={18} />}
              text={"Details"}
              color={"#8D4337"}
            />
          </div>
          <div className="p-3">
            <IconButton
              icon={<EyeSlash size={18} />}
              text={"Hide"}
              color={"#8D4337"}
            />
          </div>
          <div className="p-3">
            <IconButton
              icon={
                !shortListState ? (
                  <BookmarkHeart size={18} />
                ) : (
                  <BookmarkHeartFill size={18} />
                )
              }
              text={"Shortlist"}
              color={"#8D4337"}
              onClick={() => {
                shortlist(id).then((d) => {
                  if (d == 'success') {
                    ShortListState(!shortListState);
                  }
                });
              }}
            />
          </div>
          <div className="p-3">
            <IconButton
              icon={<ExclamationCircle size={18} />}
              text={"Report"}
              color={"#8D4337"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  contacts: PropTypes.array.isRequired,
  name: PropTypes.string,
  rating: PropTypes.number,
  description: PropTypes.string,
  projects: PropTypes.number,
  prices: PropTypes.number,
  experience: PropTypes.number,
  isShortlisted: PropTypes.bool,
  shortList: PropTypes.func,
  isEven: PropTypes.bool,
};
export default Card;
