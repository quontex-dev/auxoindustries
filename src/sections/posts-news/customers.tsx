import Customers from "@/components/customers";

const customerImages = [
  "/images/posts-news/post-img-1.png",
  "/images/posts-news/post-img-2.png",
  "/images/posts-news/post-img-3.png",
  "/images/posts-news/post-img-4.png",
];

export default function CustomerSection() {
  return <Customers images={customerImages} />;
}
