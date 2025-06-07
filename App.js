const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
const Reactheading = React.createElement(
  "h1",
  { id: "heading", class: "xyz" },
  "This is using react"
);
reactRoot.render(Reactheading);
