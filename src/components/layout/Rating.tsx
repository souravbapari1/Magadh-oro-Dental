"use client";
import { FaStar } from "react-icons/fa";

type RatingProps = {
  totalStars?: number;
  rating?: number;
  onRate?: (rating: number) => void;
  readOnly?: boolean;
};

const Rating: React.FC<RatingProps> = ({
  totalStars = 5,
  rating = 0,
  onRate,
  readOnly = false,
}) => {
  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, i) => {
        const starValue = i + 1;
        return (
          <FaStar
            key={starValue}
            size={17}
            className={`transition-colors duration-200 ${
              starValue <= rating ? "text-yellow-400" : "text-gray-300"
            } ${readOnly ? "cursor-default" : "cursor-pointer"}`}
            onClick={() => !readOnly && onRate && onRate(starValue)}
          />
        );
      })}
    </div>
  );
};

export default Rating;
