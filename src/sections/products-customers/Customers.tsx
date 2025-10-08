import Customers from "@/components/customers";

const customerImages = [
  "/images/products-customers/customer-1.png",
  "/images/products-customers/customer-2.png",
  "/images/products-customers/customer-3.png",
  "/images/products-customers/customer-4.png",
  "/images/products-customers/customer-5.png",
  "/images/products-customers/customer-6.png",
];

export default function CustomerSection() {
  return <Customers images={customerImages} />;
}
