export const ScrollByMouse = (element, startPoint, scrollLeft, isMouseDown) => {
    element.current.addEventListener("mousedown", (e) => {
        isMouseDown = true;
        //get start point in page
        startPoint = e.pageX - element.current.offsetLeft;
        scrollLeft = element.current.scrollLeft;
    });
    element.current.addEventListener("mouseleave", () => {
        isMouseDown = false;
    });
    element.current.addEventListener("mouseup", () => {
        isMouseDown = false;
    });
    element.current.addEventListener("mousemove", (e) => {
        //check if its down
        if (!isMouseDown) return;
        e.preventDefault();
        if (isMouseDown) {
            //calculate cursor position
            let currentX = e.pageX - element.current.offsetLeft;
            //minse from the start point
            let moved = currentX - startPoint;
            //assign moved value to scroll left
            element.current.scrollLeft = scrollLeft - moved;
        }
    });
}