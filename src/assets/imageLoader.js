import { lazy } from "react";

function loadIcon(name) {
  const icon = lazy(() =>
    import(`./icons/${name}.svg?react`).then((module) => ({
      default: module.default,
    })),
  );
  if (icon) {
    return icon;
  }
  return null;
}

const images = import.meta.glob("./**/*.{png,jpg,jpeg,svg,webp}");
export { images, loadIcon };
