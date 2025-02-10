import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({
  title,
  description,
  image,
  link,
  category,
  date,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
  date: string;
  category: string;
}) {
  return (
    <Link href={link}>
      <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow shadow-gray-300/30 border-none bg-white border-primary/5 duration-300 ">
        <Image
          width={1000}
          height={10000}
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <CardHeader className="py-3 pt-6">
          <div className="flex justify-between items-center text-xs text-gray-400 mb-3">
            <p className="font-bold text-primary/70">{date}</p>
            <Badge className="bg-primary text-white shadow-none text-xs rounded-full ">
              {category}
            </Badge>
          </div>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
