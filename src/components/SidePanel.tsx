import "./SidePanel.styles.css";

interface Props {
    shouldShowPanel: boolean
}

export function SidePanel({ shouldShowPanel }: Props) {
    const styles = [
        "side-panel",
        shouldShowPanel && "side-panel-visible",
    ].filter(Boolean).join(" ")

    return (
        <div className={styles}>
            <div className="content">
                {Array.from({ length: 8 }).map(() => (
                    <div className="content-item">
                        <img src="https://via.placeholder.com/280x150.png?text=Item" />
                    </div>
                ))}
            </div>
        </div>
    );
 }
