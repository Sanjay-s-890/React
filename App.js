const heading = React.createElement("h1", { id: "heading" }, "Hello React");
console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);//object
root.render(heading);

