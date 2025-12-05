export const createFormData = (productData) => {
  const file = productData.img;
  const {
    title,
    description,
    category,
    subCategory,
    brand,
    price,
    salePrice,
    totalStock,
    colors,
    tag,
    xxl,
    xl,
    l,
    sm,
    xs,
  } = productData;

  const color = colors.split(",");
  const tags = tag.split(",");

  const size = [{ xxl: xxl }, { xl: xl }, { l: l }, { sm: sm }, { xs: xs }];

  const formData = new FormData();

  formData.append("image", file[0]);
  formData.append("title", title);
  formData.append("description", description);
  formData.append("category", category);
  formData.append("subCategory", subCategory);
  formData.append("brand", brand);
  formData.append("price", price);
  formData.append("salePrice", salePrice);
  formData.append("totalStock", totalStock);
  formData.append("colors", JSON.stringify(color));
  formData.append("sizes", JSON.stringify(size));
  formData.append("tags", JSON.stringify(tags));

  return formData;
};
