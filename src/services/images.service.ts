import { Imageurl } from "@interfaces/ImageData";

const allImages: Imageurl[] = [
  {
    src:
      "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    alt: "Night Hotel",
  },
  {
    src:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
    alt: "Blue Skyes",
  },
  {
    src:
      "https://images.unsplash.com/photo-1502514841534-dceabea28dad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1064&q=80",
    alt: "Night Hotel",
  },
  {
    src:
      "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    alt: "Lake Bridge",
  },
  {
    src:
      "https://images.unsplash.com/photo-1521929135277-1891dc05ef4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
    alt: "Blue Ice",
  },
  {
    src:
      "https://images.unsplash.com/photo-1516366613870-3a4c2173c60e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    alt: "View Port",
  },
  {
    src:
      "https://images.unsplash.com/photo-1506059612708-99d6c258160e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1049&q=80",
    alt: "Beautiful Dawn",
  },
  {
    src:
      "https://images.unsplash.com/photo-1440558953273-969c107f78a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80",
    alt: "The Pool",
  },
  {
    src:
      "https://images.unsplash.com/photo-1514803400321-3ca29fc47334?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1052&q=80",
    alt: "Ligthen Blot",
  },
  {
    src:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1046&q=80",
    alt: "A Glass House",
  },
  {
    src:
      "https://images.unsplash.com/photo-1614115691223-533ec9c30930?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    alt: "Its A Beautiful View",
  },
];

export const getImage = (index: number = 0): Imageurl => {
  const max: number = allImages.length - 1;
  const min: number = 0;
  if (index > max) {
    return allImages[0];
  }
  if (min === index) {
    return allImages[allImages.length - 1];
  }
  return allImages[index];
};
