const UseScrollerBtn = ({ direction, id, setBtnFade }) => {
  const scrollTarget = document.getElementById(id);
  const scrollLeft = scrollTarget?.scrollLeft || 0;
  const clientWidth = scrollTarget?.clientWidth || 0;
  const scrollWidth = scrollTarget?.scrollWidth || 0;
  const maxScrollLeft = clientWidth - scrollWidth;
  const scrollGap = 210;
  if (direction === "left") {
    if (scrollLeft === maxScrollLeft) {
      setBtnFade("left");
    } else {
      setBtnFade("");
    }
    scrollTarget?.scroll({
      left: scrollLeft - scrollGap,
      behavior: "smooth",
    });
  }
  if (direction === "right") {
    if (scrollLeft === 0) {
      setBtnFade("right");
    } else {
      setBtnFade("");
    }
    scrollTarget?.scroll({
      left: scrollLeft + scrollGap,
      behavior: "smooth",
    });
  }
};

export default UseScrollerBtn;
