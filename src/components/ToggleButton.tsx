import "./ToggleButton.styles.css";

interface Props {
    handleToggle(): void
}

export function ToggleButton({ handleToggle }: Props) {
  return (
    <button onClick={handleToggle} className="toggle-button">
      toggle
    </button>
  );
}
