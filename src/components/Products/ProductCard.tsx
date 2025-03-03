import Image from "next/image";

// import { Card, CardContent } from "@/components/ui/card";
import TagButton from "@/components/Blog/TagButton";

export function Card({ children, className }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
}
export function CardContent({ children, className }) {
  return <div className={`mt-2 ${className}`}>{children}</div>;
}

const ProductCard = ({ product }) => {
  return (
    <Card className="max-w-sm rounded-2xl shadow-lg p-4">
      <img
        src={product.images[0]}
        alt={product.name}
        width={300}
        height={300}
        className="rounded-xl object-cover"
      />
      <CardContent className="mt-4">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-gray-500">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold">${product.price}</span>
          <TagButton text="Add to Cart"></TagButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
