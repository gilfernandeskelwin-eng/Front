import "./ButtonCss.css";

export default function ButtonCss({ bgCOlor, label, color }) {
  return (
    <button style = {{
        backgroundColor: bgCOlor, color: color}}>
        {label}
    </button>
  );
}