import "./SidePanel.styles.css";

interface Props {
    collapsed?: boolean
}

export function SidePanel({ collapsed }: Props) {
    const styles = [
        "side-panel",
        collapsed && "side-panel-collapsed",
    ].filter(Boolean).join(" ")

    return (
        <div className={styles}>
            <div className="content">
                {Array.from({ length: 8 }).map(() => (
                    <div className="content-item">
                        <img alt="video thumbnail" src="https://via.placeholder.com/280x150.png?text=Item" />
                    </div>
                ))}
            </div>
        </div>
    );
 }
