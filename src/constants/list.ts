const categories = [
  { id: 1, type: "All" },
  { id: 2, type: "Electronics" },
  { id: 3, type: "Jewelery" },
  { id: 4, type: "Men's Clothing" },
  { id: 5, type: "Women's Clothing" },
];

const product = [
  { id: 1, name: "Features" },
  { id: 2, name: "Pricing" },
];

const resourses = [
  { id: 1, name: "Blog" },
  { id: 1, name: "User guides" },
  { id: 1, name: "Webinars" },
];

const company = [
  { id: 1, name: "About" },
  { id: 2, name: "Join us" },
];

const delivery = [
  {
    id: 1,
    title: "Standard Shipping",
    description:
      "Our standard shipping option is a reliable choice for customers looking for cost-effective delivery. Packages are typically delivered within 5-7 business days, depending on your location within Europe. This option provides a balance between affordability and reasonable delivery time.",
  },
  {
    id: 2,
    title: "Express Shipping",
    description:
      "For those who require expedited delivery, we offer express shipping services. With express shipping, your order will be prioritized, and you can expect delivery within 2-3 business days. This option is ideal for urgent orders or last-minute gifts.",
  },
  {
    id: 3,
    title: "Free Shipping",
    description:
      "As a token of appreciation for our loyal customers, we provide free shipping on orders exceeding a certain value. Take advantage of this offer to enjoy the convenience of doorstep delivery without any additional shipping charges.",
  },
  {
    id: 4,
    title: "International Shipping",
    description:
      "No matter where you are in Europe, we are committed to reaching you. Our international shipping services ensure that customers outside our standard delivery zones can still enjoy our products. Please note that delivery times may vary for international orders based on customs clearance and local postal services.",
  },
];

export { categories, product, company, resourses, delivery };
