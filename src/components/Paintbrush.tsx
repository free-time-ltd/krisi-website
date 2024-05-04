import { ComponentProps } from "react";

const Paintbrush = (props: ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      {...props}
      viewBox="0 0 1024 1024"
      fill="currentColor"
    >
      <path d="M443.3 137.2c-1.1 2.4-3.4 7-5 10.3-4.4 8.7-9 22.8-10.4 31.5-1.4 8.8-.6 27.2 1.4 34.5 3.2 11.5 14.6 30.7 22.5 37.8 2 1.9 2.1 1.8 4.1-5 4.5-15.5 6.3-38 3.5-45.8-.6-1.8-.5-1.8.8-.5 2.8 2.9 7.1 20.9 7.2 30 0 9.6-2.6 22.7-5.3 26.2-1 1.3-2 3.1-2.4 4-.5 1.5-.4 1.6 1.3.5 1.1-.6 2-1.4 2-1.8 0-.3 1.8-2.5 4.1-5 13.1-14.3 19.9-30.6 19.9-47.5 0-8.3-1.2-16.2-3.2-21.9-2.7-7.5-10.3-21.6-14.9-27.8-6.5-8.6-20.7-23.7-22.3-23.7-.7 0-2.1 1.9-3.3 4.2zm52.3 18.2c-1.7 2.6-1.6 3.3.2 15.9 1.1 7.3 2.1 12.1 2.1 10.7.1-1.4 1-5.8 2.1-9.8 2.6-9.5 2.6-13.4-.3-16.8l-2.3-2.6-1.8 2.6zm-89.6 5c-.6 1.7-.6 4.3.2 7.8.6 2.9 1.6 8.2 2.3 11.8l1.2 6.5.7-4c.4-2.2 1.2-6.7 1.7-10 .9-4.7.8-6.8-.4-10-1.7-4.8-4.3-5.7-5.7-2.1zm128.1 1.5c-.6 1-4.9 6.1-9.7 11.2-4.7 5.2-9.9 11.6-11.5 14.3-3.4 6.1-5.4 16.8-4.5 25.2.6 5.8 3.9 20 4.9 21 .2.3 5.6-4.6 12-10.8 12.1-11.9 15.4-16.8 17.7-26.7 1.6-7 .7-18.6-2.1-27.1-3.1-9.2-4.8-11-6.8-7.1zM814 164c0 2.7-4.7 16.3-7.1 20.8-4.6 8.3-6.5 11-12.9 18.7-9.2 11-18.8 19.1-42.6 36-16.5 11.7-28.6 24.4-34.3 35.9-6.2 12.6-7.4 18.1-6.9 31 .5 9.5.9 12 3.4 17.1l2.8 6 1.7-12c2.4-16.8 6.1-26.9 13.6-37.2 8.9-12.3 17.4-19.7 38.3-33.8 11.6-7.8 18.5-13 22.9-17.2 2.5-2.5 3.6-2.5 2.5-.2-.5 1.1-24.1 23.7-29.7 28.4-.7.5-4.3 3.6-8.2 6.7-15.3 12.4-25.1 24.4-30.4 37.3-4.7 11.2-7.3 25.3-5.5 30 .5 1.3 5.3 4.5 6.7 4.5.2 0 1.4-3.5 2.7-7.8 2.5-8.4 11-27.5 12.9-28.6 1.5-1 1.4-.6-1.5 6-1.5 3.3-3.2 7.9-4 10.4-2.2 7.6-6.4 24.3-6.2 24.5.2.2 1.2.5 2.4.9 1.8.6 2.3-.1 3.9-5.6 6.4-22.5 14.1-35.3 32.2-53.8 12.5-12.8 16.3-15.1 7.2-4.5-4 4.8-16.6 22.9-23.7 34-5.3 8.6-12.2 26.7-12.2 32.5 0 1.9.4 2.1 3.3 1.5 11.7-2.2 36.8-21.4 51-38.9 2.6-3.2 4.7-5.5 4.7-5.1 0 1.4-11.3 18.1-16.8 24.9-3.1 3.8-8.8 9.1-12.7 11.8-7.6 5.4-17.6 10.8-19.9 10.8-3.4 0-2.1 1.9 3.8 5.8 3.4 2.3 7 4.2 7.9 4.2 2.7 0 15.9-6.4 21.8-10.6 12.8-9 17.8-13.6 25.4-23.1 2.7-3.4 5.1-6 5.4-5.8.7.7-8.1 13.7-14.1 20.6-8.4 9.9-23.3 20.1-32.3 22.3l-3 .8 3.5 2.9c1.9 1.7 5.5 4.1 7.9 5.6 3.9 2.3 5.1 2.5 10.6 1.9 6.4-.6 17.5-4 23.6-7.1 41.2-21.2 58.2-85.3 38.8-146-1-3.3-2.3-6.9-2.8-8-.5-1.1-2.2-4.9-3.7-8.5-5.3-12.3-20.4-35.5-26.1-40-3.2-2.5-4.3-2.5-4.3 0zm-440.6 4.1c1 5.4 5.6 11.1 11.4 14.2 3.1 1.7 6.6 4.7 8.5 7.2 3 4.2 5.6 6 4.4 3.2-.3-.6-1.5-3.7-2.7-6.7-5.8-14.6-9.9-19.3-17.9-20.6l-4.4-.7.7 3.4zm-32.7 12.1c-6.8 11.9-8.7 25.6-4.8 35.7 2 5.3 10.7 19.1 12 19.1 1 0 7.3-10.3 9.2-15 2.3-5.7 1.7-18.5-1-24.5-2.9-6.2-11.2-19.5-12.2-19.5-.4 0-1.8 1.9-3.2 4.2zm246.4-2.1c-2 .8-6 3.8-17.1 12.9l-2.5 2 3-1.1c1.7-.6 6-1.5 9.7-2 3.8-.5 8.1-1.5 9.8-2.4 2.7-1.4 8-7.9 8-9.7 0-1.1-8-.9-10.9.3zm22.9 21.4c-.8.2-5.5.9-10.5 1.5-22.4 3.1-42.3 13-57.7 28.7-9.6 9.8-11.6 12.2-16.6 20.5-3.6 5.9-9.9 17.3-11.1 20.3-.2.5 1.3-.5 3.5-2.3 13.5-11.4 24.9-17.3 48.7-25.4 8.3-2.7 12.7-3.1 8.3-.6-1.1.6-10.7 7-21.5 14.2-10.8 7.2-21.1 13.9-23 14.9-9.1 5-25.2 16.8-20.6 15.1 5.9-2.1 12.8-3.4 22.3-4.4 20.3-2 27.7-3.3 38.2-6.6 28.8-9.1 50.4-30.9 62-62.5 1.7-4.6 3.5-8.8 4.1-9.4.5-.5.9-1.7.9-2.7 0-1.6-1.1-1.8-12.7-1.7-7.1.1-13.5.3-14.3.4zm-235.7 2.1c-.3.9-.1 6.1.5 11.5 2.2 21 12.2 33.1 32.9 40 4.4 1.5 9.3 3.5 10.8 4.5l2.7 1.8-.6-5.7c-.3-3.1-.9-8.3-1.2-11.4-1.6-15.7-10.1-26.1-28.4-35-13.5-6.6-16-7.4-16.7-5.7zM265 209.1c-4.6 15.4-4.6 33.3.1 47.6 3.5 10.6 15.5 25.4 24.3 30 4.4 2.3 7.9 3.2 19.9 5.3 6.2 1 12.2 2.7 14.3 3.9 6.4 3.8 5 1.3-3.7-6.6-13.2-12-17.5-16.9-21.8-24.4-2.3-3.9-4.1-7.4-4.1-7.7 0-.4 2.6 1.9 5.8 4.9 3.1 3.1 9.4 8.6 13.9 12.3 4.5 3.6 8.3 7.2 8.6 7.9.2.6.7 1 1 .7.9-.9-2.3-20.3-4.4-26.2-5.6-16-17.2-29.6-39-46.1-6.4-4.8-11.9-8.7-12.2-8.7-.3 0-1.6 3.2-2.7 7.1z" />
      <path d="M495.6 241.5c-1.3 5.4-10.3 22.8-16.3 31.7-5.2 7.7-15.3 20.5-26.7 33.8-3.8 4.3-3.9 4.4-3.2 1.5.4-1.7 2.2-10.4 4.1-19.5 1.8-9.1 3.5-17.2 3.8-18 .3-.8.8-3 1.1-4.8 1-5.7-1.2-2.5-3.7 5.6-1.4 4.2-6.2 16-10.7 26.2-4.5 10.2-10 22.4-12.1 27.3-2.1 4.8-3.9 8.9-3.9 9.1 0 2-25.4 55.5-46.5 97.9-14.3 28.8-15.4 30.6-16 27.6-.4-1.9-1.1-4-1.5-4.9-.4-.8-1.6-3.5-2.6-6-5.4-13-23-33.3-38.4-44.3-9.7-6.9-26-15.3-37-19.1-7.4-2.5-27-6.9-27.8-6.2-.2.2 2.1 1.2 5 2.1 19.5 6.3 47.8 23.9 62.1 38.8 19 19.6 26.5 41.1 24.5 69.7-.4 6.8-1.5 12-3.8 18.5-1.8 4.9-4.4 12.9-5.8 17.7-1.4 4.9-2.9 8.8-3.3 8.8-.4 0-1-1.1-1.3-2.5-.4-1.4-4.5-6.4-9.1-11-7.2-7.2-9.9-9.1-18.7-13.4-6.2-3-14.4-5.9-20.5-7.4-5.7-1.3-10.3-2.3-10.3-2.2 0 .1 3.8 2.1 8.4 4.5 17.7 8.8 32.5 23.7 38.4 38.9 5.7 14.4 5.8 20.6.6 63.1-2.3 19.4-2.7 26.3-2.7 50-.1 20.6.4 30.9 1.7 41 2.2 16.9 6.8 39.1 10.1 49.4 1.5 4.3 2.4 8 2.2 8.2-.8.9-19.3-18.2-24.8-25.6-13.3-17.8-22.5-35.3-29-55-5.5-16.4-4.9-6.9 1.2 19.5 9.3 40 35 78.9 66.2 99.7 2.1 1.4 5.8 5.6 8.3 9.3 2.5 3.7 6.2 8.5 8.2 10.8 2 2.3 5.7 6.3 8.2 9.1 6.6 7.3 21.7 19 30 23.3 4 2 6.8 3.9 6.2 4.1-1.7.5-18.3-6.4-31.7-13.3-39.3-20-79.8-55.9-103.3-91.6-8.6-12.9-8.2-12.2-14.4-23.9-8.7-16.4-15.1-33-19.4-49.7-1-4-1.9-7.1-2.1-7-.1.2.4 6.6 1.2 14.3 5.4 50.7 26.4 91.9 63.3 124.4 4.5 4 8 7.5 7.8 7.7-.7.7-12.6-7.1-25.1-16.7-4.4-3.3-10.5-7.9-13.5-10.2-7-5.3-29.5-27.7-39.3-39.1-10-11.6-22.7-28.7-31.4-42.2-6.1-9.6-22.5-40.4-26-49-.7-1.7-2.6-6.2-4.2-10.1-4.4-10.3-14.1-39.5-14.1-42.4 0-1.4-.4-3.2-.9-3.9-1.9-3 3 30.1 6.5 44.3 6 23.6 20 57.2 31.5 75.1 17.8 27.8 28.7 41.4 50.8 63.5 46.6 46.5 105.8 78.9 174.1 95.4 76.8 18.5 161.4 12.7 234-16.1 11.5-4.5 36.7-16.5 46.8-22.2 61-34.4 111-88.3 135.5-146.1 21.1-49.9 26.3-99.4 15.1-145-1.8-7.3-6-21.5-7.4-24.5-4.9-11.5-14-28.9-19.1-36.6-6.1-9.1-25.5-29.9-28-29.9-.6 0-2.3-.8-3.7-1.8-10-6.8-27.6-8-38.6-2.7-1.9 1-6.4 6-11.6 13-4.7 6.3-10.3 13.9-12.5 16.9-2.2 2.9-8.7 11.9-14.5 20-5.8 8.1-14.4 20-19.1 26.4-4.7 6.4-12.1 16.4-16.3 22.2-11 15-19.3 23.1-28.5 27.8-10.9 5.6-15.8 6.7-29.6 6.7-14.4 0-21.5-2.1-32.8-9.4-7.5-4.9-10.8-8.5-17-18.3-3.6-5.6-3.6-5.6-7.9-5.1-13.6 1.6-30.4 8.7-40.7 17.3-19.2 16-29.4 37.6-29.5 62.5-.1 27.8 12.3 48.9 37.3 63.5 12.4 7.3 18.3 12.9 22.1 21.3 6.7 14.8 3.3 24.7-15 44.2-17.6 18.8-25 40-20.9 59.7 1.2 5.6 5.9 16.1 8.6 19.1.9.9 1.4 1.9 1.1 2.2-.9 1-21.3-6.2-29.8-10.6-16.7-8.4-32.9-20-45.7-32.8-26.8-26.7-46.2-63.3-55.3-104-13.3-59.8-8.9-143.1 9.6-181.2 1.9-3.8 3.4-7.1 3.4-7.4 0-.2 2.3-3.8 5.1-8 7.8-11.9 19.9-24.2 27.8-28.4 4.8-2.6 1.1-2.1-6.4.9-9.2 3.6-15.7 7.7-24.7 15.4-3.8 3.1-6.8 5.3-6.8 4.7 0-3.6 7.4-39.2 11.7-56.6 13.2-52.7 27.9-89.9 46.6-118 10.1-15.1 17.8-27.8 22.1-36.3 5-9.9 12.4-34.3 11.4-37.4-.3-.7-.8.1-1.2 1.7zm292.8 310.9c1.4.9 3.1 1.6 3.9 1.6.7 0 3.9 2.4 7.2 5.2 8.4 7.6 11.9 15.4 12 26.8 0 4.7-.6 10.5-1.4 13-2.4 7.5-8.7 15.6-15 19.4-9 5.3-11.9 6.1-21.2 6-10.4-.1-17.3-2.8-24.7-9.8-17.2-16.1-15.4-43.9 3.8-57.8 7-5.1 13.6-6.9 23.7-6.5 6.3.3 10 .9 11.7 2.1zm-415.3 24.7c-2.7 23.2-3.7 60.9-2.2 80.9 3.7 46.7 16.4 87.1 37.7 120.1 9.7 15 22.7 29.8 37.3 42.7 17 14.8 51.8 35.3 68.6 40.4l6 1.8-6-.5c-6-.5-20.8-3.9-30-7-8.5-2.9-29-13.3-37.9-19.3-25.7-17.3-49-44.3-61.3-71.1-2.4-5.3-4.9-10.4-5.4-11.4-2.4-4.3-6.9-18.2-10.2-31.2-5.8-22.6-7.2-35.3-7.2-64 0-29.8 1.2-41.2 9-85 1.3-7.7 2.5-14.2 2.5-14.4 0-.2.3-.2.6.1.3.3-.4 8.4-1.5 17.9zm357 91.9c18 3.4 31 16.7 34 34.8 2.9 17.5-7.1 35.8-24.1 44-5 2.5-6.5 2.7-17 2.7-10.6-.1-11.9-.3-17.4-3-7.7-3.8-16.4-12.4-20.1-20-2.8-5.6-3-6.8-3-17.5 0-10.4.3-12.1 2.7-17.3 3.2-6.8 12.4-16.4 18.7-19.7 4.2-2.1 14.2-4.8 18.7-4.9 1.2-.1 4.5.4 7.5.9zM602.7 775.6c6.1 2.1 10.5 5.1 14.9 10.3 11.1 12.9 9.3 31.1-4.2 43-5.7 5-13 7.5-21.5 7.5-14.9 0-27-10.2-29.9-25.2-1.7-8.3-.2-15.5 4.5-22.7 4.4-6.6 8.5-9.8 16.1-12.4 7.2-2.5 13.8-2.6 20.1-.5z" />
      <path d="M339.3 251.3c.3.9 1.3 4.9 2.1 9 1.9 9 6.8 24.1 9.7 29.9 7.8 15.5 21.8 28.7 38.4 36.3 12 5.4 18.5 12.7 18.5 20.9.1 2.7.2 2.9 1.1 1.2 2-3.3.6-13.6-2.8-20.3-3.2-6.4-20-31-22.7-33.3-.9-.7-1.6-1.7-1.6-2.2 0-1.2 2.8.5 6 3.4 1.4 1.3 5 4.6 8 7.3 6.1 5.4 14.6 15.6 15.5 18.6 2.5 7.7 2.3-8.2-.2-20.1-5.3-25.3-26.9-43.3-59.4-49.5-4.3-.8-9.1-1.8-10.5-2.1-2.2-.6-2.6-.4-2.1.9zM218 256.5c0 .3 1.3 3.4 2.9 6.9 3.5 7.7 5.6 9.2 16.7 12.2 4.6 1.2 9.6 3.2 11.1 4.4 4.3 3.3 4 .5-.4-4.4-2.1-2.4-5.8-6.7-8.2-9.6-5-5.9-12.4-10-18.3-10-2.1 0-3.8.2-3.8.5zm423.5 3.5c-2.2 1.1-6.2 3.6-9 5.5-2.7 1.9-5.4 3.7-6 3.9-.5.2-.8.6-.4.9.3.4 2.7 0 5.5-.8 2.7-.8 8-1.7 11.9-2.1 6.1-.5 7.3-1 10.2-3.9 1.8-1.8 3.3-3.8 3.3-4.4 0-1.9-11.1-1.3-15.5.9zm27 17.1c-6 1.6-11.9 3.3-13 3.8-1.1.5-3.6 1.5-5.5 2.1-12.7 4.6-27.6 16.1-35 27-4 6-10 18-10 20.1 0 .8-.9 3.3-2 5.6-1 2.4-1.6 4.3-1.3 4.3.3 0 3.1-1.9 6.1-4.3 5.4-4.1 10-7 19.4-12.1 2.5-1.4 6.3-3.7 8.4-5.1 5.1-3.5 5.5-2.3.8 2.6-10.9 11.4-31.4 26.5-43.6 32.2-3.7 1.7-6.8 3.6-6.8 4 0 .5.8.6 1.8.2 4-1.6 12.2-3.3 18.7-3.9 20.8-2 31.3-5 42.3-12.3 13.8-9.2 25.8-25.6 29.1-39.8 1.1-4.9 4.1-23.8 4.1-26.3 0-1.6-.5-1.5-13.5 1.9zM181 287.4c0 2.1 5.6 15.8 10 24.7 9 17.8 23 31.5 41.6 40.8 12.7 6.3 21.1 8.4 43 10.6 7.7.8 15.3 1.9 16.8 2.5 1.6.6 3.1.9 3.3.6.9-.9-23.5-19.4-43.5-33-6.2-4.2-10.8-7.6-10.1-7.6.6 0 4.5 1.2 8.7 2.6 22.5 7.6 42.9 20.7 50 31.9 4.3 6.7 3.5 2.5-1.7-9.4-15.2-34.4-36.4-52.9-70.6-61.5-13.8-3.4-47.5-5-47.5-2.2zm412 3.3c-17.2 2.7-35 7.7-44.9 12.6-13.8 6.9-26.9 21.9-30.5 35-.7 2.8-1.7 6-2.1 7.1-.6 1.3.5.9 4.1-1.7 5.6-3.9 29.8-16.7 31.7-16.7.6 0 .2.8-.9 1.8-1.2.9-6.6 5.3-12 9.8-8.8 7.1-21.7 16.4-23 16.4-.9 0-10.3 7.4-9.9 7.8.2.2 1.8-.1 3.6-.7s5.9-1.1 9.3-1.1c10 0 23.6-2 31.5-4.6 16.1-5.4 31.1-19.3 38.6-35.7 1.8-3.9 9.5-28.6 9.5-30.4 0-.3-1.2-.2-5 .4zm-298.1 17c-.3 2.3.3 7.2 1.3 9.6 1.1 2.8 8.1 7.7 11 7.7.8 0 2.3.9 3.3 2 3.6 4 3.3 1.8-1.1-6.8-3-5.9-5.4-9.4-7.7-11-3.3-2.2-6.6-2.9-6.8-1.5zm201.3 7.3c-6.9 2.8-15.5 7.9-19.7 11.7-7.6 6.8-12.8 17-14.5 28.3-.6 3.6-1.3 8-1.6 9.9l-.5 3.3 2.8-2c1.5-1 3.9-2.3 5.3-2.7 6.5-2 14.8-6 19.5-9.6 4.8-3.6 7.1-6.3 11.8-14.1 2-3.2 5.3-15.2 6.2-22.6.8-6.3.8-6.3-9.3-2.2zm-170.6 11.7c-1.1 7.9-.7 24.8.8 32.5 3.1 15.8 8.6 25.4 24.4 42 6.5 6.9 13.4 14.8 15.2 17.6 1.8 2.9 3.5 5.2 3.6 5.2.9 0-1.1-14.5-2.8-20.5-2.3-8.1-7.2-22.1-10-28.3-1.9-4.4-1.9-7.1.1-3.5.5 1.1 2.7 4 4.8 6.6 4.7 5.7 9.8 15.7 11.6 22.8.8 2.9 1.6 4.8 1.9 4.3 5-8.7 5.8-28.6 1.6-39.5-4.8-12.4-11.3-20.4-23.4-29-7.3-5.3-18.2-11.4-24.5-13.8-2.6-.9-2.7-.8-3.3 3.6zm377.7 16.5c-1.5 2.4-3.2 4.6-3.8 5-1.1.8-.6 1.3 12.5 10.5 10.3 7.3 32.7 23.1 45.7 32.4 4.5 3.3 8.5 5.9 9 5.9s1.9-1.7 3.1-3.9c1.2-2.1 2.9-4.4 3.7-5.1 2.1-1.8 1.9-2.2-2.3-5-4.4-2.9-22.5-16-26.3-18.9-8.4-6.5-36.1-25.1-37.4-25.1-.8 0-2.7 1.9-4.2 4.2zm-317.9 3.3c-1.2 3.1.8 9 4.7 13.3 2.1 2.5 3.9 5.1 3.9 5.8 0 .8.5 1.4 1.1 1.4.7 0 .8-.7.4-1.8-.4-.9-1.1-4.3-1.6-7.6-1.1-6.7-3.1-11.1-5.4-12-2.3-.8-2.5-.8-3.1.9zM178.2 359c-1.8.4-3.5 1-3.9 1.3-.7.8 4.6 7.6 7 8.9 5.5 2.9 9.8 2.8 22-.6 3.2-.9 7.4-1.6 9.2-1.6 5 0 4.3-1.4-1.7-4-10.5-4.5-23.6-6.1-32.6-4zm507.2 9.1c-5.4 7.5-14.3 19.8-33.3 45.5-23.5 31.8-35.5 48.2-40.7 55.4-4.6 6.4-5.3 7.4-16.4 22.5-11.8 16.2-11.7 16.1-13.1 23.4-3.6 20.5 9.1 41.7 28.7 47.6 9.3 2.8 23.4 1.5 32.5-3 8.1-4.1 14.8-12.2 39.5-47.5 4.7-6.6 22.8-31.8 28.4-39.5 5.5-7.6 11.8-16.2 19.5-27 12.1-17 25.7-35 26.8-35.7.6-.4.9-.9.7-1.2-.3-.2-12.9-9.2-28-19.9s-29.5-21-32-22.9c-7.3-5.4-7.1-5.4-12.6 2.3zm15.3 16.8c11.4 7.7 15.7 11.3 9.1 7.6-2.6-1.5-5.2-2.5-5.7-2.3-.9.3-5.5 6.4-22.6 30.3-3.8 5.4-11.7 16.2-17.5 24-5.8 7.9-13 17.8-16 22-10.2 14.2-17.3 23.9-29 39.4-14.4 19.2-17.7 24.4-18.5 29.4-.4 2.1-1 3.5-1.4 3-1.6-1.7-3.1-9.3-3.1-14.9 0-7.5 1.9-11 17.4-31.8 6.6-8.8 14.9-20.1 18.5-25.2 3.6-5.1 17.9-24.7 31.6-43.5 28.5-39.1 28.8-39.6 28.2-42.1-.3-1-.4-1.8-.2-1.8s4.3 2.7 9.2 5.9zm-111.4-3.3c-8.6 1.9-15.5 5-24.1 10.9-4.1 2.7-8.7 5.7-10.3 6.5-1.6.8-2.9 1.9-2.9 2.4 0 .4 9 .7 20 .4 11-.2 19.6-.1 19.2.3-.4.4-5.4 1.8-11.2 3.3-8.4 2.1-12.8 2.6-22 2.6-6.3 0-13.5-.5-15.9-1.1-2.4-.5-4.6-.8-4.8-.5-.2.2 6 3.6 13.9 7.5 15.9 7.8 23.6 9.7 34.8 8.8 17.5-1.5 32.4-11.2 45.6-29.9 3-4.2 5.4-7.8 5.4-8.1 0-.5-2.5-1.1-13.5-3.2-9.7-1.8-25.8-1.8-34.2.1zm-94.8 0c-1.1.2-4.5.9-7.5 1.5-24.6 4.7-43.7 21.4-53.6 46.9-1.2 3-2.5 6.4-2.9 7.5-.5 1.1 1.3-.4 4-3.3 9.1-10 21.4-17.4 37.3-22.4 9.3-2.9 14.5-3.3 8.7-.7-7.3 3.3-24.3 14.3-33 21.3-10.2 8.3-17.8 18.1-10.2 13.2 1.2-.8 6.3-2.2 11.2-3.1 23.9-4.4 28.6-5.5 35.9-8.5 12.4-5.2 26-17 34-29.5 4.6-7.2 12.1-21.4 11.5-21.9-.6-.7-33-1.6-35.4-1zm-286.7 4.5c-13 1.1-31 7.2-39.3 13.3-1.6 1.2-7.8 4.9-13.7 8.2-6 3.2-10.8 6.1-10.8 6.4 0 .8 12.3 9.9 18.8 13.8 8.8 5.3 17 8.2 26.7 9.3 23.8 2.7 45.3-3.5 63.8-18.3 4-3.2 7.8-5.8 8.5-5.8 1 0 1.8-1.8 1-2.1-2.6-.9-24.5-1.4-34.2-.8-12.4.9-16 .7-12-.7 1-.3 6-2.2 10.9-4.2 8-3.1 10.3-3.6 20.7-4 12.1-.5 21.6.7 27.1 3.5 1.6.8 3.3 1.3 3.9 1.1 1-.4-7.3-5.8-13.7-9.1-9.2-4.6-26.9-9.7-36-10.3-3.8-.3-8.3-.6-10-.7-1.6-.2-6.9 0-11.7.4zm62.7 46.4c-.5.2-3.3 1-6.2 1.9-2.8.9-6.3 2-7.8 2.6l-2.6 1 6.3 6.2c3.5 3.5 7.7 8.1 9.3 10.3 7 9.5 13.1 15.7 19.5 20 8 5.3 12.2 6.9 24.7 9.5 11.5 2.4 15.4 4 18.1 7.5 3.5 4.5 3.7 2.1.3-3.8-3.5-6.1-15.1-17.6-25.3-25.2-7.3-5.4-7.4-7-.3-3.6 2.5 1.2 4.8 2.1 5.2 2.1 1.6 0 15.4 9.3 17.3 11.7 3.3 4.3 3.5 1.9.5-7.4-2.7-8.3-3.3-9.2-10.9-16.9-8-7.9-15.2-12.4-24.7-15.3-3.2-1-20.8-1.4-23.4-.6zM521 444.7c-5 .6-5.7 1.9-1.5 2.7 3.2.6 9 3.3 12 5.6.6.4 3.1 1.5 5.7 2.5 4.2 1.5 5.5 1.6 11.3.5 8.7-1.6 8.6-2.4-1.4-9.1-4.2-2.7-5.1-2.9-13.5-2.7-5 0-10.7.3-12.6.5zm-290.5 9c1.5 8.1 6.1 12.4 17 15.9 4.4 1.4 8.9 3.3 10 4.3 4.1 3.7 4.6 3.2 1.3-1.8-1.8-2.8-4.7-7.3-6.4-9.9-4.6-7-7.9-9-19.8-11.6-2.8-.7-2.8-.7-2.1 3.1zm-59 .8c-.5.2-5.8 1.8-11.7 3.6-6 1.9-10.8 3.9-10.8 4.5 0 2 14 15.4 19.3 18.4 11.2 6.4 25.3 7.4 42.2 2.9 7.5-1.9 10.6-2 18-.4 6.4 1.4-.8-2.5-9.5-5.1-14.8-4.5-27.1-9-26.4-9.7.3-.3 2-.4 3.8 0 6 1 21.1 4.2 23.6 4.9 2.3.7 2.2.5-1.2-3.7-9.5-11.6-19.3-15.9-35.8-15.8-5.8 0-10.9.2-11.5.4zm303 8c-3.3.7-8 2-10.5 2.9-6.2 2.2-17.9 7.9-17.9 8.8-.1.4 2 .5 4.7.2 6.9-.8 16.8 1.8 28.2 7.6 10.3 5.3 13.4 7.6 8.3 6.4-1.5-.4-3.5-1-4.4-1.5-6.2-3.2-47.1-6.9-41.4-3.7 1.1.6 5.6 4.5 10 8.8 10 9.7 17 14.5 24.8 16.9 19.8 6 37.2 5 55.3-3.4 7.5-3.4 24.4-14.2 24.4-15.5 0-.5-3-2.5-6.7-4.6-3.8-2-10.9-6.3-15.8-9.5-5-3.2-12-7.2-15.6-8.8-12.5-5.7-29.8-7.5-43.4-4.6zM222 504.3c-18.9 5.1-33.7 16.9-47.7 37.7-10 15-12.1 19.6-9 19.7.6.1 6.6 1.1 13.2 2.3 34.2 6.3 62.9-2.9 80.5-26 15.9-20.7 15.1-19.2 9.8-18.5-9.8 1.4-18.9 4-29.2 8.6-6.1 2.7-11.1 4.7-11.3 4.5-.2-.2 1.3-1.9 3.3-3.7 2-1.9 4.4-4.1 5.3-4.9 2.6-2.4 11.2-7.7 15.3-9.4 4.9-2 18.2-3.8 22.7-3.1 10 1.6 10.6 1.6 9.6.7-1.4-1.4-12.8-5.8-20-7.8-3.7-1-11.3-1.8-20-2-12.3-.4-15-.1-22.5 1.9zm-59 3.5c-2.9 1.4-8.8 8.3-9 10.3 0 .3 2.7.2 6.1-.2 5.1-.6 7-1.4 12-5.3 3.2-2.5 6.8-4.6 7.8-4.6 1.1 0 2.3-.5 2.6-1 1.1-1.9-15.6-1.2-19.5.8zm272.2 15.3c-9.3 3.7-18.1 14.6-21.7 26.7-.6 2.1-.4 2.3 1.5 1.7 1.3-.4 7.1-.2 13 .5 15.6 1.9 23-.4 36.9-11.4 3.6-2.9 8.3-6.3 10.3-7.6 2.1-1.4 3.6-3 3.5-3.5-.2-.6-4.1-2.5-8.8-4.4-7.3-3-9.7-3.5-18.9-3.8-8.8-.3-11.3 0-15.8 1.8zM291.8 537c-8.5 1.5-14.8 6.8-18.8 15.7-3.6 8.2-3.5 8.3 7.4 6.4 12.4-2.2 15.8-4.5 21.4-14.5 2.3-4.2 4.2-7.8 4.2-8.1 0-.7-8.7-.4-14.2.5zm-55.1 41.5c-13.8 2.8-24.2 7.7-42.9 20.2-7 4.6-14.4 9.1-16.3 9.9-1.9.8-3.5 1.8-3.5 2.2.1 1.8 19 14.3 28.3 18.8 18.4 8.6 39.1 9.6 62.5 2.8 4.6-1.4 10.5-3.4 13.1-4.6 9.7-4.4 13.3-5.8 15.2-5.8 2.6 0 2.4-1.4-.3-2.8-7.6-3.8-38.3-11.2-46.6-11.2-5.6 0-4.6-1.6 1.5-2.3 2.7-.3 7.7-1.1 11.3-1.7 15.8-2.9 42.8 3.7 55.6 13.5 5.5 4.2 5.6 2.8.4-5.4-10.1-15.9-22.8-25.7-41-31.8-9.4-3.2-26.8-4-37.3-1.8zM203 660.3c0 .8 1.4 4.1 3.1 7.5 3.5 7.2 7.1 9.8 15.5 11.3 3.4.6 6.9 2 8.2 3.2 3.6 3.4 2.5.5-2.7-7-6.8-9.7-12.4-13.8-21.3-15.7-2-.5-2.8-.2-2.8.7z" />
    </svg>
  );
};

export default Paintbrush;
