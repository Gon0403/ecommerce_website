const images = import.meta.glob("../assets/images/**/*.{png,jpg,jpeg,svg}", { eager: true });

 const importImages = Object.keys(images).reduce((acc, path) => {
  const parts = path.split("/");
  const fileName = parts.pop();
  const folder = parts.pop();
  const key = folder === "images" ? fileName : `${folder}/${fileName}`;
  acc[key] = images[path].default;
  return acc;
}, {});

export default importImages