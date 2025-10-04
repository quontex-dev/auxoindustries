import Customers from "@/components/customers";

const customerImages = [
  "/images/products-customers/customer-1.png",
  "/images/products-customers/customer-1.png",
  "/images/products-customers/customer-1.png",
  "/images/products-customers/customer-1.png",
  "/images/products-customers/customer-1.png",
  "/images/products-customers/customer-1.png",
];

export default function CustomerSection() {
  return <Customers images={customerImages} />
}
