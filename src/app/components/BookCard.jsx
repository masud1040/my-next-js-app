
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
  const {
    title,
    author,
    category,
    price,
    rating,
    stock,
    description,
    image,
  } = book;

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Book Image */}
      <div className="relative h-72 overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-indigo-600 shadow backdrop-blur">
          {category}
        </span>

        {/* Stock */}
        <span
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold shadow ${
            stock > 0
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {stock > 0 ? `${stock} Available` : "Out of Stock"}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="line-clamp-1 text-xl font-bold text-gray-900 transition-colors group-hover:text-indigo-600">
          {title}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-gray-500">
          by{" "}
          <span className="font-medium text-gray-700">
            {author}
          </span>
        </p>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex text-yellow-400">
            {"★".repeat(Math.floor(rating))}
          </div>

          <span className="text-sm font-semibold text-gray-700">
            {rating}
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
          {description}
        </p>

        {/* Price + Button */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-400">Price</p>

            <p className="text-2xl font-bold text-indigo-600">
              ৳{price}
            </p>
          </div>

          <button
            disabled={stock === 0}
            className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
              stock > 0
                ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg"
                : "cursor-not-allowed bg-gray-200 text-gray-400"
            }`}
          >
            {stock > 0 ? "Add to Cart" : "Unavailable"}
          </button>
          <Link href={`/Books/${book.id}`}>
          <button className="rounded-xl px-5 py-2.5 text-sm font-semibold transition-all bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg">
            Details
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

