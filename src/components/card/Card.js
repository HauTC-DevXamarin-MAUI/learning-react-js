import React from "react";
// Using TailWindCSS
function Card(props) {
  const amountClasses = `text-lg font-bold text-transparent bg-clip-text ${
    props.primary ? "bg-primary-gradient" : "bg-secondary-gradient"
  }`;
  return (
    //html
    <div className="relative">
      <div className="w-full rounded-lg h-[400px]">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1600x1200"
          alt=""
          className="block object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="absolute bottom-0 z-10 bg-white left-2/4 -translate-x-2/4 translate-y-2/4 rounded-[20px] p-5 w-[calc(100%-36px)]">
        <div className="flex mb-[30px] justify-between items-centers">
          <div className="flex items-center gap-x-3">
            <img
              className="w-[30px] h-[30px] rounded-full object-cover flex-shrink-0"
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1600x1200"
              alt=""
            />
            <span className="text-base font-light text-[#333]">@zndrson</span>
          </div>
          <div className="flex items-center gap-x-3">
            <img src="" alt="heart" />
            <span>256</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Cosmic Perspective</h3>
          <span className={amountClasses}>12,000 PSL</span>
        </div>
      </div>
    </div>
  );
}
export default Card;
